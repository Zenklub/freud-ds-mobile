import { ColorsPathOrHardCoded } from '../colors';
import { OpacityLevel } from '../opacity';
import { RadiiSize } from '../radius';
import { IFontWeight, TextFontSizes } from '../typography';

export type ButtonVariants = 'solid' | 'outline' | 'ghost';
export type ButtonSizes = 'sm' | 'md' | 'lg';

export interface ButtonThemeVariantStyle {
	color: ColorsPathOrHardCoded;
	backgroundColor: ColorsPathOrHardCoded;
	borderColor: ColorsPathOrHardCoded;
	borderWidth: number;
	opacity?: OpacityLevel | number;
	borderRadius?: RadiiSize | number;
	icon?: {
		color: ColorsPathOrHardCoded;
	};
	spinner?: {
		color: ColorsPathOrHardCoded;
	};
}

export interface ButtonThemeVariant {
	default: ButtonThemeVariantStyle;
	loading: Partial<ButtonThemeVariantStyle>;
	focus: Partial<ButtonThemeVariantStyle>;
	active: Partial<ButtonThemeVariantStyle>;
	disabled: Partial<ButtonThemeVariantStyle>;
}

export interface ButtonThemeSizes {
	height: number;
	padding?: number;
	paddingTop?: number;
	paddingRight?: number;
	paddingBottom?: number;
	paddingLeft?: number;
	paddingVertical?: number;
	paddingHorizontal?: number;
	text: {
		size: TextFontSizes;
		weight?: IFontWeight;
	};
	icon: {
		size: number;
	};
	spinner: {
		size: 'small' | 'large';
	};
}

export interface ButtonTheme {
	variants: Record<ButtonVariants, ButtonThemeVariant>;
	inverted: Record<ButtonVariants, ButtonThemeVariant>;
	sizes: Record<ButtonSizes, ButtonThemeSizes>;
}
