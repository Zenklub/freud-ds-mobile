import React, { createContext, useMemo } from 'react';
import { Theme } from './types';
import { baseTheme } from './base-theme';

export const ThemeContext = createContext({} as Theme);

interface ThemeProviderProps {
	theme?: Theme;
	children: React.ReactNode;
}

type Primitives = string | number | boolean | undefined | null;

function isPrimitive(value: any): value is Primitives {
	return (
		!value ||
		typeof value === 'string' ||
		typeof value === 'number' ||
		typeof value === 'boolean' ||
		typeof value === 'undefined' ||
		typeof value === 'function' ||
		typeof value === 'symbol' ||
		typeof value === 'bigint'
	);
}

function deepMerge<T>(target: T, source: T): T {
	if (!source) return target;
	if (!target) return source;

	if (typeof target !== typeof source) return target;

	if (isPrimitive(source)) {
		return source as T;
	}

	let targetCopy = JSON.parse(JSON.stringify(target));

	if (Array.isArray(target)) {
		for (const key in source) {
			targetCopy.push(source[key]);
		}
	} else if (typeof target === 'object') {
		for (const key in source) {
			targetCopy[key] = deepMerge((target as any)[key], source[key]);
		}
	}

	return targetCopy;
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
		<ThemeContext.Provider value={currentTheme}>
			{children}
		</ThemeContext.Provider>
	);
};
