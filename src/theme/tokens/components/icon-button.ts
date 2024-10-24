import { ColorsPathOrHardCoded } from '../colors';
import { OpacityLevel } from '../opacity';
import { RadiiSize } from '../radius';

export type IconButtonVariants = 'solid' | 'outline' | 'ghost';
export type IconButtonSizes = 'xs' | 'sm' | 'md' | 'lg';

export interface IconButtonThemeVariantStyle {
	color: ColorsPathOrHardCoded;
	backgroundColor: ColorsPathOrHardCoded;
	borderColor: ColorsPathOrHardCoded;
	borderWidth: number;
	opacity?: OpacityLevel | number;
	borderRadius?: RadiiSize | number;
	spinner?: {
		color: ColorsPathOrHardCoded;
	};
}

export interface IconButtonThemeVariant {
	default: IconButtonThemeVariantStyle;
	loading: Partial<IconButtonThemeVariantStyle>;
	focus: Partial<IconButtonThemeVariantStyle>;
	active: Partial<IconButtonThemeVariantStyle>;
	disabled: Partial<IconButtonThemeVariantStyle>;
}

export interface IconButtonThemeSizes {
	height: number;
	width?: number;
	padding?: number;
	paddingTop?: number;
	paddingRight?: number;
	paddingBottom?: number;
	paddingLeft?: number;
	paddingVertical?: number;
	paddingHorizontal?: number;
	icon: {
		size: number;
	};
	spinner: {
		size: 'small' | 'large';
	};
}

export interface IconButtonTheme {
	variants: Record<IconButtonVariants, IconButtonThemeVariant>;
	inverted: Record<IconButtonVariants, IconButtonThemeVariant>;
	sizes: Record<IconButtonSizes, IconButtonThemeSizes>;
}
