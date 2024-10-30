import { DeepPartial } from '@helpers/deep-partial.interface';
import { useCallback, useMemo, useState } from 'react';
import { deepMerge } from '../helpers/object.helper';
import { baseDarkTheme, baseTheme, baseTokens } from './base-theme';
import { componentsThemeProcessor } from './pre-processors/components-theme.processor';
import { tokensProcessor } from './pre-processors/tokens.processor';
import { Theme, ThemeColorMode, ThemeContextValue, Tokens } from './types';

export interface UseThemeProviderValues {
	tokens?: Tokens;
	theme?: Theme;
	darkTheme?: DeepPartial<Theme>;
}

export function useThemeProviderValues({
	tokens,
	theme,
	darkTheme,
}: UseThemeProviderValues): ThemeContextValue {
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

	return {
		mode,
		leaves,
		tokens: currentTokens,
		darkTheme: dark,
		lightTheme: light,
		current: mode === 'dark' ? dark : light,
		setColorMode,
	};
}
