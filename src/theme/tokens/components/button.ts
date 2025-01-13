import { DeepPartial } from '@helpers/deep-partial.interface';
import {
	ContainerThemeAggregate,
	IconThemeAggregator,
	TextThemeAggregator,
} from '@theme/theming.interface';
import { ColorsLeaves } from '@theme/types';
import { HardCodedColor, SpinnerComponentTheme, SpinnerSize } from '../tokens';

export type ButtonVariants = 'solid' | 'outline' | 'ghost';
export type ButtonSizes = 'sm' | 'md' | 'lg';

export interface ButtonThemeVariantStyle extends ContainerThemeAggregate {
	color: ColorsLeaves | HardCodedColor;
	icon: IconThemeAggregator;
	text: TextThemeAggregator;
	spinner?: ContainerThemeAggregate & {
		size?: SpinnerSize;
		color?: SpinnerComponentTheme['color'];
	};
}

export interface ButtonThemeVariant {
	base: ButtonThemeVariantStyle;
	normal: DeepPartial<ButtonThemeVariantStyle>;
	loading: DeepPartial<ButtonThemeVariantStyle>;
	focus: DeepPartial<ButtonThemeVariantStyle>;
	active: DeepPartial<ButtonThemeVariantStyle>;
	disabled: DeepPartial<ButtonThemeVariantStyle>;
}

export interface ButtonComponentTheme {
	variants: {
		base: ButtonThemeVariant;
		solid: DeepPartial<ButtonThemeVariant>;
		outline: DeepPartial<ButtonThemeVariant>;
		ghost: DeepPartial<ButtonThemeVariant>;
	};
	sizes: DeepPartial<Record<ButtonSizes, ButtonThemeVariantStyle>>;
}
