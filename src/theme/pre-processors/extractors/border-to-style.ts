import { BorderThemeValue } from '@theme/theming.interface';
import { TokenLeaves } from '@theme/types';
import { ViewStyle } from 'react-native';
import { tokenOrValue } from '../helpers';

const borderProps = ['width', 'color', 'radius', 'style'];

function isBorderThemeValue(
	theme: Record<string, any>
): theme is BorderThemeValue {
	return borderProps.some((prop) => prop in theme);
}

export function extractBorderStyle(
	leaves: TokenLeaves,
	border?: BorderThemeValue
): ViewStyle | undefined {
	if (!border || !isBorderThemeValue(border)) {
		return undefined;
	}

	let style: ViewStyle = {};

	// width
	if (typeof border.width === 'object') {
		style.borderTopWidth = tokenOrValue(leaves, border.width.top);
		style.borderBottomWidth = tokenOrValue(leaves, border.width.bottom);
		style.borderRightWidth = tokenOrValue(leaves, border.width.right);
		style.borderLeftWidth = tokenOrValue(leaves, border.width.left);
	} else {
		style.borderWidth = tokenOrValue(leaves, border.width);
	}

	// color
	if (typeof border.color === 'object') {
		style.borderTopColor = tokenOrValue(leaves, border.color.top);
		style.borderBottomColor = tokenOrValue(leaves, border.color.bottom);
		style.borderRightColor = tokenOrValue(leaves, border.color.right);
		style.borderLeftColor = tokenOrValue(leaves, border.color.left);
	} else {
		style.borderColor = tokenOrValue(leaves, border.color);
	}

	// radius
	if (typeof border.radius === 'object') {
		style.borderTopLeftRadius = tokenOrValue(leaves, border.radius.topLeft);
		style.borderTopRightRadius = tokenOrValue(leaves, border.radius.topRight);
		style.borderBottomLeftRadius = tokenOrValue(
			leaves,
			border.radius.bottomLeft
		);
		style.borderBottomRightRadius = tokenOrValue(
			leaves,
			border.radius.bottomRight
		);
	} else {
		style.borderRadius = tokenOrValue(leaves, border.radius);
	}

	// style
	if (border.style) {
		style.borderStyle = border.style;
	}

	return style;
}
