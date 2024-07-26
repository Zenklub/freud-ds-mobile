import { IconProps } from '@components/icon';
import { SpinnerProps } from '@components/spinner';
import { PressableProps } from '@components/touchable';
import { TextProps } from '@components/typography';
import { deepMerge } from '@helpers/deep-merge';
import { useColorTokenOrHardCoded, useContainerPropsStyle } from '@hooks';
import { useComponentTheme, useOpacity, useRadii } from '@hooks/use-theme';

import {
	ButtonSizes,
	ButtonThemeSizes,
	ButtonThemeVariantStyle,
	ButtonVariants,
} from '@theme/tokens';
import { useMemo } from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import { usePressableProps } from '../../hooks/use-pressable-props';
import { ButtonProps } from './button.types';

export interface ButtonStyleHook<T> {
	pressable: PressableProps<T>;
	container: ViewProps;
	text: TextProps;
	icon: Pick<IconProps, 'color' | 'size'>;
	spinner: Pick<SpinnerProps, 'color' | 'size'>;
}

export type ButtonsState =
	| 'default'
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

	const { style, size } = useButtonTheme(
		state,
		props.variant,
		props.size,
		props.inverted
	);

	const {
		backgroundColor: _backgroundColor,
		borderColor: _borderColor,
		borderRadius: _borderRadius,
		opacity: _opacity,
		icon: iconStyle,
		spinner: spinnerStyle,
		...buttonStyle
	} = style;

	const { text: textSize, ...sizePropsStyle } = size;

	const backgroundColor = useColorTokenOrHardCoded(
		style.backgroundColor,
		'brand.pure'
	);
	const borderColor = useColorTokenOrHardCoded(style.borderColor, 'brand.pure');
	const borderRadius = useRadii(style.borderRadius ?? 'md');
	const opacity = useOpacity(style.opacity ?? 'full');

	return {
		pressable: pressableProps,
		container: {
			style: StyleSheet.compose(
				[
					containerStyle,
					buttonStyle,
					sizePropsStyle,
					{
						borderColor,
						opacity,
						borderRadius,
						backgroundColor,
					},
				],
				props.style
			),
		},
		text: {
			color: style.color,
			size: textSize.size,
			fontWeight: textSize.weight,
			style: props.textStyle,
		},
		icon: {
			color: iconStyle?.color ?? style.color,
			size: size.icon.size,
		},
		spinner: {
			color: spinnerStyle?.color ?? style.color,
			size: size.icon.size,
		},
	};
}

interface UseButtonThemeHook {
	style: ButtonThemeVariantStyle;
	size: ButtonThemeSizes;
}

function useButtonTheme(
	state: ButtonsState,
	variant: ButtonVariants = 'solid',
	size: ButtonSizes = 'md',
	inverted = false
): UseButtonThemeHook {
	const buttonTheme = useComponentTheme('button');

	const style = useMemo(() => {
		const theme = inverted ? buttonTheme.inverted : buttonTheme.variants;
		const buttonVariant = theme[variant];

		return deepMerge(
			buttonVariant.default,
			buttonVariant[state]
		) as ButtonThemeVariantStyle;
	}, [buttonTheme, inverted, state, variant]);

	return {
		style,
		size: buttonTheme.sizes[size],
	};
}
