import React from 'react';
import {
	Insets,
	Platform,
	StyleProp,
	TouchableNativeFeedback,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';
import tinyColor from 'tinycolor2';
import {
	TOUCHABLE_RIPPLE_COLOR,
	TOUCHABLE_RIPPLE_COLOR_DARK,
} from './constants';
import { shouldUseRipple } from './utils';

export interface TouchableProps<T> {
	data?: T;
	onPress?: T extends undefined ? () => void : (data: T) => void;
	children: React.ReactNode;
	disabled?: boolean;
	style?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
	testID?: string;
	accessibilityLabel?: string;

	backgroundColor?: string;
	borderless?: boolean;
	rippleSize?: number;

	/**
	 * Additional distance outside of this view in which a press is detected.
	 */
	hitSlop?: Insets | number;
}

const getBackground = (
	backgroundColor: string,
	borderless: boolean,
	rippleSize: number | undefined
) => {
	if (shouldUseRipple()) {
		return TouchableNativeFeedback.Ripple(
			tinyColor(backgroundColor).isDark()
				? TOUCHABLE_RIPPLE_COLOR_DARK
				: TOUCHABLE_RIPPLE_COLOR,
			borderless,
			rippleSize
		);
	}

	return TouchableNativeFeedback.SelectableBackground();
};

export const Touchable = <T,>({
	children,
	onPress,
	hitSlop,
	data,
	backgroundColor = '#fff',
	borderless = false,
	rippleSize,
	style,
	...props
}: TouchableProps<T>) => {
	const hitSlopFinal =
		typeof hitSlop === 'number'
			? { top: hitSlop, right: hitSlop, bottom: hitSlop, left: hitSlop }
			: hitSlop;

	const onPressHandler = () => {
		onPress?.(data as T);
	};

	const renderContent = () => {
		return <View style={style}>{children}</View>;
	};

	if (Platform.OS === 'android') {
		const background = getBackground(backgroundColor, borderless, rippleSize);

		return (
			<TouchableNativeFeedback
				onPress={onPressHandler}
				background={background}
				hitSlop={hitSlopFinal}
				{...props}
			>
				{renderContent()}
			</TouchableNativeFeedback>
		);
	}

	return (
		<TouchableOpacity
			onPress={onPressHandler}
			activeOpacity={0.7}
			hitSlop={hitSlopFinal}
			{...props}
		>
			{renderContent()}
		</TouchableOpacity>
	);
};

Touchable.displayName = 'Touchable';
