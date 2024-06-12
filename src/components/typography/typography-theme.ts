import { TextStyle } from 'react-native';
import {
	IFont,
	IFontWeight,
	IHeadingFontSizes,
	ILineHeight,
	ITextFontSizes,
} from './typography.types';
// @ts-ignore
import * as Tokens from '@freud-ds/tokens/style/react-native/variables';

export const FontFamilyMap = {
	heading: 'SourceSansPro',
	body: 'SourceSansPro',
	mono: 'SourceSansPro',
	customFont: 'SourceSansPro',
} as const;

export const LineHeightMap: Record<ILineHeight, number> = {
	sm: Tokens.lineHeightXs,
	md: Tokens.lineHeightMd,
	lg: Tokens.lineHeightLg,
	xl: Tokens.lineHeightXl,
};

export const FontWeightMap: Record<IFontWeight, TextStyle['fontWeight']> = {
	regular: `${Tokens.fontWeightRegular}` as TextStyle['fontWeight'],
	semibold: `${Tokens.fontWeightSemibold}` as TextStyle['fontWeight'],
	bold: `${Tokens.fontWeightBold}` as TextStyle['fontWeight'],
};

export interface FontSizeBaseMap {
	size: number;
	baseLineHeight: ILineHeight;
	baseFontWeight: IFontWeight;
	baseFontFamily: IFont;
}

type FontNames = typeof FontFamilyMap[IFont];

type FontSourceMapValue = Record<IFontWeight, string>;

export const FontSourceMap: Record<FontNames, FontSourceMapValue> = {
	SourceSansPro: {
		regular: 'SourceSansPro-Regular',
		semibold: 'SourceSansPro-SemiBold',
		bold: 'SourceSansPro-Bold',
	},
};

export const TextFontSize: Record<ITextFontSizes, FontSizeBaseMap> = {
	'2xs': {
		size: Tokens.fontSizeNano,
		baseLineHeight: 'sm',
		baseFontWeight: 'regular',
		baseFontFamily: 'body',
	},
	xs: {
		size: Tokens.fontSizeXxxs,
		baseLineHeight: 'sm',
		baseFontWeight: 'regular',
		baseFontFamily: 'body',
	},
	sm: {
		size: Tokens.fontSizeXxs,
		baseLineHeight: 'sm',
		baseFontWeight: 'regular',
		baseFontFamily: 'body',
	},
	md: {
		size: Tokens.fontSizeXs,
		baseLineHeight: 'md',
		baseFontWeight: 'regular',
		baseFontFamily: 'body',
	},
	lg: {
		size: Tokens.fontSizeSm,
		baseLineHeight: 'md',
		baseFontWeight: 'regular',
		baseFontFamily: 'body',
	},
	xl: {
		size: Tokens.fontSizeMd,
		baseLineHeight: 'md',
		baseFontWeight: 'regular',
		baseFontFamily: 'body',
	},
	'2xl': {
		size: Tokens.fontSizeLg,
		baseLineHeight: 'md',
		baseFontWeight: 'regular',
		baseFontFamily: 'body',
	},
	'3xl': {
		size: Tokens.fontSizeXl,
		baseLineHeight: 'md',
		baseFontWeight: 'regular',
		baseFontFamily: 'body',
	},
	'4xl': {
		size: Tokens.fontSizeXxl,
		baseLineHeight: 'md',
		baseFontWeight: 'regular',
		baseFontFamily: 'body',
	},
	'5xl': {
		size: Tokens.fontSizeXxxl,
		baseLineHeight: 'md',
		baseFontWeight: 'regular',
		baseFontFamily: 'body',
	},
	'6xl': {
		size: Tokens.fontSizeGiant,
		baseLineHeight: 'md',
		baseFontWeight: 'regular',
		baseFontFamily: 'body',
	},
};

export const HeadingFontSize: Record<IHeadingFontSizes, FontSizeBaseMap> = {
	xs: {
		size: Tokens.fontSizeXxs,
		baseLineHeight: 'md',
		baseFontWeight: 'bold',
		baseFontFamily: 'heading',
	},
	sm: {
		size: Tokens.fontSizeXs,
		baseLineHeight: 'md',
		baseFontWeight: 'bold',
		baseFontFamily: 'heading',
	},
	md: {
		size: Tokens.fontSizeMd,
		baseLineHeight: 'md',
		baseFontWeight: 'bold',
		baseFontFamily: 'heading',
	},
	lg: {
		size: Tokens.fontSizeLg,
		baseLineHeight: 'md',
		baseFontWeight: 'bold',
		baseFontFamily: 'heading',
	},
	xl: {
		size: 30,
		baseLineHeight: 'md',
		baseFontWeight: 'bold',
		baseFontFamily: 'heading',
	},
	'2xl': {
		size: 36,
		baseLineHeight: 'md',
		baseFontWeight: 'bold',
		baseFontFamily: 'heading',
	},
	'3xl': {
		size: Tokens.fontSizeXxxl,
		baseLineHeight: 'md',
		baseFontWeight: 'bold',
		baseFontFamily: 'heading',
	},
	'4xl': {
		size: Tokens.fontSizeGiant,
		baseLineHeight: 'md',
		baseFontWeight: 'bold',
		baseFontFamily: 'heading',
	},
};
