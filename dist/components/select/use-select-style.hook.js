import { useColors } from '../../helpers/use-colors.hook';
import { useNamedTokens } from '../../helpers/use-named-tokens.hook';
var colorTokens = {
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
export var useSelectStyle = function (disabled, inverted) {
    var _a = useColors(colorTokens, inverted), backgroundColor = _a.backgroundColor, normalBorderColor = _a.normalBorderColor, focusedBorderColor = _a.focusedBorderColor, errorBorderColor = _a.errorBorderColor, placeholderTextColor = _a.placeholderTextColor, helperTextColor = _a.helperTextColor, errorTextColor = _a.errorTextColor, selectedItemTextColor = _a.selectedItemTextColor, labelColor = _a.labelColor, iconColor = _a.iconColor;
    var _b = useNamedTokens('space', {
        inputHeight: 'sm',
        paddingHorizontal: 'nano',
        inputAccessoryPaddingHorizontal: 'nano',
    }), inputHeight = _b.inputHeight, paddingHorizontal = _b.paddingHorizontal, inputAccessoryPaddingHorizontal = _b.inputAccessoryPaddingHorizontal;
    var borderRadius = useNamedTokens('radii', {
        borderRadius: 'md',
    }).borderRadius;
    var opacity = useNamedTokens('opacity', {
        opacity: disabled ? 'level7' : 'full',
    }).opacity;
    return {
        backgroundColor: backgroundColor,
        normalBorderColor: normalBorderColor,
        focusedBorderColor: focusedBorderColor,
        errorBorderColor: errorBorderColor,
        placeholderTextColor: placeholderTextColor,
        helperTextColor: helperTextColor,
        errorTextColor: errorTextColor,
        selectedItemTextColor: selectedItemTextColor,
        labelColor: labelColor,
        iconColor: iconColor,
        inputHeight: inputHeight,
        paddingHorizontal: paddingHorizontal,
        inputAccessoryPaddingHorizontal: inputAccessoryPaddingHorizontal,
        borderRadius: borderRadius,
        opacity: opacity,
    };
};
