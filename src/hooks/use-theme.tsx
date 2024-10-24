import { ThemeContext } from '@theme/theme-provider';
import { BordersSizes, ShadowSizes, Sizes, SpacingSizes } from '@theme/tokens';
import { OpacityLevel } from '@theme/tokens/opacity';
import { RadiiSize } from '@theme/tokens/radius';
import { Theme } from '@theme/types';
import { useContext } from 'react';

type Keys = keyof Theme;

export function useTheme(): Theme;
export function useTheme<K extends Keys>(key: K): Theme[K];
export function useTheme<K extends Keys>(key?: K): Theme | Theme[K] {
	const context = useContext(ThemeContext);

	if (!context?.theme) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	if (key) {
		return context.theme[key];
	}

	return context.theme;
}

export function useRadii(size: RadiiSize | number) {
	const theme = useTheme('radii');

	if (typeof size === 'number') {
		return size;
	}

	return theme[size];
}

export function useOpacity(opacity: OpacityLevel | number) {
	const theme = useTheme('opacity');

	if (typeof opacity === 'number') {
		return opacity;
	}

	return theme[opacity];
}

export function useSpacing(spacing: SpacingSizes | number) {
	const theme = useTheme('spacing');

	if (typeof spacing === 'number') {
		return spacing;
	}

	return theme[spacing];
}

export function useSize(size: Sizes | number) {
	const theme = useTheme('size');

	if (typeof size === 'number') {
		return size;
	}

	return theme[size];
}

export function useShadow(shadow: ShadowSizes) {
	const theme = useTheme('shadow');

	return theme[shadow];
}

export function useBorder(border: BordersSizes | number) {
	const theme = useTheme('border');

	if (typeof border === 'number') {
		return border;
	}

	return theme[border];
}

export function useComponentTheme<K extends keyof Theme['components']>(
	component: K
): Theme['components'][K] {
	const theme = useTheme();

	return theme.components[component];
}
