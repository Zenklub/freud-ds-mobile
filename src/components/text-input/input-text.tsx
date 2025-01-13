import {
	BaseInputProps,
	InputWrapper,
} from '@components/input-wrapper/input-wrapper';
import { InputState } from '@theme/tokens/components/input-base-theme';
import React, { useCallback, useState } from 'react';
import {
	TextInput as RNTextInput,
	TextInputProps as RNTextInputProps,
	StyleSheet,
} from 'react-native';

export type TextInputProps = Omit<RNTextInputProps, 'style'> &
	BaseInputProps & {
		inputStyle?: RNTextInputProps['style'];
	};

export const TextInput: React.FC<TextInputProps> = (props) => {
	const { disabled, error, onFocus, onBlur, value, testID, inputStyle } = props;
	const [focused, setFocusedState] = useState(false);
	const state: InputState =
		disabled === true
			? 'disabled'
			: focused
			? 'focused'
			: error
			? 'error'
			: value
			? 'entered'
			: 'normal';

	const onFocusHandler = useCallback(
		(e: any) => {
			setFocusedState(true);
			onFocus?.(e);
		},
		[onFocus]
	);

	const onBlurHandler = useCallback(
		(e: any) => {
			setFocusedState(false);
			onBlur?.(e);
		},
		[onBlur]
	);

	const editable = typeof disabled === 'boolean' ? !disabled : props.editable;

	return (
		<InputWrapper {...props} theme="TextInput" state={state}>
			{(theme) => {
				return (
					<RNTextInput
						{...props}
						onFocus={onFocusHandler}
						onBlur={onBlurHandler}
						placeholderTextColor={theme.placeholderColor}
						style={[styles.input, theme.input.style, inputStyle]}
						editable={editable ?? true}
						testID={testID}
						value={value}
					/>
				);
			}}
		</InputWrapper>
	);
};

export const styles = StyleSheet.create({
	input: {
		flex: 1,
	},
});
