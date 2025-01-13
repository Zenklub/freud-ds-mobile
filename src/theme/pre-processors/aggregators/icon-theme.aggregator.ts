import { IconThemeAggregator } from '@theme/theming.interface';
import { TokenLeaves } from '@theme/types';
import { TextStyle } from 'react-native';
import { ProcessorResult } from '../components-theme.processor';
import { tokenOrValue } from '../helpers';

function isIconThemeAggregator(
	theme: Record<string, any>
): theme is IconThemeAggregator {
	if (!theme) return false;

	if ('name' in theme) {
		return (
			typeof theme.name === 'string' && theme.name.startsWith('icons.names.')
		);
	}

	if ('size' in theme) {
		return (
			typeof theme.size === 'number' ||
			(typeof theme.size === 'string' && theme.size.startsWith('icons.sizes.'))
		);
	}

	if ('color' in theme) {
		return (
			typeof theme.color === 'string' &&
			(theme.color.startsWith('colors.') ||
				theme.color.startsWith('#') ||
				theme.color === 'transparent' ||
				/^rgba?\(/i.test(theme.color))
		);
	}

	return false;
}

export function iconThemeProcessor(
	leaves: TokenLeaves,
	theme: Record<string, any>
): ProcessorResult | null {
	if (!isIconThemeAggregator(theme)) return null;

	let style = {} as TextStyle;
	let props = {} as Record<string, any>;
	const { size, color, name, ...rest } = theme;

	props.size = tokenOrValue(leaves, size);
	props.color = tokenOrValue(leaves, color);
	props.name = tokenOrValue(leaves, name);

	return { style, props, restObject: rest };
}
