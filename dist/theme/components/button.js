var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// @ts-ignore
import * as Tokens from '@freud-ds/tokens/style/react-native/variables';
var baseStyle = function (_a) {
    var colorScheme = _a.colorScheme;
    var inverted = colorScheme === 'neutral.white';
    var foregroundColor = inverted ? 'brand.pure' : 'neutral.white';
    var backgroundColor = inverted ? 'neutral.white' : 'brand.pure';
    return {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        rounded: 'md',
        borderWidth: 1,
        borderColor: backgroundColor,
        bg: backgroundColor,
        _text: {
            color: foregroundColor,
            fontWeight: '600',
        },
        _icon: {
            color: foregroundColor,
        },
        _dark: {
            bg: foregroundColor,
            _text: {
                color: backgroundColor,
            },
            _icon: {
                color: backgroundColor,
            },
            _loading: {
                color: backgroundColor,
            },
        },
        _stack: {
            space: '1.5',
            alignItems: 'center',
        },
        _loading: {
            opacity: Tokens.opacityLevel7,
        },
        _disabled: {
            opacity: Tokens.opacityLevel5,
        },
        _spinner: {
            size: 'sm',
            focusable: false,
        },
        _pressed: {
            bg: 'brand.100',
        },
    };
};
function variantGhost(props) {
    return __assign(__assign({}, variantOutline(props)), { borderWidth: 1, borderColor: 'transparent' });
}
function variantOutline(_a) {
    var colorScheme = _a.colorScheme;
    var inverted = colorScheme === 'neutral.white';
    var backgroundColor = inverted ? 'transparent' : 'neutral.white';
    var foregroundColor = inverted ? 'neutral.white' : 'brand.pure';
    var pressedForegroundColor = inverted ? 'neutral.white' : 'brand.pure';
    var pressedBackgroundColor = inverted ? 'brand.300' : 'brand.100';
    return {
        bg: backgroundColor,
        borderWidth: 1,
        borderColor: foregroundColor,
        _text: {
            color: foregroundColor,
        },
        _icon: {
            color: foregroundColor,
        },
        _spinner: {
            color: foregroundColor,
        },
        _pressed: {
            bg: pressedBackgroundColor,
            borderColor: pressedBackgroundColor,
            _text: {
                color: pressedForegroundColor,
            },
            _icon: {
                color: pressedForegroundColor,
            },
        },
        _dark: {
            borderColor: foregroundColor,
            bg: foregroundColor,
            _text: {
                color: backgroundColor,
            },
            _icon: {
                color: backgroundColor,
            },
            _spinner: {
                color: backgroundColor,
            },
            _pressed: {
                bg: pressedForegroundColor,
                borderColor: pressedForegroundColor,
                _text: {
                    color: pressedBackgroundColor,
                },
                _icon: {
                    color: pressedBackgroundColor,
                },
            },
        },
    };
}
function variantSolid(_a) {
    var colorScheme = _a.colorScheme;
    var inverted = colorScheme === 'neutral.white';
    var foregroundColor = inverted ? 'brand.pure' : 'neutral.white';
    var backgroundColor = inverted ? 'neutral.white' : 'brand.pure';
    var pressedForegroundColor = inverted ? 'neutral.white' : 'brand.pure';
    var pressedBackgroundColor = inverted ? 'brand.300' : 'brand.100';
    return {
        bg: backgroundColor,
        rounded: 'md',
        borderWidth: 1,
        borderColor: backgroundColor,
        paddingVertical: 10,
        _text: {
            color: foregroundColor,
        },
        _icon: {
            color: foregroundColor,
        },
        _spinner: {
            color: foregroundColor,
        },
        _hover: {
            color: foregroundColor,
        },
        _pressed: {
            bg: pressedBackgroundColor,
            borderColor: pressedBackgroundColor,
            _text: {
                color: pressedForegroundColor,
            },
            _icon: {
                color: pressedForegroundColor,
            },
        },
        _dark: {
            bg: foregroundColor,
            _hover: {
                bg: foregroundColor,
            },
            _text: {
                color: backgroundColor,
            },
            _icon: {
                color: backgroundColor,
            },
            _spinner: {
                color: foregroundColor,
            },
            _pressed: {
                bg: pressedForegroundColor,
                borderColor: pressedForegroundColor,
                _text: {
                    color: pressedBackgroundColor,
                },
                _icon: {
                    color: pressedBackgroundColor,
                },
            },
        },
    };
}
var variants = {
    ghost: variantGhost,
    outline: variantOutline,
    solid: variantSolid,
    unstyled: {},
};
var sizes = {
    lg: {
        px: '3',
        py: '1.5',
        height: Tokens.spacingSizeMd / 4,
        _text: {
            fontSize: 'md',
        },
        _icon: {
            size: 'md',
        },
    },
    md: {
        px: '3',
        py: '1',
        height: Tokens.spacingSizeSm / 4,
        _text: {
            fontSize: 'sm',
        },
        _icon: {
            size: 'sm',
        },
    },
    sm: {
        px: '3',
        py: '1',
        height: Tokens.spacingSizeXs / 4,
        _text: {
            fontSize: 'xs',
        },
        _icon: {
            size: 'sm',
        },
    },
};
var defaultProps = {
    variant: 'solid',
    size: 'md',
    colorScheme: 'brand.pure',
};
export var ButtonGroup = {
    baseStyle: { direction: 'row' },
    defaultProps: { space: 2 },
};
export default {
    baseStyle: baseStyle,
    variants: variants,
    sizes: sizes,
    defaultProps: defaultProps,
};
