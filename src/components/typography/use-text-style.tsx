import { useMemo } from 'react';
import { TextStyle } from 'react-native';
import { useColors } from '@hooks';
import {
	FontFamilyMap,
	FontSizeBaseMap,
	FontSourceMap,
	FontWeightMap,
	LineHeightMap,
} from './typography-theme';
import { IColors } from '@theme/base/colors';

export const isHardCodedColor = (color: string) => {
	return color.includes('#') || color.startsWith('rgb');
};

export interface IUseTextStyle<T extends string> {
	font: string;
	color: IColors;
	textAlign?: TextStyle['textAlign'];
	customColor?: string;
	fontSizeMap: Record<T, FontSizeBaseMap>;
	fontSize: T;
	fontWeight?: string;
	bold?: boolean;
	semibold?: boolean;
	lineHeight?: string;
	italic?: boolean;
	underline?: boolean;
	strikeThrough?: boolean;
	isTruncated?: boolean;
}

const calculateLineHeight = (lineHeight: number, fontSize: number) => {
	return lineHeight * fontSize;
};

export function useTextStyle<T extends string>({
	font,
	color,
	customColor,
	textAlign,
	fontSizeMap,
	fontSize,
	fontWeight,
	bold,
	semibold,
	lineHeight,
	italic,
	underline,
	strikeThrough,
	isTruncated,
}: IUseTextStyle<T>) {
	const [themeColor] = useColors(color);

	const textColor = useMemo(() => {
		if (customColor && isHardCodedColor(customColor)) {
			return customColor;
		}

		return themeColor;
	}, [customColor, themeColor]);

	return useMemo(() => {
		const textStyle: TextStyle = { color: textColor, textAlign };

		const { size, baseLineHeight, baseFontWeight } = fontSizeMap[fontSize];
		let _fontWeight = fontWeight ?? baseFontWeight;

		if (bold) {
			_fontWeight = 'bold';
		} else if (semibold) {
			_fontWeight = 'semibold';
		}

		const lineHeightValue = LineHeightMap[lineHeight ?? baseLineHeight];
		const fontWeightValue = FontWeightMap[_fontWeight];

		textStyle.fontSize = size;
		textStyle.lineHeight = calculateLineHeight(lineHeightValue, size);
		textStyle.fontWeight = fontWeightValue;

		const fontName = FontFamilyMap[font];

		if (fontName) {
			textStyle.fontFamily = FontSourceMap[fontName][_fontWeight];
		}

		if (italic) {
			textStyle.fontStyle = 'italic';
		}

		if (underline && strikeThrough) {
			textStyle.textDecorationLine = 'underline line-through';
		} else if (underline) {
			textStyle.textDecorationLine = 'underline';
		} else if (strikeThrough) {
			textStyle.textDecorationLine = 'line-through';
		}

		if (isTruncated) {
			textStyle.overflow = 'hidden';
		}

		return textStyle;
	}, [
		textColor,
		textAlign,
		bold,
		semibold,
		fontSize,
		fontWeight,
		lineHeight,
		font,
		italic,
		underline,
		strikeThrough,
		fontSizeMap,
	]);
}
