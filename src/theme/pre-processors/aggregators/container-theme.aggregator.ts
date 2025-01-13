import { ContainerThemeAggregate } from '@theme/theming.interface';
import { Style, TokenLeaves } from '@theme/types';
import { ViewStyle } from 'react-native';
import { ProcessorResult } from '../components-theme.processor';
import { extractBorderStyle } from '../extractors/border-to-style';
import { extractMarginStyle } from '../extractors/margin-to-style';
import { extractPaddingStyle } from '../extractors/padding-to-style';
import { extractShadowStyle } from '../extractors/shadow-to-style';
import { tokenOrValue } from '../helpers';
const containerProps = [
	'border',
	'opacity',
	'padding',
	'margin',
	'backgroundColor',
	'shadow',
	'height',
	'width',
];
function isContainerAggregator(
	theme: Record<string, any>
): theme is ContainerThemeAggregate {
	return containerProps.some((prop) => prop in theme);
}

export function containerThemeProcessor(
	leaves: TokenLeaves,
	theme: Record<string, any>
): ProcessorResult | null {
	if (!isContainerAggregator(theme)) return null;

	let style = {} as Style;
	const {
		backgroundColor,
		padding,
		margin,
		border,
		opacity,
		width,
		height,
		shadow,
		...rest
	} = theme;

	function addToStyle(newValues: ViewStyle | undefined) {
		if (!newValues) return;
		style = { ...style, ...newValues };
	}

	if (padding) {
		addToStyle(extractPaddingStyle(leaves, padding));
	}

	if (margin) {
		addToStyle(extractMarginStyle(leaves, margin));
	}

	if (border) {
		addToStyle(extractBorderStyle(leaves, border));
	}

	if (opacity) {
		addToStyle({ opacity: tokenOrValue(leaves, opacity) });
	}

	if (backgroundColor) {
		addToStyle({ backgroundColor: tokenOrValue(leaves, backgroundColor) });
	}

	if (width) {
		addToStyle({ width: tokenOrValue(leaves, width) });
	}

	if (height) {
		addToStyle({ height: tokenOrValue(leaves, height) });
	}

	if (shadow) {
		addToStyle(extractShadowStyle(leaves, shadow));
	}

	return { style, props: null, restObject: rest };
}
