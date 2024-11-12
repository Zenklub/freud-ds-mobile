import { useColorMode, useComponentTheme } from '@hooks/use-theme.hook';
import React from 'react';
import { Switch as RNSwitch, SwitchChangeEvent, View } from 'react-native';
import { SwitchProps } from './switch.types';

export const Switch: React.FC<SwitchProps> = (props) => {
	const { testID, checked, onChange, disabled } = props;

	const { opacity, trackColorTrue, trackColorFalse, thumbColor } =
		useSwitchTheme(props);

	const onChangeHandler = (event: SwitchChangeEvent) => {
		if (disabled) {
			return;
		}
		const currentValue = event.nativeEvent.value;
		onChange?.(currentValue);
	};

	return (
		<View pointerEvents={disabled ? 'none' : undefined}>
			<RNSwitch
				testID={testID}
				style={{ opacity }}
				thumbColor={thumbColor}
				trackColor={{ false: trackColorFalse, true: trackColorTrue }}
				value={checked}
				ios_backgroundColor={trackColorFalse}
				onChange={onChangeHandler}
			/>
		</View>
	);
};

function useSwitchTheme(props: SwitchProps) {
	const colorMode = useColorMode(props.inverted);
	const switchTheme = useComponentTheme('Switch', colorMode);
	const isActive = props.checked ?? false;
	const isDisabled = props.disabled ?? false;

	const theme = isDisabled ? switchTheme.disabled : switchTheme.enabled;

	const opacity = isActive ? theme.active.style.opacity : theme.style.opacity;
	const trackColorTrue = theme.active.style.backgroundColor;
	const trackColorFalse = theme.style.backgroundColor;
	const thumbColor = isActive ? theme.active.style.color : theme.style.color;

	return {
		opacity,
		trackColorTrue,
		trackColorFalse,
		thumbColor,
	};
}
