import { ThemeContext } from '@theme/context';
import {
	BordersSizes,
	OpacityLevel,
	RadiiSize,
	ShadowSizes,
	Sizes,
	SpacingSizes,
} from '@theme/tokens/tokens';
import { ThemeValues, Tokens } from '@theme/types';
import { useContext } from 'react';

type TokensKeys = keyof Tokens;

export function useFreudThemeContext() {
	const context = useContext(ThemeContext);

	if (!context?.current) {
		throw new Error('useFreudTheme must be used within a ThemeProvider');
	}

	return context;
}

export function useColorMode(inverted?: boolean) {
	const context = useFreudThemeContext();

	if (inverted) {
		return context.mode === 'light' ? 'dark' : 'light';
	}

	return context.mode;
}

export function useTokens(): Tokens;
export function useTokens<K extends TokensKeys>(key: K): Tokens[K];
export function useTokens<K extends TokensKeys>(key?: K): Tokens | Tokens[K] {
	const context = useFreudThemeContext();

	if (key) {
		return context.tokens[key];
	}

	return context.tokens;
}

export function useTokensLeaves() {
	const context = useFreudThemeContext();
	return context.leaves;
}

export function useRadii(size: RadiiSize | number) {
	const theme = useTokens('radii');

	if (typeof size === 'number') {
		return size;
	}

	return theme[size];
}

export function useOpacity(opacity: OpacityLevel | number) {
	const theme = useTokens('opacity');

	if (typeof opacity === 'number') {
		return opacity;
	}

	return theme[opacity];
}

export function useSpacing(spacing: SpacingSizes | number) {
	const theme = useTokens('spacing');

	if (typeof spacing === 'number') {
		return spacing;
	}

	return theme[spacing];
}

export function useSize(size: Sizes | number) {
	const theme = useTokens('size');

	if (typeof size === 'number') {
		return size;
	}

	return theme[size];
}

export function useShadow(shadow: ShadowSizes) {
	const theme = useTokens('shadow');

	return theme[shadow];
}

export function useBorder(border: BordersSizes | number) {
	const theme = useTokens('border');

	if (typeof border === 'number') {
		return border;
	}

	return theme[border];
}

export function useComponentTheme<K extends keyof ThemeValues>(
	/**
	 * The name of the component theme to use.
	 */
	name: K,
	/**
	 * The color mode to use for the theme. If not provided,
	 * the current mode defined by system preferences will be used.
	 */
	colorMode?: 'light' | 'dark' | 'current'
): ThemeValues[K] {
	const context = useFreudThemeContext();

	if (colorMode === 'light') {
		return context.lightTheme[name];
	}

	if (colorMode === 'dark') {
		return context.darkTheme[name];
	}

	return context.current[name];
}
