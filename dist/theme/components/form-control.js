// @ts-ignore
import * as Tokens from '@freud-ds/tokens/style/react-native/variables';
export var FormControl = {
    baseStyle: {
        width: '100%',
    },
};
// FormControlErrorMessage
export var FormControlErrorMessage = {
    baseStyle: function () {
        return {
            mt: '2',
            _text: {
                fontSize: 'md',
                color: 'feedback.negative.pure',
            },
            _disabled: {
                opacity: Tokens.opacityLevel5,
            },
            _stack: { space: 1, alignItems: 'center' },
            _dark: {
                _text: {
                    color: 'error.500',
                },
            },
        };
    },
};
// FormControlLabel
export var FormControlLabel = {
    baseStyle: function (_a) {
        var colorScheme = _a.colorScheme;
        var inverted = colorScheme === 'neutral.white';
        var color = inverted ? 'neutral.white' : 'neutral.dark.400';
        var colorDark = inverted ? 'neutral.dark.400' : 'neutral.white';
        return {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            _text: {
                fontSize: 'md',
                fontWeight: 'medium',
                color: color,
            },
            my: '0',
            _astrick: {
                color: color,
            },
            _disabled: {
                opacity: Tokens.opacityLevel5,
            },
            _dark: {
                _text: {
                    color: colorDark,
                },
                _astrick: {
                    color: colorDark,
                },
            },
        };
    },
};
// FormControlHelperText
export var FormControlHelperText = {
    baseStyle: function (_a) {
        var colorScheme = _a.colorScheme;
        var inverted = colorScheme === 'neutral.white';
        return {
            mt: '0',
            _text: {
                fontSize: 'sm',
                color: inverted ? 'neutral.white' : 'neutral.dark.400',
            },
            _disabled: {
                opacity: Tokens.opacityLevel5,
            },
            _dark: {
                _text: {
                    color: inverted ? 'neutral.dark.400' : 'neutral.white',
                },
            },
        };
    },
};
