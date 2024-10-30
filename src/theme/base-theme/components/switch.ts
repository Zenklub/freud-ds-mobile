import { DeepPartial } from '@helpers/deep-partial.interface';
import { SwitchComponentTheme } from '@theme/tokens/tokens';

export const baseSwitchTheme: SwitchComponentTheme = {
	enabled: {
		backgroundColor: 'color.neutral.dark.100',
		color: 'color.neutral.white',
		opacity: 'opacity.full',
		active: {
			backgroundColor: 'color.brand.pure',
			color: 'color.neutral.white',
			opacity: 'opacity.full',
		},
	},
	disabled: {
		backgroundColor: 'color.neutral.dark.100',
		color: 'color.neutral.white',
		opacity: 'opacity.500',
		active: {
			backgroundColor: 'color.brand.pure',
			color: 'color.neutral.white',
			opacity: 'opacity.500',
		},
	},
};

export const baseSwitchDarkTheme: DeepPartial<SwitchComponentTheme> = {};
