import { Text } from '@components/typography/text';
import { useColorMode, useComponentTheme } from '@hooks/use-theme.hook';
import React, { useMemo } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { RadioGroupContextProvider, useRadioContext } from './radio-context';
import { RadioComponentType } from './radio.types';

export const Radio: RadioComponentType = ({
	testID,
	value,
	isFocused = false,
	disabled = false,
	inverted = false,
	children,
}) => {
	const { setValue, currentValue } = useRadioContext();

	const isSelected = useMemo(() => {
		return currentValue === value;
	}, [currentValue, value]);

	const theme = useRadioTheme({
		selected: isSelected,
		focused: isFocused,
		disabled,
		inverted,
	});

	const onPressHandler = () => {
		if (disabled) return;

		setValue(value);
	};

	return (
		<TouchableWithoutFeedback onPress={onPressHandler} testID={testID}>
			<View style={[styles.container, theme.style]}>
				<View style={theme.outer.style}>
					<View style={[styles.box, theme.box.style]}>
						<View
							testID={`${testID}.indicator`}
							style={theme.indicator.style}
						/>
					</View>
				</View>
				<Text
					testID={`${testID}.label`}
					style={theme.label.style}
					{...theme.label.props}
				>
					{children}
				</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	box: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});

interface UseRadioThemeArgs {
	selected: boolean;
	focused: boolean;
	disabled: boolean;
	inverted: boolean;
}

function useRadioTheme({
	selected,
	focused,
	disabled,
	inverted,
}: UseRadioThemeArgs) {
	const colorMode = useColorMode(inverted);
	const radioTheme = useComponentTheme('Radio', colorMode);

	if (disabled) {
		return selected ? radioTheme.disabledSelected : radioTheme.disabled;
	}

	if (focused) {
		return selected ? radioTheme.focusedSelected : radioTheme.focused;
	}

	return selected ? radioTheme.selected : radioTheme.normal;
}

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
