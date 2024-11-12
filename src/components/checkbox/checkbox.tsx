import { Icon } from '@components/icon';
import { Text } from '@components/typography';
import { useColorMode, useComponentTheme } from '@hooks/use-theme.hook';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { CheckboxProps } from './checkbox.types';

export const Checkbox: React.FC<CheckboxProps> = ({
	testID,
	onChange,
	label,
	checked = false,
	focused = false,
	disabled = false,
	inverted = false,
}) => {
	const theme = useCheckboxTheme({
		checked,
		focused,
		disabled,
		inverted,
	});

	const onPressHandler = () => {
		onChange?.(!checked);
	};

	return (
		<TouchableWithoutFeedback onPress={onPressHandler} testID={testID}>
			<View style={style.container}>
				<View style={theme.style}>
					<View style={[style.box, theme.box.style]}>
						<Icon
							testID={`${testID}.icon`}
							{...theme.check}
							size={theme.check.size ?? 'md'}
							name={theme.check.name ?? 'check'}
						/>
					</View>
				</View>
				<Text
					testID={`${testID}.label`}
					style={theme.label.style}
					{...theme.label.props}
				>
					{label}
				</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

const style = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	box: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});

interface UseCheckboxThemeArgs {
	checked: boolean;
	focused: boolean;
	disabled: boolean;
	inverted: boolean;
}

function useCheckboxTheme({
	checked,
	focused,
	disabled,
	inverted,
}: UseCheckboxThemeArgs) {
	const colorMode = useColorMode(inverted);
	const checkboxTheme = useComponentTheme('CheckBox', colorMode);

	if (disabled) {
		return checked ? checkboxTheme.disabledChecked : checkboxTheme.disabled;
	}

	if (focused) {
		return checked ? checkboxTheme.focusedChecked : checkboxTheme.focused;
	}

	return checked ? checkboxTheme.checked : checkboxTheme.normal;
}
