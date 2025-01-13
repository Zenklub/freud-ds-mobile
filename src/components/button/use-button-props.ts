import { IconProps } from '@components/icon';
import { SpinnerProps } from '@components/spinner';
import { PressableProps } from '@components/touchable';
import { TextProps } from '@components/typography';
import { useContainerPropsStyle } from '@hooks/use-container-style.hook';
import { useColorMode, useComponentTheme } from '@hooks/use-theme.hook';

import { deepMerge } from '@helpers/object.helper';
import { ButtonSizes, ButtonVariants, HardCodedColor } from '@theme';
import { ViewProps } from 'react-native';
import { usePressableProps } from '../../hooks/use-pressable-props';
import { ButtonProps } from './button.types';

export interface ButtonStyleHook<T> {
	pressable: PressableProps<T>;
	container: ViewProps;
	text: TextProps;
	icon: IconProps;
	spinner: SpinnerProps;
}

export type ButtonsState =
	| 'normal'
	| 'loading'
	| 'focus'
	| 'active'
	| 'disabled';

export function useButtonProps<T>(
	props: ButtonProps<T>,
	state: ButtonsState
): ButtonStyleHook<T> {
	const pressableProps = usePressableProps(props as PressableProps<T>);
	const [containerStyle] = useContainerPropsStyle(props);

	const theme = useButtonTheme(
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
		text: {
			...(theme.text.props ?? {}),
			style: [theme.text.style, props.textStyle],
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

function useButtonTheme(
	state: ButtonsState,
	variant: ButtonVariants = 'solid',
	size: ButtonSizes = 'md',
	inverted = false
) {
	const colorMode = useColorMode(inverted);
	const theme = useComponentTheme('Button', colorMode);

	const variantTheme =
		theme.variants[variant][
			state as keyof typeof theme.variants[typeof variant]
		];

	const sizeTheme = theme.sizes[size];

	const mergedTheme = deepMerge(variantTheme, sizeTheme);

	return mergedTheme;
}
