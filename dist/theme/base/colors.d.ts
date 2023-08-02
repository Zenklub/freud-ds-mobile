import type { Leaves } from './types';
export interface IColorHues {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
}
declare const colors: {
    brand: {
        pure: any;
        100: any;
        200: any;
        300: any;
        400: any;
        500: any;
        600: any;
    };
    complementary: {
        funny: {
            pure: any;
            100: any;
            200: any;
            300: any;
            400: any;
            500: any;
            600: any;
        };
        colorLike: {
            pure: any;
            100: any;
            200: any;
            300: any;
            400: any;
            500: any;
            600: any;
        };
    };
    feedback: {
        neutral: {
            pure: any;
            100: any;
            200: any;
            300: any;
            400: any;
            500: any;
            600: any;
        };
        positive: {
            pure: any;
            100: any;
            200: any;
            300: any;
            400: any;
            500: any;
            600: any;
        };
        warning: {
            pure: any;
            100: any;
            200: any;
            300: any;
            400: any;
            500: any;
            600: any;
        };
        alert: {
            pure: any;
            100: any;
            200: any;
            300: any;
            400: any;
            500: any;
            600: any;
        };
        negative: {
            pure: any;
            100: any;
            200: any;
            300: any;
            400: any;
            500: any;
            600: any;
        };
    };
    neutral: {
        white: any;
        black: any;
        dark: {
            100: any;
            200: any;
            300: any;
            400: any;
        };
        light: {
            100: any;
            200: any;
            300: any;
            400: any;
        };
    };
};
export default colors;
export type IColorsObject = typeof colors;
export type IColors = Leaves<typeof colors>;
