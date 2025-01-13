import { DeepPartial } from '@helpers/deep-partial.interface';
import { AlertComponentTheme } from '@theme/tokens/components/alert';

export const baseAlertTheme: AlertComponentTheme = {
	base: {
		base: {
			border: {
				color: 'transparent',
				radius: 'radii.sm',
				width: 0,
			},
			opacity: 'opacity.full',
			padding: {
				horizontal: 12,
				vertical: 12,
			},
			backgroundColor: 'color.feedback.neutral.100',
			icon: {
				color: 'color.feedback.neutral.pure',
				size: 'icon.sizes.md',
				margin: {
					top: 'spacing.quark',
					right: 11,
				},
				padding: 0,
				opacity: 0,
			},
			title: {
				textSize: 'text.md',
				color: 'color.neutral.dark.400',
				fontWeight: 'typography.fontWeights.semibold',
			},
			body: {
				textSize: 'text.sm',
				color: 'color.neutral.dark.400',
				fontWeight: 'typography.fontWeights.regular',
				margin: {
					top: 'spacing.nano',
				},
			},
			close: {
				name: 'icon.names.close',
				color: 'color.neutral.dark.400',
				size: 20,
				margin: {
					left: 'spacing.nano',
				},
			},
		},
		info: {
			backgroundColor: 'color.feedback.neutral.100',
			icon: {
				name: 'icon.names.info-circle',
				color: 'color.feedback.neutral.pure',
			},
		},
		success: {
			backgroundColor: 'color.feedback.positive.100',
			icon: {
				name: 'icon.names.check-circle',
				color: 'color.feedback.positive.pure',
			},
		},
		warning: {
			backgroundColor: 'color.feedback.warning.100',
			icon: {
				name: 'icon.names.exclamation-circle',
				color: 'color.feedback.warning.pure',
			},
		},
		danger: {
			backgroundColor: 'color.feedback.negative.100',
			icon: {
				name: 'icon.names.exclamation-triangle',
				color: 'color.feedback.negative.pure',
			},
		},
	},
	full: {},
	titleOnly: {
		base: {
			padding: {
				horizontal: 13.5,
				bottom: 13.5,
				top: 15.5,
			},
			icon: {
				margin: {
					top: -2,
					right: 11,
				},
			},
			title: {
				textSize: 'text.sm',
				color: 'color.neutral.dark.400',
				fontWeight: 'typography.fontWeights.semibold',
			},
			close: {
				name: 'icon.names.close',
				size: 20,
				margin: {
					left: 'spacing.nano',
				},
			},
		},
	},
};

export const baseAlertDarkTheme: DeepPartial<AlertComponentTheme> = {};
