// @ts-ignore
import * as Tokens from '@freud-ds/tokens/style/react-native/variables';

const typography = {
	letterSpacings: {
		xs: '-0.05em',
		sm: '-0.025em',
		md: 0,
		lg: '0.025em',
		xl: '0.05em',
		'2xl': '0.1em',
	},
	lineHeights: {
		auto: `${Tokens.lineHeightAuto}`,
		xs: `${Tokens.lineHeightXs}em`,
		sm: `${Tokens.lineHeightSm}em`,
		md: `${Tokens.lineHeightMd}em`,
		lg: `${Tokens.lineHeightLg}em`,
	},
	fontConfig: {
		SourceSansPro: {
			[Tokens.fontWeightLight]: {
				normal: 'SourceSansPro-Regular',
			},
			[Tokens.fontWeightRegular]: {
				normal: 'SourceSansPro-Regular',
			},
			[Tokens.fontWeightSemibold]: {
				normal: 'SourceSansPro-SemiBold',
			},
			[Tokens.fontWeightBold]: {
				normal: 'SourceSansPro-Bold',
			},
			[Tokens.fontWeightBlack]: {
				normal: 'SourceSansPro-Bold',
			},
		},
	},
	fonts: {
		heading: 'SourceSansPro',
		body: 'SourceSansPro',
		mono: 'SourceSansPro',
		customFont: 'SourceSansPro',
	},
	fontWeights: {
		hairline: Tokens.fontWeightRegular,
		thin: Tokens.fontWeightRegular,
		light: Tokens.fontWeightRegular,
		normal: Tokens.fontWeightRegular,
		medium: Tokens.fontWeightSemibold,
		semibold: Tokens.fontWeightSemibold,
		bold: Tokens.fontWeightBold,
		extrabold: Tokens.fontWeightBold,
		extraBlack: Tokens.fontWeightBold,
	},
	fontSizes: {
		'2xs': Tokens.fontSizeNano,
		xs: Tokens.fontSizeXxxs,
		sm: Tokens.fontSizeXxs,
		md: Tokens.fontSizeXs,
		lg: Tokens.fontSizeSm,
		xl: Tokens.fontSizeMd,
		'2xl': Tokens.fontSizeLg,
		'3xl': Tokens.fontSizeXl,
		'4xl': Tokens.fontSizeXxl,
		'5xl': Tokens.fontSizeXxxl,
		'6xl': Tokens.fontSizeGiant,
		'7xl': 72,
		'8xl': 96,
		'9xl': 128,
	},
};

export type ITypography = typeof typography;
export type IFontSize = keyof typeof typography.fontSizes;
export type ILetterSpacing = keyof typeof typography.letterSpacings;
export type ILineHeight = keyof typeof typography.lineHeights;
export type IFontWeight = keyof typeof typography.fontWeights;
export type IFont = typeof typography.fonts;
// export interface IFont {
// 	heading?: string;
// 	body?: string;
// 	mono?: string;
// }

export default typography;
