import { ButtonsState } from '@components/button/use-button-props';
import { IconButtonProps } from '@components/icon-button';
import { SpinnerProps } from '@components/spinner';
import { PressableProps } from '@components/touchable';
import { deepMerge } from '@helpers/deep-merge';
import { useColorTokenOrHardCoded, useContainerPropsStyle } from '@hooks';
import { usePressableProps } from '@hooks/use-pressable-props';
import { useComponentTheme, useOpacity, useRadii } from '@hooks/use-theme';
import {
	IconButtonSizes,
	IconButtonThemeSizes,
	IconButtonThemeVariantStyle,
	IconButtonVariants,
} from '@theme/tokens/components/icon-button';
import { useMemo } from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import { IconProps } from '../icon/icon.types';

export interface IconButtonStyleHook<T> {
	pressable: PressableProps<T>;
	container: ViewProps;
	icon: Pick<IconProps, 'color' | 'size'>;
	spinner: Pick<SpinnerProps, 'color' | 'size'>;
}

export function useIconButtonProps<T>(
	props: IconButtonProps<T>,
	state: ButtonsState
): IconButtonStyleHook<T> {
	const pressableProps = usePressableProps(props as PressableProps<T>);
	const [containerStyle] = useContainerPropsStyle(props);

	const { style, size } = useIconButtonTheme(
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
		spinner: spinnerStyle,
		color: iconColor,
		...buttonStyle
	} = style;

	const { icon: iconSize, ...sizePropsStyle } = size;

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
						height: sizePropsStyle.height,
						width: sizePropsStyle.width ?? sizePropsStyle.height,
					},
				],
				props.style
			),
		},
		icon: {
			color: iconColor,
			size: iconSize.size,
		},
		spinner: {
			color: spinnerStyle?.color ?? iconColor,
			size: iconSize.size,
		},
	};
}

interface UseIconButtonThemeHook {
	style: IconButtonThemeVariantStyle;
	size: IconButtonThemeSizes;
}

function useIconButtonTheme(
	state: ButtonsState,
	variant: IconButtonVariants = 'solid',
	size: IconButtonSizes = 'md',
	inverted = false
): UseIconButtonThemeHook {
	const buttonTheme = useComponentTheme('IconButton');

	const style = useMemo(() => {
		const theme = inverted ? buttonTheme.inverted : buttonTheme.variants;
		const buttonVariant = theme[variant];

		return deepMerge(
			buttonVariant.default,
			buttonVariant[state]
		) as IconButtonThemeVariantStyle;
	}, [buttonTheme, inverted, state, variant]);

	return {
		style,
		size: buttonTheme.sizes[size],
	};
}
