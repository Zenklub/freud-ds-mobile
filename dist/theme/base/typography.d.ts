declare const typography: {
    letterSpacings: {
        xs: string;
        sm: string;
        md: number;
        lg: string;
        xl: string;
        '2xl': string;
    };
    lineHeights: {
        auto: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    fontConfig: {
        SourceSansPro: {
            [x: number]: {
                normal: string;
            };
        };
    };
    fonts: {
        heading: string;
        body: string;
        mono: string;
        customFont: string;
    };
    fontWeights: {
        hairline: any;
        thin: any;
        light: any;
        normal: any;
        medium: any;
        semibold: any;
        bold: any;
        extrabold: any;
        extraBlack: any;
    };
    fontSizes: {
        '2xs': any;
        xs: any;
        sm: any;
        md: any;
        lg: any;
        xl: any;
        '2xl': any;
        '3xl': any;
        '4xl': any;
        '5xl': any;
        '6xl': any;
        '7xl': number;
        '8xl': number;
        '9xl': number;
    };
};
export type ITypography = typeof typography;
export type IFontSize = keyof typeof typography.fontSizes;
export type ILetterSpacing = keyof typeof typography.letterSpacings;
export type ILineHeight = keyof typeof typography.lineHeights;
export type IFontWeight = keyof typeof typography.fontWeights;
export type IFont = typeof typography.fonts;
export default typography;
