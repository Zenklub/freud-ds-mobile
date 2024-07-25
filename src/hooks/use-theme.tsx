import { useContext } from 'react';
import { Theme } from '@theme/types';
import { ThemeContext } from '@theme/theme-provider';

type Keys = keyof Theme;

export function useTheme(): Theme;
export function useTheme<K extends Keys>(key: K): Theme[K];
export function useTheme<K extends Keys>(key?: K): Theme | Theme[K] {
	const theme = useContext(ThemeContext);

	if (!theme) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	if (key) {
		return theme[key];
	}

	return theme;
}
