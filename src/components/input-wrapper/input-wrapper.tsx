import { Icon } from '@components/icon';
import { Touchable, TouchableProps } from '@components/touchable';
import { Text } from '@components/typography';
import { ContainerProps, View } from '@components/view';
import { useColorMode, useComponentTheme } from '@hooks/use-theme.hook';
import { IconName, ThemeValues } from '@theme';
import { ExtractThemeValues } from '@theme/theme-value-extractor.type';
import { StylingKeys } from '@theme/theming.interface';
import {
	BaseInputComponentTheme,
	InputState,
} from '@theme/tokens/components/input-base-theme';
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

export type BaseInputProps = ContainerProps & {
	label?: string;
	helperText?: string;
	inverted?: boolean;
	error?: string | boolean;
	disabled?: boolean;
	iconName?: IconName;
	onIconPress?: () => void;
	testID?: string;
	containerStyle?: ViewStyle;
	inputContainerStyle?: ViewStyle;
	iconContainerStyle?: TouchableProps<any>['style'];
	iconHitSlop?: TouchableProps<any>['hitSlop'];
};

type ExtractKeysExtendingType<TObj, TType> = {
	[K in keyof TObj]: TObj[K] extends TType ? K : never;
}[keyof TObj];

type InputThemeType = ExtractKeysExtendingType<
	ThemeValues,
	ExtractThemeValues<
		Omit<Required<BaseInputComponentTheme>, StylingKeys | 'base'>
	>
>;

export interface InputWrapperProps<T extends InputThemeType = InputThemeType>
	extends BaseInputProps {
	state: InputState;
	theme: InputThemeType;
	children: (theme: ThemeValues[T][keyof ThemeValues[T]]) => React.ReactNode;
}

export const InputWrapper: React.FC<InputWrapperProps> = (props) => {
	const theme = useInputWrapperTheme(props);

	const {
		error,
		helperText,
		testID,
		containerStyle,
		label,
		iconName,
		onIconPress,
		iconContainerStyle,
		inputContainerStyle,
		iconHitSlop,
	} = props;

	const renderText = () => {
		if (error && typeof error === 'string') {
			return (
				<Text
					{...theme.errorText.props}
					style={theme.errorText.style}
					testID={`${testID}-error-text`}
				>
					{error}
				</Text>
			);
		}

		if (helperText) {
			return (
				<Text
					{...theme.helperText.props}
					style={theme.helperText.style}
					testID={`${testID}-helper-text`}
				>
					{helperText}
				</Text>
			);
		}

		return null;
	};

	return (
		<View
			{...theme.props}
			{...props}
			testID={`${testID}-container`}
			style={[theme.style, containerStyle]}
		>
			<Text
				{...theme.label.props}
				style={theme.label.style}
				testID={`${testID}-label`}
			>
				{label}
			</Text>
			<View
				{...(theme.inputContainer.props ?? {})}
				testID={`${testID}-input-container`}
				style={[
					styles.container,
					theme.inputContainer.style,
					inputContainerStyle,
				]}
			>
				{props.children(theme)}
				{iconName ? (
					<Touchable
						{...(theme.iconContainer.props ?? {})}
						onPress={onIconPress}
						hitSlop={iconHitSlop}
						style={[theme.iconContainer?.style, iconContainerStyle]}
						testID={`${testID}-icon-container`}
					>
						<Icon
							{...theme.icon.props}
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

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
	},
	iconContainer: {
		justifyContent: 'center',
	},
});

function useInputWrapperTheme({ inverted, theme, state }: InputWrapperProps) {
	const colorMode = useColorMode(inverted);

	const textInputTheme = useComponentTheme(theme, colorMode);
	return textInputTheme[state];
}
