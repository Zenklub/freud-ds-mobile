import { IconButtonTheme } from '@theme/tokens';

export const baseIconButtonTheme: IconButtonTheme = {
	variants: {
		solid: {
			default: {
				color: 'neutral.white',
				backgroundColor: 'brand.pure',
				borderColor: 'brand.pure',
				borderWidth: 1,
				borderRadius: 'sm',
				opacity: 'full',
			},
			active: {
				backgroundColor: 'brand.100',
				color: 'brand.pure',
				borderColor: 'brand.100',
			},
			focus: {
				borderWidth: 2,
			},
			loading: {
				opacity: '700',
			},
			disabled: {
				opacity: '500',
			},
		},
		outline: {
			default: {
				color: 'brand.pure',
				backgroundColor: 'transparent',
				borderColor: 'brand.pure',
				borderWidth: 1,
				borderRadius: 'sm',
				opacity: 'full',
			},
			active: {
				backgroundColor: 'brand.100',
				color: 'brand.pure',
				borderColor: 'brand.100',
			},
			focus: {
				borderWidth: 2,
			},
			loading: {
				opacity: '700',
			},
			disabled: {
				opacity: '500',
			},
		},
		ghost: {
			default: {
				color: 'brand.pure',
				backgroundColor: 'transparent',
				borderColor: 'transparent',
				borderWidth: 1,
				borderRadius: 'sm',
				opacity: 'full',
			},
			active: {
				backgroundColor: 'brand.100',
				color: 'brand.pure',
				borderColor: 'brand.100',
			},
			focus: {
				borderWidth: 2,
			},
			loading: {
				opacity: '700',
			},
			disabled: {
				opacity: '500',
			},
		},
	},
	inverted: {
		solid: {
			default: {
				color: 'brand.pure',
				backgroundColor: 'neutral.white',
				borderColor: 'brand.pure',
				borderWidth: 1,
				borderRadius: 'sm',
				opacity: 'full',
			},
			active: {
				backgroundColor: 'brand.100',
				color: 'brand.pure',
				borderColor: 'brand.100',
			},
			focus: {
				borderWidth: 2,
			},
			loading: {
				opacity: '700',
			},
			disabled: {
				opacity: '500',
			},
		},
		outline: {
			default: {
				color: 'neutral.white',
				backgroundColor: 'transparent',
				borderColor: 'neutral.white',
				borderWidth: 1,
				borderRadius: 'sm',
				opacity: 'full',
			},
			active: {
				backgroundColor: 'brand.100',
				color: 'brand.pure',
				borderColor: 'brand.100',
			},
			focus: {
				borderWidth: 2,
			},
			loading: {
				opacity: '700',
			},
			disabled: {
				opacity: '500',
			},
		},
		ghost: {
			default: {
				color: 'neutral.white',
				backgroundColor: 'transparent',
				borderColor: 'transparent',
				borderWidth: 1,
				borderRadius: 'sm',
				opacity: 'full',
			},
			active: {
				backgroundColor: 'brand.100',
				color: 'brand.pure',
				borderColor: 'brand.100',
			},
			focus: {
				borderWidth: 2,
			},
			loading: {
				opacity: '700',
			},
			disabled: {
				opacity: '500',
			},
		},
	},
	sizes: {
		xs: {
			height: 24,
			paddingHorizontal: 6,
			icon: {
				size: 12,
			},
			spinner: {
				size: 'small',
			},
		},
		sm: {
			height: 32,
			paddingHorizontal: 4,
			icon: {
				size: 24,
			},
			spinner: {
				size: 'small',
			},
		},
		md: {
			height: 40,
			paddingHorizontal: 8,
			icon: {
				size: 24,
			},
			spinner: {
				size: 'small',
			},
		},
		lg: {
			height: 48,
			paddingHorizontal: 12,
			icon: {
				size: 24,
			},
			spinner: {
				size: 'large',
			},
		},
	},
};
