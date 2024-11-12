import { DeepPartial } from '@helpers/deep-partial.interface';
import React, { createContext } from 'react';
import { useThemeProviderValues } from './theme-provider-values.hook';
import { Theme, ThemeContextValue, Tokens } from './types';

export const ThemeContext = createContext({} as ThemeContextValue);

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
	const value = useThemeProviderValues({ tokens, theme, darkTheme });

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
