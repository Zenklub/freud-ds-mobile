// @ts-ignore
import * as Tokens from '@freud-ds/tokens/style/react-native/variables';
import { TypographyTheme } from '@theme/types/typography';

export const baseThemeTypography: TypographyTheme = {
	fonts: {
		heading: {
			thin: 'SourceSansPro-Regular',
			light: 'SourceSansPro-Regular',
			regular: 'SourceSansPro-Regular',
			medium: 'SourceSansPro-Regular',
			semibold: 'SourceSansPro-SemiBold',
			bold: 'SourceSansPro-Bold',
			extrabold: 'SourceSansPro-Bold',
			black: 'SourceSansPro-Bold',
		},
		body: {
			thin: 'SourceSansPro-Regular',
			light: 'SourceSansPro-Regular',
			regular: 'SourceSansPro-Regular',
			medium: 'SourceSansPro-Regular',
			semibold: 'SourceSansPro-SemiBold',
			bold: 'SourceSansPro-Bold',
			extrabold: 'SourceSansPro-Bold',
			black: 'SourceSansPro-Bold',
		},
	},
	text: {
		'2xs': {
			fontSize: Tokens.fontSizeNano,
			lineHeight: Tokens.lineHeightXs,
			fontWeight: 'regular',
			fontFamily: 'body',
		},
		xs: {
			fontSize: Tokens.fontSizeXxxs,
			lineHeight: Tokens.lineHeightXs,
			fontWeight: 'regular',
			fontFamily: 'body',
		},
		sm: {
			fontSize: Tokens.fontSizeXxs,
			lineHeight: Tokens.lineHeightXs,
			fontWeight: 'regular',
			fontFamily: 'body',
		},
		md: {
			fontSize: Tokens.fontSizeXs,
			lineHeight: Tokens.lineHeightMd,
			fontWeight: 'regular',
			fontFamily: 'body',
		},
		lg: {
			fontSize: Tokens.fontSizeSm,
			lineHeight: Tokens.lineHeightMd,
			fontWeight: 'regular',
			fontFamily: 'body',
		},
		xl: {
			fontSize: Tokens.fontSizeMd,
			lineHeight: Tokens.lineHeightMd,
			fontWeight: 'regular',
			fontFamily: 'body',
		},
		'2xl': {
			fontSize: Tokens.fontSizeLg,
			lineHeight: Tokens.lineHeightMd,
			fontWeight: 'regular',
			fontFamily: 'body',
		},
		'3xl': {
			fontSize: Tokens.fontSizeXl,
			lineHeight: Tokens.lineHeightMd,
			fontWeight: 'regular',
			fontFamily: 'body',
		},
		'4xl': {
			fontSize: Tokens.fontSizeXxl,
			lineHeight: Tokens.lineHeightMd,
			fontWeight: 'regular',
			fontFamily: 'body',
		},
		'5xl': {
			fontSize: Tokens.fontSizeXxxl,
			lineHeight: Tokens.lineHeightMd,
			fontWeight: 'regular',
			fontFamily: 'body',
		},
		'6xl': {
			fontSize: Tokens.fontSizeGiant,
			lineHeight: Tokens.lineHeightMd,
			fontWeight: 'regular',
			fontFamily: 'body',
		},
	},
	heading: {
		xs: {
			fontSize: Tokens.fontSizeXxs,
			lineHeight: Tokens.lineHeightMd,
			fontWeight: 'bold',
			fontFamily: 'heading',
		},
		sm: {
			fontSize: Tokens.fontSizeXs,
			lineHeight: Tokens.lineHeightMd,
			fontWeight: 'bold',
			fontFamily: 'heading',
		},
		md: {
			fontSize: Tokens.fontSizeMd,
			lineHeight: Tokens.lineHeightMd,
			fontWeight: 'bold',
			fontFamily: 'heading',
		},
		lg: {
			fontSize: Tokens.fontSizeLg,
			lineHeight: Tokens.lineHeightMd,
			fontWeight: 'bold',
			fontFamily: 'heading',
		},
		xl: {
			fontSize: 30,
			lineHeight: Tokens.lineHeightMd,
			fontWeight: 'bold',
			fontFamily: 'heading',
		},
		'2xl': {
			fontSize: 36,
			lineHeight: Tokens.lineHeightMd,
			fontWeight: 'bold',
			fontFamily: 'heading',
		},
		'3xl': {
			fontSize: Tokens.fontSizeXxxl,
			lineHeight: Tokens.lineHeightMd,
			fontWeight: 'bold',
			fontFamily: 'heading',
		},
		'4xl': {
			fontSize: Tokens.fontSizeGiant,
			lineHeight: Tokens.lineHeightMd,
			fontWeight: 'bold',
			fontFamily: 'heading',
		},
	},
	fontWeights: {
		thin: `${Tokens.fontWeightLight}`,
		light: `${Tokens.fontWeightLight}`,
		regular: `${Tokens.fontWeightRegular}`,
		medium: `${Tokens.fontWeightSemibold}`,
		semibold: `${Tokens.fontWeightSemibold}`,
		bold: `${Tokens.fontWeightBold}`,
		extrabold: `${Tokens.fontWeightBlack}`,
		black: `${Tokens.fontWeightBlack}`,
	},
};
