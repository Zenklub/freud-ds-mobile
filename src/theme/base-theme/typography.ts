// @ts-ignore
import * as Tokens from '@freud-ds/tokens/style/react-native/variables';
import { TypographyTokens } from '@theme/tokens/tokens';
export const lineHeightAuto = 'auto';
export const lineHeightXs = 1;
export const lineHeightSm = 1.2;
export const lineHeightMd = 1.5;
export const lineHeightLg = 2;

export const baseThemeTypography: TypographyTokens = {
	families: {
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
	fontSizes: {
		'4xs': Tokens.fontSizeNano, // 10
		'3xs': Tokens.fontSizeXxxs, // 12
		'2xs': Tokens.fontSizeXxs, // 14
		xs: Tokens.fontSizeXs, // 16
		sm: Tokens.fontSizeSm, // 18
		md: Tokens.fontSizeMd, // 20
		lg: Tokens.fontSizeLg, // 24
		xl: Tokens.fontSizeXl, // 32
		'2xl': Tokens.fontSizeXxl, // 40
		'3xl': Tokens.fontSizeXxxl, // 48
		'4xl': Tokens.fontSizeDisplay, // 56
		'5xl': Tokens.fontSizeGiant, // 60
	},
	fontWeights: {
		thin: `${Tokens.fontWeightLight}`, // 300
		light: `${Tokens.fontWeightLight}`, // 300
		regular: `${Tokens.fontWeightRegular}`, // 400
		medium: `${Tokens.fontWeightSemibold}`, // 600
		semibold: `${Tokens.fontWeightSemibold}`, // 600
		bold: `${Tokens.fontWeightBold}`, // 700
		extrabold: `${Tokens.fontWeightBlack}`, // 900
		black: `${Tokens.fontWeightBlack}`, // 900
	} as TypographyTokens['fontWeights'],
	lineHeights: {
		xs: Tokens.lineHeightXs, // 1
		sm: Tokens.lineHeightSm, // 1.2
		md: Tokens.lineHeightMd, // 1.5
		lg: Tokens.lineHeightLg, // 2
		xl: Tokens.lineHeightLg, // 2
	},
};
