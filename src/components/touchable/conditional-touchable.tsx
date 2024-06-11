import React from 'react';
import { TouchableProps } from './touchable-types';
import { Touchable } from './touchable';
import { View } from 'react-native';

export interface ConditionalTouchableProps<T> extends TouchableProps<T> {
	condition: boolean;
}

export const ConditionalTouchable = <T,>({
	condition,
	onPress,
	hitSlop,
	...props
}: ConditionalTouchableProps<T>) => {
	if (condition) {
		return <Touchable {...props} onPress={onPress} hitSlop={hitSlop} />;
	}

	return <View {...props} />;
};
