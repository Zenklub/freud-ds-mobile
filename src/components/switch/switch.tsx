import { useColors } from '@helpers/use-colors.hook';
import React from 'react';
import { Switch as RNSwitch, SwitchChangeEvent, View } from 'react-native';
import { SwitchProps } from './switch.types';
import { useNamedTokens } from '@helpers/use-named-tokens.hook';

const tokens = {
	normal: {
		thumbColor: 'neutral.white',
		trackColorFalse: 'neutral.dark.100',
		trackColorTrue: 'brand.pure',
	},
	inverted: {
		thumbColor: 'neutral.white',
		trackColorFalse: 'neutral.dark.100',
		trackColorTrue: 'brand.pure',
	},
};

export const Switch: React.FC<SwitchProps> = ({
	testID,
	checked,
	onChange,
	disabled,
	inverted = false,
}) => {
	const { thumbColor, trackColorFalse, trackColorTrue } = useColors(
		tokens,
		inverted
	);

	const { opacity } = useNamedTokens('opacity', {
		opacity: disabled ? 'level5' : 'full',
	});

	const onChangeHandler = (event: SwitchChangeEvent) => {
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
