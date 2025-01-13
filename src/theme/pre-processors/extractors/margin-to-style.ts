import { removeNullable } from '@helpers/object.helper';
import { MarginThemeValue } from '@theme/theming.interface';
import { SpacingLeaves, TokenLeaves } from '@theme/types';
import { ViewStyle } from 'react-native';
import { tokenOrValue } from '../helpers';

const marginProperties = [
	'top',
	'bottom',
	'left',
	'right',
	'horizontal',
	'vertical',
] as const;

function isMarginThemeValue(margin: unknown): margin is MarginThemeValue {
	if (typeof margin === 'number') return true;

	if (margin && typeof margin === 'object') {
		return marginProperties.some((prop) => prop in margin);
	}

	if (typeof margin === 'string' && margin.startsWith('spacing')) {
		return true;
	}

	return false;
}

export function extractMarginStyle(
	leaves: TokenLeaves,
	margin?: MarginThemeValue
): ViewStyle | undefined {
	if (!margin || !isMarginThemeValue(margin)) return undefined;

	let style: ViewStyle = {};
	if (typeof margin === 'object') {
		const { top, bottom, left, right, horizontal, vertical } = margin as Record<
			string,
			SpacingLeaves | number | undefined
		>;
		style.marginTop = tokenOrValue(leaves, top);
		style.marginBottom = tokenOrValue(leaves, bottom);
		style.marginRight = tokenOrValue(leaves, right);
		style.marginLeft = tokenOrValue(leaves, left);

		style.marginHorizontal = tokenOrValue(leaves, horizontal);
		style.marginVertical = tokenOrValue(leaves, vertical);
	} else {
		style.margin = tokenOrValue(leaves, margin);
	}

	return removeNullable(style);
}
