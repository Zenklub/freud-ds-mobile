import { PaddingThemeValue } from '@theme/theming.interface';
import { SpacingLeaves, TokenLeaves } from '@theme/types';
import { ViewStyle } from 'react-native';
import { tokenOrValue } from '../helpers';

const paddingProperties = [
	'top',
	'bottom',
	'left',
	'right',
	'horizontal',
	'vertical',
] as const;

function isPaddingThemeValue(theme: unknown): theme is PaddingThemeValue {
	if (typeof theme === 'number') return true;

	if (theme && typeof theme === 'object') {
		return paddingProperties.some((prop) => prop in theme);
	}

	if (typeof theme === 'string' && theme.startsWith('spacing')) {
		return true;
	}
	return false;
}

export function extractPaddingStyle(
	leaves: TokenLeaves,
	padding?: PaddingThemeValue
): ViewStyle | undefined {
	if (!padding || !isPaddingThemeValue(padding)) return undefined;

	let style: ViewStyle = {};
	if (typeof padding === 'object') {
		const { top, bottom, left, right, horizontal, vertical } =
			padding as Record<string, SpacingLeaves | number | undefined>;
		style.paddingTop = tokenOrValue(leaves, top);
		style.paddingBottom = tokenOrValue(leaves, bottom);
		style.paddingRight = tokenOrValue(leaves, right);
		style.paddingLeft = tokenOrValue(leaves, left);
		style.paddingHorizontal = tokenOrValue(leaves, horizontal);
		style.paddingVertical = tokenOrValue(leaves, vertical);
	} else {
		style.padding = tokenOrValue(leaves, padding);
	}

	return style;
}
