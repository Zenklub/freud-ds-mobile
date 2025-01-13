import { DeepPartial } from '@helpers/deep-partial.interface';
import { BaseInputComponentTheme } from '@theme/tokens/components/input-base-theme';
import { TextInputComponentTheme } from '@theme/tokens/tokens';

export const baseInputTheme: BaseInputComponentTheme = {
	base: {
		opacity: 'opacity.full',
		icon: {
			color: 'color.neutral.dark.200',
			size: 'icon.sizes.md',
			opacity: 'opacity.full',
		},
		label: {
			color: 'color.neutral.dark.400',
			textSize: 'text.md',
			fontWeight: 'typography.fontWeights.medium',
			margin: {
				bottom: 'spacing.quark',
			},
			padding: 0,
			opacity: 'opacity.full',
		},
		helperText: {
			color: 'color.neutral.dark.400',
			textSize: 'text.md',
			fontWeight: 'typography.fontWeights.regular',
			margin: {
				top: 'spacing.quark',
			},
			padding: 0,
			opacity: 'opacity.full',
		},
		errorText: {
			color: 'color.neutral.dark.400',
			textSize: 'text.md',
			fontWeight: 'typography.fontWeights.regular',
			margin: {
				top: 'spacing.quark',
			},
			padding: 0,
			opacity: 'opacity.full',
		},
		iconContainer: {
			padding: {
				horizontal: 10,
				vertical: 6,
			},
		},
		input: {
			backgroundColor: 'transparent',
			padding: {
				horizontal: 12,
				vertical: 8,
			},
		},
		inputContainer: {
			border: {
				color: 'color.neutral.light.300',
				width: 'border.md',
				radius: 'radii.md',
			},
			backgroundColor: 'color.neutral.white',
		},
	},
	normal: {},
	focused: {
		inputContainer: {
			border: {
				color: 'color.brand.pure',
			},
		},
	},
	entered: {},
	disabled: {
		opacity: 'opacity.400',
	},
	error: {
		inputContainer: {
			border: {
				color: 'color.feedback.negative.pure',
			},
		},
	},
};

export const baseInputDarkTheme: DeepPartial<TextInputComponentTheme> = {
	base: {
		label: {
			color: 'color.neutral.white',
		},
		helperText: {
			color: 'color.neutral.white',
		},
		errorText: {
			color: 'color.neutral.white',
		},
	},
};
