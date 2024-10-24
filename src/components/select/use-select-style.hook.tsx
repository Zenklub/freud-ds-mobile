import { useColors, useTokens } from '@hooks';
import { IColors } from '@theme/base/colors';

interface SelectColors {
	backgroundColor: IColors;
	normalBorderColor: IColors;
	focusedBorderColor: IColors;
	errorBorderColor: IColors;
	helperTextColor: IColors;
	errorTextColor: IColors;
	placeholderTextColor: IColors;
	selectedItemTextColor: IColors;
	labelColor: IColors;
	iconColor: IColors;
}

const colorTokens: {
	inverted: SelectColors;
	normal: SelectColors;
} = {
	inverted: {
		backgroundColor: 'neutral.white',
		normalBorderColor: 'neutral.light.300',
		focusedBorderColor: 'brand.pure',
		errorBorderColor: 'feedback.negative.400',

		helperTextColor: 'neutral.white',
		errorTextColor: 'feedback.negative.400',
		placeholderTextColor: 'neutral.dark.200',
		selectedItemTextColor: 'neutral.dark.400',
		labelColor: 'neutral.white',
		iconColor: 'neutral.dark.200',
	},
	normal: {
		backgroundColor: 'neutral.white',
		normalBorderColor: 'neutral.light.300',
		focusedBorderColor: 'brand.pure',
		errorBorderColor: 'feedback.negative.400',

		helperTextColor: 'neutral.dark.400',
		errorTextColor: 'feedback.negative.400',
		placeholderTextColor: 'neutral.dark.200',
		selectedItemTextColor: 'neutral.dark.400',
		labelColor: 'neutral.dark.400',
		iconColor: 'neutral.dark.200',
	},
};

export const useSelectStyle = (disabled: boolean, inverted: boolean) => {
	const tokens = inverted ? colorTokens.inverted : colorTokens.normal;
	const [
		backgroundColor,
		normalBorderColor,
		focusedBorderColor,
		errorBorderColor,
	] = useColors(
		tokens.backgroundColor,
		tokens.normalBorderColor,
		tokens.focusedBorderColor,
		tokens.errorBorderColor
	);

	const [
		inputHeight,
		paddingHorizontal,
		inputAccessoryPaddingHorizontal,
		borderRadius,
		opacity,
	] = useTokens(
		'spacing.sm',
		'spacing.nano',
		'spacing.nano',
		'radii.md',
		disabled ? 'opacity.700' : 'opacity.full'
	);

	return {
		backgroundColor,
		normalBorderColor,
		focusedBorderColor,
		errorBorderColor,
		placeholderTextColor: tokens.placeholderTextColor,
		helperTextColor: tokens.helperTextColor,
		errorTextColor: tokens.errorTextColor,
		selectedItemTextColor: tokens.selectedItemTextColor,
		labelColor: tokens.labelColor,
		iconColor: tokens.iconColor,
		inputHeight,
		paddingHorizontal,
		inputAccessoryPaddingHorizontal,
		borderRadius,
		opacity,
	};
};
