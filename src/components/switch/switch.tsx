import React from 'react';
import { Switch as RNSwitch, SwitchChangeEvent, View } from 'react-native';
import { SwitchProps } from './switch.types';
import { useColors, useTokens } from '@hooks';

const colors = {
	normal: ['neutral.white', 'neutral.dark.100', 'brand.pure'],
	inverted: ['neutral.white', 'neutral.dark.100', 'brand.pure'],
} as const;

export const Switch: React.FC<SwitchProps> = ({
	testID,
	checked,
	onChange,
	disabled,
	inverted = false,
}) => {
	const [thumbColor, trackColorFalse, trackColorTrue] = useColors(
		...(inverted ? colors.inverted : colors.normal)
	);

	const [opacity, opacityDisabled] = useTokens(
		'opacity.full',
		'opacity.level5'
	);

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
				style={{ opacity: disabled ? opacityDisabled : opacity }}
				thumbColor={thumbColor}
				trackColor={{ false: trackColorFalse, true: trackColorTrue }}
				value={checked}
				ios_backgroundColor={trackColorFalse}
				onChange={onChangeHandler}
			/>
		</View>
	);
};
