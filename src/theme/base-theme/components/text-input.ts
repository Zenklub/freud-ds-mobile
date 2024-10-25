import { TextInputTheme } from '@theme/tokens';

export const baseTextInputTheme: TextInputTheme = {
	variants: {
		default: {
			borderColor: 'neutral.light.300',
			borderWidth: 'md',
			borderRadius: 'md',
			backgroundColor: 'neutral.white',
			color: 'neutral.dark.400',
			placeholderColor: 'neutral.dark.200',
			paddingHorizontal: 'xxxs',
			paddingVertical: 'nano',
			opacity: 'full',
			icon: {
				color: 'neutral.dark.200',
				size: 'md',
				padding: 'nano',
				spacing: 'nano',
				opacity: 'full',
			},
			label: {
				color: 'neutral.dark.400',
				size: 'md',
				fontWeight: 'medium',
				spacing: 'quark',
				padding: 0,
				opacity: 'full',
			},
			helperText: {
				color: 'neutral.dark.400',
				size: 'md',
				fontWeight: 'regular',
				spacing: 'quark',
				padding: 0,
				opacity: 'full',
			},
			errorText: {
				color: 'neutral.dark.400',
				size: 'md',
				fontWeight: 'regular',
				spacing: 'quark',
				padding: 0,
				opacity: 'full',
			},
		},
		focused: {
			borderColor: 'brand.pure',
		},
		entered: {},
		disabled: {
			opacity: '400',
		},
		error: {
			borderColor: 'feedback.negative.pure',
		},
	},
	inverted: {
		default: {
			label: {
				color: 'neutral.white',
			},
			helperText: {
				color: 'neutral.white',
			},
			errorText: {
				color: 'neutral.white',
			},
		},
	},
};
