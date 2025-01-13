import { ShadowThemeValue } from '@theme/theming.interface';
import { TokenLeaves } from '@theme/types';
import { ViewStyle } from 'react-native';
import { tokenOrValue } from '../helpers';

const shadowProperties = [
	'color',
	'offset',
	'opacity',
	'radius',
	'elevation',
] as const;

function isShadowThemeValue(theme: unknown): theme is ShadowThemeValue {
	if (typeof theme === 'number') return true;

	if (theme && typeof theme === 'object') {
		return shadowProperties.some((prop) => prop in theme);
	}

	if (typeof theme === 'string' && theme.startsWith('shadow.')) {
		return true;
	}

	return false;
}

export function extractShadowStyle(
	leaves: TokenLeaves,
	shadow?: ShadowThemeValue
): ViewStyle | undefined {
	if (!shadow || !isShadowThemeValue(shadow)) return undefined;

	let style: ViewStyle = {};

	if (typeof shadow === 'object') {
		if ('color' in shadow) {
			style.shadowColor = tokenOrValue(leaves, shadow.color);
		}
		if ('offset' in shadow && typeof shadow.offset === 'object') {
			style.shadowOffset = {
				width: tokenOrValue(leaves, shadow.offset.width),
				height: tokenOrValue(leaves, shadow.offset.height),
			};
		}
		if ('offset' in shadow && typeof shadow.offset === 'number') {
			style.shadowOffset = {
				width: shadow.offset,
				height: shadow.offset,
			};
		}

		if ('opacity' in shadow) {
			style.shadowOpacity = tokenOrValue(leaves, shadow.opacity);
		}
		if ('radius' in shadow) {
			style.shadowRadius = tokenOrValue(leaves, shadow.radius);
		}
		if ('elevation' in shadow) {
			style.elevation = tokenOrValue(leaves, shadow.elevation) as number;
		}
	} else {
		const shadowValue = tokenOrValue(leaves, shadow);
		style = { ...style, ...shadowValue };
	}

	return style;
}
