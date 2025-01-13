import { DeepPartial } from '@helpers/deep-partial.interface';
import { IconButtonComponentTheme } from '@theme/tokens/tokens';

export const baseIconButtonTheme: IconButtonComponentTheme = {
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
				},
				spinner: {
					size: 'small',
					color: 'color.neutral.light.100',
				},
			},
			normal: {},
			active: {
				backgroundColor: 'color.brand.100',
				color: 'color.brand.pure',
				border: { color: 'color.brand.100' },
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
		xs: {
			height: 'spacing.xxs',
			width: 'spacing.xxs',
			border: { radius: 'radii.sm' },
			icon: {
				size: 'icon.sizes.sm',
			},
			spinner: {
				size: 'small',
			},
		},
		sm: {
			height: 'spacing.xs',
			width: 'spacing.xs',
			border: { radius: 'radii.sm' },
			icon: {
				size: 'icon.sizes.md',
			},
			spinner: {
				size: 'small',
			},
		},
		md: {
			height: 'spacing.sm',
			width: 'spacing.sm',
			border: { radius: 'radii.sm' },
			icon: {
				size: 'icon.sizes.md',
			},
			spinner: {
				size: 'small',
			},
		},
		lg: {
			height: 'spacing.md',
			width: 'spacing.md',
			border: { radius: 'radii.sm' },
			icon: {
				size: 'icon.sizes.md',
			},
			spinner: {
				size: 'small',
			},
		},
	},
};

export const baseIconButtonDarkTheme: DeepPartial<IconButtonComponentTheme> = {
	variants: {
		base: {
			base: {
				backgroundColor: 'color.neutral.white',
				border: {
					color: 'color.neutral.white',
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
