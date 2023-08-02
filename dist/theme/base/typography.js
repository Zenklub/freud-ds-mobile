var _a;
// @ts-ignore
import * as Tokens from '@freud-ds/tokens/style/react-native/variables';
var typography = {
    letterSpacings: {
        xs: '-0.05em',
        sm: '-0.025em',
        md: 0,
        lg: '0.025em',
        xl: '0.05em',
        '2xl': '0.1em',
    },
    lineHeights: {
        auto: "".concat(Tokens.lineHeightAuto),
        xs: "".concat(Tokens.lineHeightXs, "em"),
        sm: "".concat(Tokens.lineHeightSm, "em"),
        md: "".concat(Tokens.lineHeightMd, "em"),
        lg: "".concat(Tokens.lineHeightLg, "em"),
    },
    fontConfig: {
        SourceSansPro: (_a = {},
            _a[Tokens.fontWeightLight] = {
                normal: 'SourceSansPro-Regular',
            },
            _a[Tokens.fontWeightRegular] = {
                normal: 'SourceSansPro-Regular',
            },
            _a[Tokens.fontWeightSemibold] = {
                normal: 'SourceSansPro-SemiBold',
            },
            _a[Tokens.fontWeightBold] = {
                normal: 'SourceSansPro-Bold',
            },
            _a[Tokens.fontWeightBlack] = {
                normal: 'SourceSansPro-Bold',
            },
            _a),
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
// export interface IFont {
// 	heading?: string;
// 	body?: string;
// 	mono?: string;
// }
export default typography;
