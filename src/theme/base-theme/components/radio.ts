import { DeepPartial } from '@helpers/deep-partial.interface';
import { RadioComponentTheme } from '@theme/tokens/tokens';

export const baseRadioTheme: RadioComponentTheme = {
	base: {
		outer: {
			border: {
				color: 'color.neutral.hidden',
				width: 'border.md',
				radius: 'radii.circular',
			},
		},
		box: {
			backgroundColor: 'color.neutral.white',
			border: {
				color: 'color.neutral.light.400',
				width: 'border.md',
				radius: 'radii.circular',
			},
			height: 20,
			width: 20,
		},
		label: {
			textSize: 'text.md',
			color: 'color.neutral.dark.400',
			margin: {
				left: 6,
			},
		},
		indicator: {
			width: 10,
			height: 10,
			border: {
				radius: 'radii.circular',
			},
			backgroundColor: 'transparent',
		},
	},
	normal: {},
	selected: {
		box: {
			backgroundColor: 'color.brand.pure',
			border: {
				color: 'color.brand.pure',
			},
		},
		indicator: {
			backgroundColor: 'color.neutral.white',
		},
	},
	disabled: {
		opacity: 'opacity.500',
	},
	focused: {
		outer: {
			border: {
				color: 'color.brand.pure',
			},
		},
	},
	disabledSelected: {
		opacity: 'opacity.500',

		box: {
			backgroundColor: 'color.brand.pure',
			border: {
				color: 'color.brand.pure',
			},
		},
		indicator: {
			backgroundColor: 'color.neutral.white',
		},
	},
	focusedSelected: {
		outer: {
			border: {
				color: 'color.brand.pure',
			},
		},
		box: {
			backgroundColor: 'color.brand.pure',
			border: {
				color: 'color.brand.pure',
			},
		},
		indicator: {
			backgroundColor: 'color.neutral.white',
		},
	},
};

export const baseRadioDarkTheme: DeepPartial<RadioComponentTheme> = {
	base: {
		label: {
			color: 'color.neutral.white',
		},
	},
};
