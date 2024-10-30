import { DeepPartial } from '@helpers/deep-partial.interface';
import {
	ContainerThemeAggregate,
	IconThemeAggregator,
} from '@theme/theming.interface';
import { ColorsLeaves } from '@theme/types';
import { HardCodedColor, SpinnerComponentTheme, SpinnerSize } from '../tokens';

export type IconButtonVariants = 'solid' | 'outline' | 'ghost';
export type IconButtonSizes = 'xs' | 'sm' | 'md' | 'lg';

export interface IconButtonThemeVariantStyle extends ContainerThemeAggregate {
	color: ColorsLeaves | HardCodedColor;
	icon: IconThemeAggregator;
	spinner?: ContainerThemeAggregate & {
		size?: SpinnerSize;
		color?: SpinnerComponentTheme['color'];
	};
}

export interface IconButtonThemeVariant {
	base: IconButtonThemeVariantStyle;
	normal: DeepPartial<IconButtonThemeVariantStyle>;
	loading: DeepPartial<IconButtonThemeVariantStyle>;
	focus: DeepPartial<IconButtonThemeVariantStyle>;
	active: DeepPartial<IconButtonThemeVariantStyle>;
	disabled: DeepPartial<IconButtonThemeVariantStyle>;
}

export interface IconButtonComponentTheme {
	variants: {
		base: IconButtonThemeVariant;
		solid: DeepPartial<IconButtonThemeVariant>;
		outline: DeepPartial<IconButtonThemeVariant>;
		ghost: DeepPartial<IconButtonThemeVariant>;
	};
	sizes: DeepPartial<Record<IconButtonSizes, IconButtonThemeVariantStyle>>;
}
