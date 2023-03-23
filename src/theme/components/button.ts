// @ts-ignore
import * as Tokens from '@freud-ds/tokens/style/react-native/variables';
import { InterfaceButtonProps } from 'native-base/lib/typescript/components/primitives/Button/types';

const baseStyle = ({ colorScheme }: InterfaceButtonProps & { theme: any }) => {
	const inverted = colorScheme === 'neutral.white';
	const foregroundColor = inverted ? 'brand.pure' : 'neutral.white';
	const backgroundColor = inverted ? 'neutral.white' : 'brand.pure';

	return {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 12,
		rounded: 'md',
		borderWidth: 1,
		borderColor: backgroundColor,
		bg: backgroundColor,
		_text: {
			color: foregroundColor,
			fontWeight: '600',
		},
		_icon: {
			color: foregroundColor,
		},
		_dark: {
			bg: foregroundColor,
			_text: {
				color: backgroundColor,
			},
			_icon: {
				color: backgroundColor,
			},
			_loading: {
				color: backgroundColor,
			},
		},
		_stack: {
			space: '1.5',
			alignItems: 'center',
		},
		_loading: {
			opacity: Tokens.opacityLevel7,
		},
		_disabled: {
			opacity: Tokens.opacityLevel5,
		},
		_spinner: {
			size: 'sm',
			focusable: false,
		},
		_pressed: {
			bg: 'brand.01',
		},
	};
};

function variantGhost(props: InterfaceButtonProps) {
	return {
		...variantOutline(props),
		borderWidth: 1,
		borderColor: 'transparent',
	};
}

function variantOutline({ colorScheme }: InterfaceButtonProps) {
	const inverted = colorScheme === 'neutral.white';
	const backgroundColor = inverted ? 'transparent' : 'neutral.white';
	const foregroundColor = inverted ? 'neutral.white' : 'brand.pure';

	const pressedForegroundColor = inverted ? 'neutral.white' : 'brand.pure';
	const pressedBackgroundColor = inverted ? 'brand.03' : 'brand.01';

	return {
		bg: backgroundColor,
		borderWidth: 1,
		borderColor: foregroundColor,
		_text: {
			color: foregroundColor,
		},
		_icon: {
			color: foregroundColor,
		},
		_spinner: {
			color: foregroundColor,
		},

		_pressed: {
			bg: pressedBackgroundColor,
			borderColor: pressedBackgroundColor,
			_text: {
				color: pressedForegroundColor,
			},
			_icon: {
				color: pressedForegroundColor,
			},
		},
		_dark: {
			borderColor: foregroundColor,
			bg: foregroundColor,
			_text: {
				color: backgroundColor,
			},
			_icon: {
				color: backgroundColor,
			},
			_spinner: {
				color: backgroundColor,
			},

			_pressed: {
				bg: pressedForegroundColor,
				borderColor: pressedForegroundColor,
				_text: {
					color: pressedBackgroundColor,
				},
				_icon: {
					color: pressedBackgroundColor,
				},
			},
		},
	};
}

function variantSolid({ colorScheme }: InterfaceButtonProps) {
	const inverted = colorScheme === 'neutral.white';
	const foregroundColor = inverted ? 'brand.pure' : 'neutral.white';
	const backgroundColor = inverted ? 'neutral.white' : 'brand.pure';

	const pressedForegroundColor = inverted ? 'neutral.white' : 'brand.pure';
	const pressedBackgroundColor = inverted ? 'brand.03' : 'brand.01';

	return {
		bg: backgroundColor,
		rounded: 'md',
		borderWidth: 1,
		borderColor: backgroundColor,
		paddingVertical: 10,
		_text: {
			color: foregroundColor,
		},
		_icon: {
			color: foregroundColor,
		},
		_spinner: {
			color: foregroundColor,
		},
		_hover: {
			color: foregroundColor,
		},
		_pressed: {
			bg: pressedBackgroundColor,
			borderColor: pressedBackgroundColor,
			_text: {
				color: pressedForegroundColor,
			},
			_icon: {
				color: pressedForegroundColor,
			},
		},
		_dark: {
			bg: foregroundColor,
			_hover: {
				bg: foregroundColor,
			},
			_text: {
				color: backgroundColor,
			},
			_icon: {
				color: backgroundColor,
			},
			_spinner: {
				color: foregroundColor,
			},
			_pressed: {
				bg: pressedForegroundColor,
				borderColor: pressedForegroundColor,
				_text: {
					color: pressedBackgroundColor,
				},
				_icon: {
					color: pressedBackgroundColor,
				},
			},
		},
	};
}

const variants = {
	ghost: variantGhost as any,
	outline: variantOutline as any,
	solid: variantSolid as any,
	unstyled: {} as any,
};

const sizes = {
	lg: {
		px: '3',
		py: '1.5',
		height: Tokens.spacingSizeMd / 4,
		_text: {
			fontSize: 'md',
		},
		_icon: {
			size: 'md',
		},
	},
	md: {
		px: '3',
		py: '1',
		height: Tokens.spacingSizeSm / 4,
		_text: {
			fontSize: 'sm',
		},
		_icon: {
			size: 'sm',
		},
	},
	sm: {
		px: '3',
		py: '1',
		height: Tokens.spacingSizeXs / 4,
		_text: {
			fontSize: 'xs',
		},
		_icon: {
			size: 'sm',
		},
	},
};

const defaultProps = {
	variant: 'solid',
	size: 'md',
	colorScheme: 'brand.pure',
};

export const ButtonGroup = {
	baseStyle: { direction: 'row' },
	defaultProps: { space: 2 },
};

export default {
	baseStyle,
	variants,
	sizes,
	defaultProps,
};
