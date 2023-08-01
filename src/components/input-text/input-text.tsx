import React, { useMemo } from 'react';
import { InputProps } from '@components/input-text/input.types';
import { Input as NRInput, Pressable, useThemeProps } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { FormControl } from '@components/form-control/form-control';
import { Icon } from '@components/icon/icon';
import Colors, { IColors } from '@theme/base/colors';
import { HitSlop } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';

const styles = StyleSheet.create({
	iconContainer: {
		paddingRight: 8,
	},
});

const iconHitSlop: HitSlop = {
	top: 8,
	bottom: 8,
	left: 8,
	right: 0,
};

export const InputText: React.FC<InputProps> = ({
	label,
	helperText,
	inverted = false,
	error,
	disabled = false,
	iconName,
	onChangeText,
	onIconPress,
	testID,
	value,
	...props
}) => {
	const colorScheme: IColors = inverted ? 'neutral.white' : 'brand.pure';

	useThemeProps('InputText', {
		variant: 'outline',
		colorScheme: colorScheme,
		isDisabled: disabled,
		isInvalid: !!error,
	});

	const icon = useMemo(() => {
		if (iconName) {
			const iconComponent = (
				<Icon
					testID={`${testID}-icon`}
					name={iconName}
					size="md"
					color={Colors.neutral.dark[100]}
				/>
			);
			if (!onIconPress) {
				return (
					<View
						testID={`${testID}-icon-container`}
						style={styles.iconContainer}
					>
						{iconComponent}
					</View>
				);
			}
			return (
				<Pressable
					testID={`${testID}-icon-container`}
					style={styles.iconContainer}
					onPress={onIconPress}
					hitSlop={iconHitSlop}
				>
					{iconComponent}
				</Pressable>
			);
		}
		return undefined;
	}, [iconName, onIconPress]);

	return (
		<View>
			{label ? (
				<FormControl.Label
					testID={`${testID}-label`}
					inverted={inverted}
					isDisabled={disabled}
				>
					{label}
				</FormControl.Label>
			) : null}
			<NRInput
				testID={testID}
				isInvalid={!!error}
				isDisabled={disabled}
				variant="outline"
				colorScheme={colorScheme}
				InputRightElement={icon}
				value={value}
				{...props}
			/>
			{error ?? helperText ? (
				<FormControl.HelperText
					testID={`${testID}-helper-text`}
					inverted={inverted}
					isDisabled={disabled}
				>
					{error ?? helperText}
				</FormControl.HelperText>
			) : null}
		</View>
	);
};
