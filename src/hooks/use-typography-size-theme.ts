import {
	FontSizeBaseMap,
	HeadingFontSizes,
	isHeadingFontSizes,
	isTextFontSizes,
	TextFontSizes,
} from '@theme/types/typography';
import { useTheme } from './use-theme';
import { useMemo } from 'react';

export function useTypographySizeTheme<Type extends 'heading'>(
	type: Type,
	size: HeadingFontSizes
): FontSizeBaseMap;
export function useTypographySizeTheme<T extends 'text'>(
	type: T,
	size: TextFontSizes
): FontSizeBaseMap;
export function useTypographySizeTheme<
	T extends 'text' | 'heading',
	K extends TextFontSizes | HeadingFontSizes
>(type: T, size: K): FontSizeBaseMap {
	const theme = useTheme('typography');

	const fontSizeConfig = useMemo(() => {
		if (type === 'text' && isTextFontSizes(size)) {
			return theme.text[size];
		} else if (type === 'heading' && isHeadingFontSizes(size)) {
			return theme.heading[size];
		}

		throw new Error(`Invalid size ${size} for type ${type}`);
	}, [theme, type, size]);

	return fontSizeConfig;
}
