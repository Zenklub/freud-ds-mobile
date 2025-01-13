import { DeepPartial } from '@helpers/deep-partial.interface';
import { deepMerge } from '@helpers/object.helper';
import React, { useCallback, useMemo, useState } from 'react';
import { baseDarkTheme, baseTheme, baseTokens } from './base-theme';
import { ThemeContext } from './context';
import { componentsThemeProcessor } from './pre-processors/components-theme.processor';
import { tokensProcessor } from './pre-processors/tokens.processor';
import {
	Theme,
	ThemeColorMode,
	ThemeValues,
	TokenLeaves,
	Tokens,
} from './types';

export interface ThemeContextValue {
	tokens: Tokens;
	leaves: TokenLeaves;
	current: ThemeValues;
	darkTheme: ThemeValues;
	lightTheme: ThemeValues;
	mode: ThemeColorMode;
	setColorMode: (mode: ThemeColorMode) => void;
}

export interface ThemeProviderProps {
	tokens?: Tokens;
	theme?: Theme;
	darkTheme?: DeepPartial<Theme>;
	children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
	theme,
	darkTheme,
	tokens,
	children,
}) => {
	const [mode, setMode] = useState<ThemeColorMode>('light');

	const { currentTokens, leaves } = useMemo(() => {
		const currentTokens = tokens ? deepMerge(baseTokens, tokens) : baseTokens;
		const leaves = tokensProcessor(currentTokens);

		return { currentTokens, leaves };
	}, [tokens]);

	const { dark, light } = useMemo(() => {
		const mergedTheme = theme ? deepMerge(baseTheme, theme) : baseTheme;
		const light = componentsThemeProcessor(leaves, mergedTheme);

		const mergedBaseDarkTheme = deepMerge(mergedTheme, baseDarkTheme);
		const mergedDarkTheme = darkTheme
			? deepMerge(mergedBaseDarkTheme, darkTheme)
			: mergedBaseDarkTheme;
		const dark = componentsThemeProcessor(leaves, mergedDarkTheme as Theme);

		return { dark, light };
	}, [currentTokens, theme, darkTheme]);

	const setColorMode = useCallback((mode: ThemeColorMode) => {
		setMode(mode);
	}, []);

	const value = useMemo<ThemeContextValue>(
		() => ({
			mode,
			leaves,
			tokens: currentTokens,
			darkTheme: dark,
			lightTheme: light,
			current: mode === 'dark' ? dark : light,
			setColorMode,
		}),
		[mode, leaves, currentTokens, dark, light, setColorMode]
	);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
