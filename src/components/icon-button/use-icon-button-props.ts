import { ButtonsState } from '@components/button/use-button-props';
import { IconButtonProps } from '@components/icon-button';
import { SpinnerProps } from '@components/spinner';
import { PressableProps } from '@components/touchable';
import { deepMerge } from '@helpers/object.helper';
import { useContainerPropsStyle } from '@hooks/use-container-style.hook';
import { usePressableProps } from '@hooks/use-pressable-props';

import { useColorMode, useComponentTheme } from '@hooks/use-theme.hook';
import {
	HardCodedColor,
	IconButtonSizes,
	IconButtonVariants,
} from '@theme/tokens/tokens';
import { ViewProps } from 'react-native';
import { IconProps } from '../icon/icon.types';

export interface IconButtonStyleHook<T> {
	pressable: PressableProps<T>;
	container: ViewProps;
	icon: IconProps;
	spinner: SpinnerProps;
}

export function useIconButtonProps<T>(
	props: IconButtonProps<T>,
	state: ButtonsState
): IconButtonStyleHook<T> {
	const pressableProps = usePressableProps(props as PressableProps<T>);
	const [containerStyle] = useContainerPropsStyle(props);

	const theme = useIconButtonTheme(
		state,
		props.variant,
		props.size,
		props.inverted
	);

	return {
		pressable: pressableProps,
		container: {
			...theme.props,
			style: [containerStyle, theme.style, props.style],
		},
		icon: {
			...theme.icon.props,
			name: theme.icon.name,
			size: theme.icon.size,
			color: theme.icon.style.color as HardCodedColor,
			style: theme.icon.style,
		},
		spinner: {
			...theme.spinner.props,
			size: theme.spinner.size,
			color: theme.spinner.style.color as HardCodedColor,
			style: theme.spinner.style,
		},
	};
}

function useIconButtonTheme(
	state: ButtonsState,
	variant: IconButtonVariants = 'solid',
	size: IconButtonSizes = 'md',
	inverted = false
) {
	const colorMode = useColorMode(inverted);
	const theme = useComponentTheme('IconButton', colorMode);

	const variantTheme =
		theme.variants[variant][
			state as keyof typeof theme.variants[typeof variant]
		];

	const sizeTheme = theme.sizes[size];

	const mergedTheme = deepMerge(variantTheme, sizeTheme);

	return mergedTheme;
}
