import { useColors } from '@helpers/use-colors.hook';
import { useNamedTokens } from '@helpers/use-named-tokens.hook';

const colorTokens = {
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
	const {
		backgroundColor,
		normalBorderColor,
		focusedBorderColor,
		errorBorderColor,
		placeholderTextColor,
		helperTextColor,
		errorTextColor,
		selectedItemTextColor,
		labelColor,
		iconColor,
	} = useColors(colorTokens, inverted);

	const { inputHeight, paddingHorizontal, inputAccessoryPaddingHorizontal } =
		useNamedTokens('space', {
			inputHeight: 'sm',
			paddingHorizontal: 'nano',
			inputAccessoryPaddingHorizontal: 'nano',
		});
	const { borderRadius } = useNamedTokens('radii', {
		borderRadius: 'md',
	});
	const { opacity } = useNamedTokens('opacity', {
		opacity: disabled ? 'level7' : 'full',
	});

	return {
		backgroundColor,
		normalBorderColor,
		focusedBorderColor,
		errorBorderColor,
		placeholderTextColor,
		helperTextColor,
		errorTextColor,
		selectedItemTextColor,
		labelColor,
		iconColor,
		inputHeight,
		paddingHorizontal,
		inputAccessoryPaddingHorizontal,
		borderRadius,
		opacity,
	};
};
