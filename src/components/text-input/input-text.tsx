import { Icon } from '@components/icon';
import { InputProps } from '@components/text-input/input.types';
import { Touchable } from '@components/touchable';
import { Text } from '@components/typography';
import { View } from '@components/view';
import React, { useCallback, useState } from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';
import { useTextInputTheme } from './use-text-input-theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
	},
	input: {
		flex: 1,
	},
	iconContainer: {
		justifyContent: 'center',
	},
});

export const TextInput: React.FC<InputProps> = ({
	label,
	helperText,
	inverted = false,
	error,
	disabled,
	iconName,
	onIconPress,
	onFocus,
	onBlur,
	testID,
	value,
	containerStyle,
	inputContainerStyle,
	iconContainerStyle,
	inputStyle,
	iconHitSlop,
	...props
}) => {
	const [focused, setFocusedState] = useState(false);
	const state =
		disabled === true
			? 'disabled'
			: focused
			? 'focused'
			: error
			? 'error'
			: value
			? 'entered'
			: 'default';

	const theme = useTextInputTheme(inverted, state);

	const onFocusHandler = useCallback((e: any) => {
		setFocusedState(true);
		onFocus?.(e);
	}, []);

	const onBlurHandler = useCallback((e: any) => {
		setFocusedState(false);
		onBlur?.(e);
	}, []);

	const renderText = () => {
		if (error && typeof error === 'string') {
			return (
				<Text {...theme.errorTextProps} testID={`${testID}-error-text`}>
					{error}
				</Text>
			);
		}

		if (helperText) {
			return (
				<Text {...theme.helperTextProps} testID={`${testID}-helper-text`}>
					{helperText}
				</Text>
			);
		}

		return null;
	};

	const editable = typeof disabled === 'boolean' ? !disabled : props.editable;

	return (
		<View
			{...theme.containerProps}
			{...props}
			testID={`${testID}-container`}
			style={containerStyle}
		>
			<Text {...theme.labelProps} testID={`${testID}-label`}>
				{label}
			</Text>
			<View
				{...theme.inputContainerProps}
				testID={`${testID}-input-container`}
				style={[
					styles.container,
					theme.inputContainerProps.style,
					inputContainerStyle,
				]}
			>
				<RNTextInput
					{...props}
					{...theme.inputProps}
					editable={editable ?? true}
					style={[styles.input, theme.inputProps.style, inputStyle]}
					testID={testID}
					value={value}
					onBlur={onBlurHandler}
					onFocus={onFocusHandler}
				/>
				{iconName ? (
					<Touchable
						{...theme.iconContainerProps}
						onPress={onIconPress}
						hitSlop={iconHitSlop}
						style={[styles.iconContainer, iconContainerStyle]}
						testID={`${testID}-icon-container`}
					>
						<Icon
							{...theme.iconProps}
							testID={`${testID}-icon`}
							name={iconName}
						/>
					</Touchable>
				) : null}
			</View>
			{renderText()}
		</View>
	);
};
