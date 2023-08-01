import React, { useMemo } from 'react';
import { RadioComponentType } from './radio.types';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { RadioGroupContextProvider, useRadioContext } from './radio-context';
import { Text } from '@components/typography/text';
import { useToken } from 'native-base';

export const Radio: RadioComponentType = ({
	value,
	isFocused,
	disabled,
	inverted,
	children,
}) => {
	const [neutralWhiteColor, neutralLight400Color, brandPureColor] = useToken(
		'colors',
		['neutral.white', 'neutral.light.400', 'brand.pure']
	);

	const { setValue, currentValue } = useRadioContext();

	const isChecked = useMemo(() => {
		return currentValue === value;
	}, [currentValue, value]);

	const onPressHandler = () => {
		if (disabled) return;

		setValue(value);
	};

	return (
		<TouchableWithoutFeedback onPress={onPressHandler}>
			<View style={[styles.container, disabled ? styles.disabled : undefined]}>
				<View
					style={[
						styles.focusContainer,
						{
							borderColor:
								isFocused && !disabled ? brandPureColor : 'transparent',
						},
					]}
				>
					<View
						style={[
							styles.radio,
							{
								backgroundColor: neutralWhiteColor,
								borderColor: isChecked ? brandPureColor : neutralLight400Color,
								borderWidth: isChecked ? 5 : 2,
							},
						]}
					/>
				</View>
				<Text inverted={inverted}>{children}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	disabled: {
		opacity: 0.4,
	},
	radio: {
		width: 20,
		height: 20,
		borderWidth: 2,
		borderRadius: 10,
	},
	focusContainer: {
		borderWidth: 2,
		borderRadius: 12,
		borderColor: 'transparent',
		marginRight: 10,
	},
});

export const RadioGroup: RadioComponentType['Group'] = ({
	children,
	onChange,
	initialValue,
}) => {
	return (
		<RadioGroupContextProvider onChange={onChange} initialValue={initialValue}>
			{children}
		</RadioGroupContextProvider>
	);
};

Radio.Group = RadioGroup;

Radio.displayName = 'Radio';
Radio.Group.displayName = 'RadioGroup';
