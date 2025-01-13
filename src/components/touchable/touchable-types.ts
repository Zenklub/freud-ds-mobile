import { ContainerProps } from '@components/view';
import React from 'react';
import {
	AccessibilityProps,
	GestureResponderEvent,
	Insets,
	LayoutChangeEvent,
	NativeSyntheticEvent,
	StyleProp,
	TargetedEvent,
	ViewStyle,
} from 'react-native';

export type PressableResponder<T> = T extends undefined
	? (e: GestureResponderEvent) => void
	: (data: T, e: GestureResponderEvent) => void;

export interface PressableProps<T> extends AccessibilityProps {
	/**
	 * Delay in ms, from onPressIn, before onLongPress is called.
	 */
	delayLongPress?: number;

	/**
	 * Delay in ms, from the start of the touch, before onPressIn is called.
	 */
	delayPressIn?: number;

	/**
	 * Delay in ms, from the release of the touch, before onPressOut is called.
	 */
	delayPressOut?: number;

	/**
	 * If true, disable all interactions for this component.
	 */
	disabled?: boolean;

	/**
	 * This defines how far your touch can start away from the button.
	 * This is added to pressRetentionOffset when moving off of the button.
	 * NOTE The touch area never extends past the parent view bounds and
	 * the Z-index of sibling views always takes precedence if a touch hits
	 * two overlapping views.
	 */
	hitSlop?: Insets;

	/**
	 * When `accessible` is true (which is the default) this may be called when
	 * the OS-specific concept of "blur" occurs, meaning the element lost focus.
	 * Some platforms may not have the concept of blur.
	 */
	onBlur?: (e: NativeSyntheticEvent<TargetedEvent>) => void;

	/**
	 * When `accessible` is true (which is the default) this may be called when
	 * the OS-specific concept of "focus" occurs. Some platforms may not have
	 * the concept of focus.
	 */
	onFocus?: (e: NativeSyntheticEvent<TargetedEvent>) => void;

	/**
	 * Invoked on mount and layout changes with
	 * {nativeEvent: {layout: {x, y, width, height}}}
	 */
	onLayout?: (event: LayoutChangeEvent) => void;

	onLongPress?: PressableResponder<T>;
	onPress?: PressableResponder<T>;
	onPressIn?: PressableResponder<T>;
	onPressOut?: PressableResponder<T>;

	/**
	 * When the scroll view is disabled, this defines how far your
	 * touch may move off of the button, before deactivating the button.
	 * Once deactivated, try moving it back and you'll see that the button
	 * is once again reactivated! Move it back and forth several times
	 * while the scroll view is disabled. Ensure you pass in a constant
	 * to reduce memory allocations.
	 */
	pressRetentionOffset?: Insets;

	/**
	 * If true, doesn't play a system sound on touch.
	 *
	 * @platform android
	 */
	touchSoundDisabled?: boolean;
}

export type TouchableProps<T> = PressableProps<T> &
	ContainerProps & {
		data?: T;
		children: React.ReactNode;
		style?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
		accessibilityLabel?: string;
		backgroundColor?: string;
		borderless?: boolean;
		rippleSize?: number;
		activeOpacity?: number;

		/**
		 * Used to locate this view in end-to-end tests.
		 */
		testID?: string;
	};
