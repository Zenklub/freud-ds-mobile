import { Leaves } from '@helpers/types';
import Animated from 'react-native-reanimated';
import { IconName } from './icons';

export type AnimationEasingFunction = Animated.EasingFunction;

// Border
export type BordersSizes = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

// Opacity
export type OpacityLevel =
	| 'none'
	| '100'
	| '200'
	| '300'
	| '400'
	| '500'
	| '600'
	| '700'
	| '800'
	| 'full';

// Border Radius
export type RadiiSize =
	| 'none'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| 'pill'
	| 'circular';

// Shadows
export type ShadowSizes =
	| 'none'
	| 'focused'
	| 100
	| 200
	| 300
	| 400
	| 500
	| 600
	| 700
	| 800;

export interface ShadowValue {
	shadowColor: string;
	shadowOffset: {
		width: number;
		height: number;
	};
	shadowOpacity: number;
	shadowRadius: number;
	elevation: number;
}

// Sizes
export type Sizes = '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type SpacingSizes =
	| 'minimum'
	| 'quark'
	| 'nano'
	| 'xxxs'
	| 'xxs'
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| 'xxl'
	| 'xxxl'
	| 'big'
	| 'huge'
	| 'giant'
	| '1/10'
	| '1/5'
	| '1/4'
	| '1/3'
	| '2/5'
	| '2/4'
	| '3/5'
	| '3/4'
	| '4/5'
	| 'full';

// Typography
export type FontFamily = 'heading' | 'body';

export type FontWeight =
	| 'thin'
	| 'light'
	| 'regular'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'extrabold'
	| 'black';

export type FontWeightValue =
	| 'normal'
	| 'bold'
	| '100'
	| '200'
	| '300'
	| '400'
	| '500'
	| '600'
	| '700'
	| '800'
	| '900';

export type FontSize =
	| '4xs'
	| '3xs'
	| '2xs'
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl';

export type LineHeight = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type FontNameWeightMap = Record<FontWeight, string>;

// Colors
export interface IColorHues {
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
}

export interface INeutralColorHues {
	100: string;
	200: string;
	300: string;
	400: string;
}

export interface ColorsTokens {
	brand: IColorHues & { pure: string };
	complementary: {
		funny: IColorHues & { pure: string };
		colorLike: IColorHues & { pure: string };
	};
	feedback: {
		neutral: IColorHues & { pure: string };
		positive: IColorHues & { pure: string };
		warning: IColorHues & { pure: string };
		alert: IColorHues & { pure: string };
		negative: IColorHues & { pure: string };
	};
	neutral: {
		hidden: string;
		white: string;
		black: string;
		dark: INeutralColorHues;
		light: INeutralColorHues;
	};
}

export type ColorTokensPath = Leaves<ColorsTokens>;

// Icons
export { IconName };
export type IconSize = 'xs' | 'sm' | 'md' | 'lg';

// Animations
export type AnimationDurations = 'fast' | 'medium' | 'slow';
export type AnimationEasing =
	| 'standard'
	| 'decelerated'
	| 'accelerated'
	| 'sharp';

// Tokens
export type BordersTokens = Record<BordersSizes, number>;
export type OpacityTokens = Record<OpacityLevel, number>;
export type RadiiTokens = Record<RadiiSize, number>;
export type ShadowTokens = Record<ShadowSizes, ShadowValue>;
export type SizesTokens = Record<Sizes, number>;
export type SpacingTokens = Record<SpacingSizes, number | string>;

export interface TypographyTokens {
	families: Record<FontFamily, FontNameWeightMap>;
	fontSizes: Record<FontSize, number>;
	fontWeights: Record<FontWeight, FontWeightValue>;
	lineHeights: Record<LineHeight, number>;
}

export type ColorsPathOrHardCoded =
	| ColorTokensPath
	| `#${string}`
	| `rgba(${string})`
	| `rgb(${string})`
	| 'transparent';

export type HardCodedColor =
	| `#${string}`
	| `rgba(${string})`
	| `rgb(${string})`
	| 'transparent';

export interface AnimationTokens {
	durations: Record<AnimationDurations, number>;
	easing: Record<AnimationEasing, AnimationEasingFunction>;
}

// Component themes
export * from './components';
