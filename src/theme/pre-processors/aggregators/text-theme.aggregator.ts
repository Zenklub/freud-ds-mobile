import { calculateLineHeight } from '@helpers/calculate-line-height';
import {
	TextThemeAggregator,
	TypographyThemeAggregator,
} from '@theme/theming.interface';
import { FontFamily, FontWeight } from '@theme/tokens/tokens';
import { Style, TokenLeaves } from '@theme/types';
import { ProcessorResult } from '../components-theme.processor';
import { tokenOrValue } from '../helpers';

const textStyles = [
	'fontFamily',
	'fontSize',
	'fontWeight',
	'lineHeight',
] as const;

function isTypographyThemeAggregator(
	theme: Record<string, any>
): theme is TypographyThemeAggregator {
	return textStyles.some((style) => style in theme);
}

function isTextAggregator(
	theme: Record<string, any>
): theme is TextThemeAggregator {
	return 'textSize' in theme;
}

export function typographyThemingProcessor(
	leaves: TokenLeaves,
	theme: Record<string, any>
): ProcessorResult | null {
	if (isTextAggregator(theme)) {
		let props = {} as Record<string, any>;

		const {
			color,
			textSize,
			fontSize,
			fontWeight,
			lineHeight,
			fontFamily,
			...rest
		} = theme;

		const size = textSize.split('.')[1];
		props.size = size;

		const family: FontFamily = textSize.startsWith('heading.')
			? 'heading'
			: 'body';

		let style = processTextStyles(leaves, {
			fontFamily: `typography.families.${family}`,
			fontSize,
			fontWeight,
			lineHeight,
			color,
		});

		return { style, props, restObject: rest };
	}

	if (isTypographyThemeAggregator(theme)) {
		const style = processTextStyles(leaves, theme);
		const {
			color,
			fontSize,
			fontWeight,
			lineHeight,
			fontFamily,
			...restObject
		} = theme;
		return { style, props: {}, restObject };
	}

	return null;
}

function isFontWeightToken(value: string): value is FontWeight {
	return value.startsWith('typography.fontWeights');
}

export function processTextStyles(
	leaves: TokenLeaves,
	{
		fontFamily,
		fontSize,
		fontWeight,
		lineHeight,
		color,
	}: TypographyThemeAggregator
): Style {
	const style = {} as Style;

	if (color) {
		style.color = tokenOrValue(leaves, color);
	}

	if (fontSize) {
		style.fontSize = tokenOrValue(leaves, fontSize);
	}

	if (typeof lineHeight !== 'undefined') {
		if (typeof lineHeight === 'number') {
			style.lineHeight = lineHeight;
		} else if (typeof style.fontSize === 'number') {
			const baseLineHeight = tokenOrValue(leaves, lineHeight);
			style.lineHeight = calculateLineHeight(baseLineHeight, style.fontSize);
		} else if (__DEV__) {
			throw new Error(
				'Line height must be a number or a token. If a token is provided, a font size must be provided as well.'
			);
		}
	}

	if (
		!fontFamily ||
		!(fontFamily as string | undefined)?.startsWith('typography.families')
	) {
		style.fontFamily = fontFamily as string;
		return style;
	}

	const family: FontFamily = (fontFamily as string | undefined)?.replace(
		'typography.families.',
		''
	) as FontFamily;
	const fontWeightToken = (
		fontWeight && isFontWeightToken(fontWeight)
			? fontWeight.replace('typography.fontWeights.', '')
			: 'typography.fontWeights.regular'
	) as FontWeight;

	style.fontFamily = tokenOrValue(
		leaves,
		`typography.families.${family}.${fontWeightToken}`
	);

	if (fontWeight) {
		style.fontWeight = tokenOrValue(leaves, fontWeight);
	}

	return style;
}
