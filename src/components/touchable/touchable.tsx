import React from 'react';
import {
	Platform,
	TouchableNativeFeedback,
	TouchableOpacity,
	View,
} from 'react-native';
import { getBackground } from './utils';
import { TouchableProps } from './touchable-types';

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
