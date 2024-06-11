import React from 'react';
import { Insets, StyleProp, ViewStyle } from 'react-native';

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
