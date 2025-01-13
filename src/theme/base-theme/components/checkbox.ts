import { DeepPartial } from '@helpers/deep-partial.interface';
import { CheckBoxComponentTheme } from '@theme/tokens/tokens';

export const baseCheckBoxTheme: CheckBoxComponentTheme = {
	base: {
		border: {
			color: 'color.neutral.hidden',
			width: 'border.md',
			radius: 6,
		},
		box: {
			backgroundColor: 'color.neutral.white',
			border: {
				color: 'color.neutral.light.400',
				width: 'border.md',
				radius: 'radii.sm',
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
		check: {
			name: 'icon.names.check',
			color: 'transparent',
			size: 16,
			margin: {
				left: 0.5,
				top: 0.5,
			},
		},
	},
	normal: {},
	checked: {
		box: {
			backgroundColor: 'color.brand.pure',
			border: {
				color: 'color.brand.pure',
			},
		},
		check: {
			color: 'color.neutral.white',
		},
	},
	disabled: {
		opacity: 'opacity.500',
	},
	focused: {
		border: {
			color: 'color.brand.pure',
		},
	},
	disabledChecked: {
		opacity: 'opacity.500',

		box: {
			backgroundColor: 'color.brand.pure',
			border: {
				color: 'color.brand.pure',
			},
		},
		check: {
			color: 'color.neutral.white',
		},
	},
	focusedChecked: {
		border: {
			color: 'color.brand.pure',
		},
		box: {
			backgroundColor: 'color.brand.pure',
			border: {
				color: 'color.brand.pure',
			},
		},
		check: {
			color: 'color.neutral.white',
		},
	},
};

export const baseCheckBoxDarkTheme: DeepPartial<CheckBoxComponentTheme> = {
	base: {
		label: {
			color: 'color.neutral.white',
		},
	},
};
