import { Leaves } from '@theme/base/types';

export type ColorsPathOrHardCoded =
	| ColorsPath
	| `#${string}`
	| `rgba(${string})`
	| `rgb(${string})`;

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

export interface ColorTheme {
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

export type ColorsPath = Leaves<ColorTheme>;
