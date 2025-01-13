import { DeepPartial } from '@helpers/deep-partial.interface';
import { ButtonComponentTheme } from '@theme/tokens/tokens';

export const baseButtonTheme: ButtonComponentTheme = {
	variants: {
		base: {
			base: {
				color: 'color.neutral.white',
				backgroundColor: 'color.brand.pure',
				border: {
					color: 'color.brand.pure',
					width: 1,
					radius: 'radii.md',
				},
				opacity: 'opacity.full',
				icon: {
					name: 'icon.names.accessible',
					size: 'icon.sizes.md',
					color: 'color.neutral.light.100',
					margin: {
						left: 'spacing.quark',
					},
				},
				text: {
					textSize: 'text.sm',
					fontWeight: 'typography.fontWeights.regular',
					color: 'color.neutral.light.100',
				},
				spinner: {
					margin: {
						left: 'spacing.nano',
					},
				},
			},
			normal: {},
			active: {
				backgroundColor: 'color.brand.100',
				color: 'color.brand.pure',
				border: { color: 'color.brand.100' },
				text: {
					color: 'color.brand.pure',
				},
				icon: {
					color: 'color.brand.pure',
				},
				spinner: {
					color: 'color.brand.pure',
				},
			},
			focus: {
				border: {
					width: 2,
					color: 'color.brand.400',
				},
			},
			loading: {
				opacity: 'opacity.700',
			},
			disabled: {
				opacity: 'opacity.500',
			},
		},
		solid: {
			base: {
				spinner: {
					color: 'color.neutral.light.100',
				},
			},
		},
		outline: {
			base: {
				color: 'color.brand.pure',
				backgroundColor: 'transparent',
				border: {
					color: 'color.brand.pure',
					width: 1,
					radius: 'radii.sm',
				},
				opacity: 'opacity.full',
				text: {
					color: 'color.brand.pure',
				},
				icon: {
					color: 'color.brand.pure',
				},
			},
			normal: {},
			active: {
				backgroundColor: 'color.brand.100',
				color: 'color.brand.pure',
				border: { color: 'color.brand.100' },
			},
			focus: {
				border: { width: 2 },
			},
			loading: { opacity: 'opacity.700' },
			disabled: { opacity: 'opacity.500' },
		},
		ghost: {
			base: {
				color: 'color.brand.pure',
				backgroundColor: 'transparent',
				border: {
					color: 'transparent',
					width: 1,
					radius: 'radii.sm',
				},
				opacity: 'opacity.full',
				text: {
					color: 'color.brand.pure',
				},
				icon: {
					color: 'color.brand.pure',
				},
			},
			normal: {},
			active: {
				backgroundColor: 'color.brand.100',
				color: 'color.brand.pure',
				border: { color: 'color.brand.100' },
			},
			focus: {
				border: { width: 2 },
			},
			loading: { opacity: 'opacity.700' },
			disabled: { opacity: 'opacity.500' },
		},
	},
	sizes: {
		sm: {
			height: 32,
			padding: {
				horizontal: 12,
				vertical: 8.5,
				top: 11.5,
			},
			icon: {
				size: 'icon.sizes.sm',
				margin: {
					top: -4,
				},
			},
			spinner: {
				size: 'small',
			},
			text: {
				textSize: 'text.2xs',
			},
		},
		md: {
			height: 40,
			padding: {
				horizontal: 12,
				vertical: 11,
				top: 12,
			},
			icon: {
				size: 'icon.sizes.sm',
				margin: {
					top: -2,
				},
			},
			spinner: {
				size: 'small',
			},
			text: {
				textSize: 'text.xs',
			},
		},
		lg: {
			height: 48,
			padding: {
				horizontal: 12,
				vertical: 12,
			},
			icon: {
				size: 'icon.sizes.md',
			},
			spinner: {
				size: 'small',
			},
			text: {
				textSize: 'text.md',
			},
		},
	},
};

export const baseButtonDarkTheme: DeepPartial<ButtonComponentTheme> = {
	variants: {
		base: {
			base: {
				backgroundColor: 'color.neutral.white',
				border: {
					color: 'color.neutral.white',
				},
				text: {
					color: 'color.brand.pure',
				},
				icon: {
					color: 'color.brand.pure',
				},
				spinner: {
					color: 'color.brand.pure',
				},
			},
			normal: {},
			active: {
				backgroundColor: 'color.brand.300',
				border: { color: 'color.brand.300' },
				text: {
					color: 'color.neutral.white',
				},
				icon: {
					color: 'color.neutral.white',
				},
				spinner: {
					color: 'color.brand.pure',
				},
			},
			focus: {
				border: {
					width: 2,
					color: 'color.brand.200',
				},
			},
		},
		solid: {
			base: {
				spinner: {
					color: 'color.brand.pure',
				},
			},
		},
		outline: {
			base: {
				border: {
					color: 'color.neutral.white',
				},
				text: {
					color: 'color.neutral.white',
				},
				icon: {
					color: 'color.neutral.white',
				},
				spinner: {
					color: 'color.neutral.white',
				},
			},
			normal: {},
			active: {
				backgroundColor: 'color.brand.300',
				border: { color: 'color.brand.300' },
				text: {
					color: 'color.neutral.white',
				},
				icon: {
					color: 'color.neutral.white',
				},
				spinner: {
					color: 'color.neutral.white',
				},
			},
			focus: {
				border: { width: 2 },
			},
			loading: { opacity: 'opacity.700' },
			disabled: { opacity: 'opacity.500' },
		},
		ghost: {
			base: {
				backgroundColor: 'transparent',
				border: {
					color: 'transparent',
				},
				text: {
					color: 'color.neutral.white',
				},
				icon: {
					color: 'color.neutral.white',
				},
				spinner: {
					color: 'color.neutral.white',
				},
			},
			normal: {},
			active: {
				backgroundColor: 'color.brand.300',
				border: { color: 'color.brand.300' },
				text: {
					color: 'color.neutral.white',
				},
				icon: {
					color: 'color.neutral.white',
				},
				spinner: {
					color: 'color.neutral.white',
				},
			},
			focus: {
				border: { width: 2 },
			},
			loading: { opacity: 'opacity.700' },
			disabled: { opacity: 'opacity.500' },
		},
	},
};
