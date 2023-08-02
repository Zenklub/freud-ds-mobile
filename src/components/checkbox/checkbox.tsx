import { useColors } from '@helpers/use-colors.hook';
import React, { useMemo } from 'react';
import { View } from 'react-native';
import { CheckboxProps } from './checkbox.types';
import { useNamedTokens } from '@helpers/use-named-tokens.hook';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Icon } from '@components/icon';
import { Text } from '@components/typography';

const tokens = {
	normal: {
		checkColor: 'neutral.white',

		labelColor: 'neutral.dark.400',

		// Normal
		boxBgColor: 'neutral.white',
		boxBorderColor: 'neutral.light.400',
		boxOuterBorderColor: 'neutral.hidden',
		boxBgColorFocused: 'neutral.white',
		boxBorderColorFocused: 'neutral.light.400',
		boxOuterBorderColorFocused: 'brand.pure',

		// Checked
		boxBgColorChecked: 'brand.pure',
		boxBorderColorChecked: 'brand.pure',
		boxOuterBorderColorChecked: 'neutral.hidden',
		boxBgColorCheckedFocused: 'brand.pure',
		boxBorderColorCheckedFocused: 'neutral.light.400',
		boxOuterBorderColorCheckedFocused: 'brand.pure',
	},
	inverted: {
		checkColor: 'neutral.white',
		labelColor: 'neutral.white',

		// Normal
		boxBgColor: 'neutral.white',
		boxBorderColor: 'neutral.light.400',
		boxOuterBorderColor: 'neutral.hidden',
		boxBgColorFocused: 'neutral.white',
		boxBorderColorFocused: 'neutral.light.400',
		boxOuterBorderColorFocused: 'brand.pure',

		// Checked
		boxBgColorChecked: 'brand.pure',
		boxBorderColorChecked: 'brand.pure',
		boxOuterBorderColorChecked: 'neutral.hidden',
		boxBgColorCheckedFocused: 'brand.pure',
		boxBorderColorCheckedFocused: 'neutral.light.400',
		boxOuterBorderColorCheckedFocused: 'brand.pure',
	},
};

interface UseCheckboxStyleArgs {
	checked: boolean;
	focused: boolean;
	disabled: boolean;
	inverted: boolean;
}

const BOX_SIZE = 20;

const useCheckboxStyle = ({
	checked,
	focused,
	disabled,
	inverted,
}: UseCheckboxStyleArgs) => {
	const {
		checkColor,
		labelColor,

		// Normal
		boxBgColor,
		boxBorderColor,
		boxOuterBorderColor,
		boxBgColorFocused,
		boxBorderColorFocused,
		boxOuterBorderColorFocused,

		// Checked
		boxBgColorChecked,
		boxBorderColorChecked,
		boxOuterBorderColorChecked,
		boxBgColorCheckedFocused,
		boxBorderColorCheckedFocused,
		boxOuterBorderColorCheckedFocused,
	} = useColors(tokens, inverted);

	const { bgColor, borderColor, outerBorderColor } = useMemo(() => {
		if (checked && focused) {
			return {
				bgColor: boxBgColorCheckedFocused,
				borderColor: boxBorderColorCheckedFocused,
				outerBorderColor: boxOuterBorderColorCheckedFocused,
			};
		}

		if (focused) {
			return {
				bgColor: boxBgColorFocused,
				borderColor: boxBorderColorFocused,
				outerBorderColor: boxOuterBorderColorFocused,
			};
		}

		if (checked) {
			return {
				bgColor: boxBgColorChecked,
				borderColor: boxBorderColorChecked,
				outerBorderColor: boxOuterBorderColorChecked,
			};
		}

		return {
			bgColor: boxBgColor,
			borderColor: boxBorderColor,
			outerBorderColor: boxOuterBorderColor,
		};
	}, [
		focused,
		checked,
		boxBgColor,
		boxBorderColor,
		boxOuterBorderColor,
		boxBgColorChecked,
		boxBorderColorChecked,
		boxOuterBorderColorChecked,

		boxBorderColorFocused,
		boxOuterBorderColorFocused,

		checkColor,
	]);

	const { opacity } = useNamedTokens('opacity', {
		opacity: disabled ? 'level5' : 'full',
	});

	const { borderRadius } = useNamedTokens('radii', {
		borderRadius: 'sm',
	});

	const { borderWidth } = useNamedTokens('borderWidths', {
		borderWidth: 'md',
	});

	return {
		container: {
			flexShrink: 1,
			borderWidth: borderWidth,
			borderColor: outerBorderColor,
			// Fix border radio
			borderRadius: borderRadius + borderWidth,
			opacity: opacity,
		},
		box: {
			borderWidth: borderWidth,
			backgroundColor: bgColor,
			borderColor: borderColor,
			width: BOX_SIZE,
			height: BOX_SIZE,
			borderRadius: borderRadius,
		},
		check: {
			color: checkColor,
		},
		label: {
			marginLeft: 8,
			color: labelColor,
		},
	};
};

export const Checkbox: React.FC<CheckboxProps> = ({
	testID,
	onChange,
	label,
	checked = false,
	focused = false,
	disabled = false,
	inverted = false,
}) => {
	const styles = useCheckboxStyle({
		checked,
		focused,
		disabled,
		inverted,
	});

	const onPressHandler = () => {
		onChange?.(!checked);
		debugger;
	};

	return (
		<TouchableWithoutFeedback onPress={onPressHandler} testID={testID}>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<View style={styles.container}>
					<View style={styles.box}>
						<Icon name="check" color={styles.check.color} size="sm" />
					</View>
				</View>
				<Text style={styles.label}>{label}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};
