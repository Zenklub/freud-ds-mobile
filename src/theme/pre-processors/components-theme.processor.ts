import { deepMerge, removeNullable } from '@helpers/object.helper';
import { Style, Theme, ThemeValues, TokenLeaves } from '@theme/types';
import { containerThemeProcessor } from './aggregators/container-theme.aggregator';
import { iconThemeProcessor } from './aggregators/icon-theme.aggregator';
import { typographyThemingProcessor } from './aggregators/text-theme.aggregator';
import { tokenOrValue } from './helpers';

export interface ProcessorResult {
	style: Style;
	props: Record<string, any> | null;
	restObject: Record<string, any> | null;
}

const stylesProperties = [
	'backfaceVisibility',
	'testID',
	'elevation',
	'alignContent',
	'alignItems',
	'alignSelf',
	'aspectRatio',
	'borderEndWidth',
	'borderStartWidth',
	'bottom',
	'display',
	'end',
	'flex',
	'flexBasis',
	'flexDirection',
	'flexGrow',
	'flexShrink',
	'flexWrap',
	'height',
	'justifyContent',
	'left',
	'margin',
	'marginBottom',
	'marginEnd',
	'marginHorizontal',
	'marginLeft',
	'marginRight',
	'marginStart',
	'marginTop',
	'marginVertical',
	'maxHeight',
	'maxWidth',
	'minHeight',
	'minWidth',
	'overflow',
	'padding',
	'paddingBottom',
	'paddingEnd',
	'paddingHorizontal',
	'paddingLeft',
	'paddingRight',
	'paddingStart',
	'paddingTop',
	'paddingVertical',
	'position',
	'right',
	'start',
	'top',
	'width',
	'zIndex',
	'direction',
	'shadowColor',
	'shadowOffset',
	'shadowOpacity',
	'shadowRadius',
	'transform',
	'transformMatrix',
	'rotation',
	'scaleX',
	'scaleY',
	'translateX',
	'translateY',
	'color',
	'fontFamily',
	'fontSize',
	'fontStyle',
	'fontWeight',
	'letterSpacing',
	'lineHeight',
	'textAlign',
	'textDecorationLine',
	'textDecorationStyle',
	'textDecorationColor',
	'textShadowColor',
	'textShadowOffset',
	'textShadowRadius',
	'textTransform',
	'fontVariant',
	'writingDirection',
	'textAlignVertical',
	'includeFontPadding',
] as const;

function extractStyleProperties(
	leaves: TokenLeaves,
	theme: Record<string, any>
): ProcessorResult | null {
	let style = {} as Style;
	let props = {} as Record<string, any>;
	let restObject = {} as Record<string, any>;
	for (const key in theme) {
		if (!stylesProperties.includes(key as any)) {
			restObject[key] = theme[key];
			continue;
		}

		const value = theme[key];
		if (!value) {
			continue;
		}

		const processedValue = tokenOrValue(leaves, value);

		if (processedValue) {
			style[key as keyof Style] = processedValue;
		} else {
			props[key] = value;
		}
	}

	return { style, props, restObject };
}

function extractStyle(leaves: TokenLeaves, source: Record<string, any>) {
	let object = source;
	let style = {} as Style;
	let props = {} as Record<string, any>;

	function setResult(result: ProcessorResult | null) {
		if (!result) return;

		if (result.style) {
			style = { ...style, ...result.style };
		}

		if (result.props) {
			props = { ...props, ...result.props };
		}

		if (result.restObject) {
			object = result.restObject;
		}
	}

	const textResult = typographyThemingProcessor(leaves, object);
	setResult(textResult);

	const iconResult = iconThemeProcessor(leaves, object);
	setResult(iconResult);

	const containerResult = containerThemeProcessor(leaves, object);
	setResult(containerResult);

	const styleResult = extractStyleProperties(leaves, object);
	setResult(styleResult);

	return { style, props, rest: object };
}

function processComponent(
	leaves: TokenLeaves,
	object: Record<string, any>
): Record<string, any> {
	const processed = {} as Record<string, any>;

	const { style, props, rest } = extractStyle(leaves, object);

	if (Object.keys(style).length) {
		processed.style = style;
	}

	if (Object.keys(props).length) {
		processed.props = props;
	}

	for (const key in rest) {
		const value = object[key];
		if (!value) continue;

		if (typeof value === 'object') {
			processed[key] = processComponent(leaves, value);
			continue;
		}

		processed[key] = tokenOrValue(leaves, value);
	}

	return processed;
}

export function componentsThemeProcessor(
	leaves: TokenLeaves,
	theme: Theme
): ThemeValues {
	const values = {} as ThemeValues;

	const mergedBasesTheme = deepMergeBasesProperty(theme);

	for (const _key in mergedBasesTheme) {
		const key = _key as keyof Theme;
		const value = mergedBasesTheme[key];

		values[key] = processComponent(leaves, value) as any;
	}

	return removeNullable(values);
}

function deepMergeBasesProperty<T extends Record<string, any>>(object: T): T {
	if (typeof object !== 'object') return object;

	if (Array.isArray(object)) {
		return object.map((item) => deepMergeBasesProperty(item)) as unknown as T;
	}

	const { base, ...rest } = object;

	const merged = {} as T;

	for (const key in rest) {
		const value = rest[key];

		if (typeof value === 'object') {
			const mergedValue = deepMerge(base, value);
			merged[key as keyof T] = deepMergeBasesProperty(mergedValue);
		} else {
			merged[key as keyof T] = value;
		}
	}

	return merged;
}
