import React, { createContext, useMemo } from 'react';
import { deepMerge } from '../helpers/deep-merge';
import { baseTheme } from './base-theme';
import { Theme } from './types';

interface ThemeContextValue {
	theme: Theme;
}

export const ThemeContext = createContext({} as ThemeContextValue);

interface ThemeProviderProps {
	theme?: Theme;
	children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
	theme,
	children,
}) => {
	const currentTheme = useMemo(() => {
		if (!theme) return baseTheme;

		return deepMerge(baseTheme, theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme: currentTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
