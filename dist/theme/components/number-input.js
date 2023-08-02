// @ts-ignore
import { mode } from 'native-base/lib/module/theme/tools';
var defaultProps = {
    size: 'sm',
    step: 1,
    min: -Infinity,
    max: Infinity,
    defaultValue: '0',
    keepWithinRange: true,
    clampValueOnBlur: true,
    focusInputOnChange: true,
    getAriaValueText: true,
};
export default {
    defaultProps: defaultProps,
};
//Steppers
var stepperbaseStyle = function (props) {
    return {
        bg: mode('primary.600', 'primary.200')(props),
        iconColor: mode('gray.50', 'gray.800')(props),
        _active: {},
        _disabled: {
            // iconColor: mode('gray.50', 'gray.300')(props),
            // bg: mode('blackAlpha.200', 'whiteAlpha.300')(props),
            opacity: 0.5,
        },
    };
};
export var NumberInputStepper = {
    baseStyle: stepperbaseStyle,
};
