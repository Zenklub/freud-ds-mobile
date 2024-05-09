import React from 'react';
import { LayoutRectangle } from 'react-native';
import { Animated, StyleProp, ViewStyle } from 'react-native';

type AnimatedStyle = Animated.AnimatedProps<StyleProp<ViewStyle>> | ViewStyle;

export type AlertStatus = 'success' | 'info' | 'warning' | 'danger';

export interface AlertProps {
	/**
	 * Title for the toast
	 */
	title: string;
	/**
	 * Body for the toast
	 */
	body?: string | React.ReactNode;
	/**
	 * Status for the toast
	 * @default info
	 */
	status?: AlertStatus;
	/**
	 * If true displays the close button
	 * @default true
	 */
	dismissible?: boolean;
	/**
	 * Callback when user press close button
	 */
	onDismiss?: () => void;
	/**
	 * Callback when user press the toast
	 */
	action?: () => void;
	/**
	 * View Style for the toast container. Animated styles are accepted
	 */
	style?: AnimatedStyle | AnimatedStyle[];
	/**
	 * Invoked on mount and layout changes with
	 *
	 * {nativeEvent: { layout: {x, y, width, height}}}.
	 */
	onLayout?: (layout: LayoutRectangle) => void;
	/**
	 * Test ID for the toast
	 * @default Alert
	 * @example 'Alert'
	 */
	testID?: string;
}
