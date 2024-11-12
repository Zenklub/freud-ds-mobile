import { useContainerPropsStyle } from '@hooks/use-container-style.hook';
import React from 'react';
import {
	GestureResponderEvent,
	Platform,
	TouchableNativeFeedback,
	TouchableOpacity,
	View,
} from 'react-native';
import { TouchableProps } from './touchable-types';
import { getBackground } from './utils';

export const Touchable = <T,>({
	children,
	onPress,
	onPressIn,
	onPressOut,
	onLongPress,
	hitSlop,
	data,
	backgroundColor = '#fff',
	borderless = false,
	rippleSize,
	activeOpacity = 0.7,
	style,
	...props
}: TouchableProps<T>) => {
	const [mergedStyle, rest] = useContainerPropsStyle(props);

	const hitSlopFinal =
		typeof hitSlop === 'number'
			? { top: hitSlop, right: hitSlop, bottom: hitSlop, left: hitSlop }
			: hitSlop;

	const handleOnPress = (event: GestureResponderEvent) => {
		if (data) {
			(onPress as any)?.(data as T, event);
		} else {
			(onPress as any)?.(event);
		}
	};

	const handleOnPressIn = (event: GestureResponderEvent) => {
		if (data) {
			(onPressIn as any)?.(data as T, event);
		} else {
			(onPressIn as any)?.(event);
		}
	};

	const handleOnPressOut = (event: GestureResponderEvent) => {
		if (data) {
			(onPressOut as any)?.(data as T, event);
		} else {
			(onPressOut as any)?.(event);
		}
	};

	const handleOnLongPress = (event: GestureResponderEvent) => {
		if (data) {
			(onLongPress as any)?.(data as T, event);
		} else {
			(onLongPress as any)?.(event);
		}
	};

	const renderContent = () => {
		return <View style={[mergedStyle, style]}>{children}</View>;
	};

	if (Platform.OS === 'android') {
		const background = getBackground(backgroundColor, borderless, rippleSize);

		return (
			<TouchableNativeFeedback
				background={background}
				hitSlop={hitSlopFinal}
				onPress={handleOnPress}
				onPressIn={handleOnPressIn}
				onPressOut={handleOnPressOut}
				onLongPress={handleOnLongPress}
				{...rest}
			>
				{renderContent()}
			</TouchableNativeFeedback>
		);
	}

	return (
		<TouchableOpacity
			activeOpacity={activeOpacity}
			hitSlop={hitSlopFinal}
			onPress={handleOnPress}
			onPressIn={handleOnPressIn}
			onPressOut={handleOnPressOut}
			onLongPress={handleOnLongPress}
			{...rest}
		>
			{renderContent()}
		</TouchableOpacity>
	);
};

Touchable.displayName = 'Touchable';
