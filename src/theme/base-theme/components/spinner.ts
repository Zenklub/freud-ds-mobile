import { DeepPartial } from '@helpers/deep-partial.interface';
import { SpinnerComponentTheme } from '@theme/tokens/tokens';

export const baseSpinnerTheme: SpinnerComponentTheme = {
	color: 'color.brand.pure',
};

export const baseSpinnerDarkTheme: DeepPartial<SpinnerComponentTheme> = {
	color: 'color.neutral.light.400',
};
