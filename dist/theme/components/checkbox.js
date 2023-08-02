var baseStyle = function (props) {
    var c = props.colorScheme, theme = props.theme;
    var colors = theme.colors;
    return {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 'sm',
        opacity: 1,
        p: 0.5,
        bg: 'muted.50',
        borderColor: 'muted.400',
        _text: {
            color: 'darkText',
            ml: 2,
        },
        _icon: {
            color: "muted.50",
        },
        _checked: {
            borderColor: "".concat(c, ".600"),
            bg: "".concat(c, ".600"),
            _hover: {
                borderColor: "".concat(c, ".700"),
                bg: "".concat(c, ".700"),
                _disabled: {
                    borderColor: "".concat(c, ".600"),
                    bg: "".concat(c, ".600"),
                },
            },
            _pressed: {
                borderColor: "".concat(c, ".800"),
                bg: "".concat(c, ".800"),
            },
        },
        _hover: {
            borderColor: 'muted.500',
            _disabled: {
                borderColor: 'muted.400',
            },
        },
        _pressed: {
            borderColor: 'muted.600',
        },
        _invalid: {
            borderColor: 'error.600',
        },
        _dark: {
            bg: 'muted.900',
            borderColor: 'muted.500',
            _text: {
                color: 'lightText',
            },
            _icon: {
                color: "muted.900",
            },
            _checked: {
                borderColor: "".concat(c, ".500"),
                bg: "".concat(c, ".500"),
                _hover: {
                    borderColor: "".concat(c, ".400"),
                    bg: "".concat(c, ".400"),
                    _disabled: {
                        borderColor: "".concat(c, ".500"),
                        bg: "".concat(c, ".500"),
                    },
                },
                _pressed: {
                    borderColor: "".concat(c, ".300"),
                    bg: "".concat(c, ".300"),
                },
            },
            _hover: {
                borderColor: 'muted.400',
                _disabled: {
                    borderColor: 'muted.500',
                },
            },
            _pressed: {
                borderColor: 'muted.300',
            },
            _invalid: {
                borderColor: 'error.500',
            },
        },
        _stack: {
            direction: 'row',
            alignItems: 'center',
            space: 2,
            _web: {
                cursor: props.isDisabled ? 'not-allowed' : 'pointer',
            },
        },
        _focusVisible: {
            _web: {
                style: {
                    outlineWidth: '2px',
                    outlineColor: colors[c][400],
                    outlineStyle: 'solid',
                },
            },
        },
        _disabled: {
            _web: {
                cursor: 'not-allowed',
            },
            opacity: 0.4,
        },
    };
};
var sizes = {
    lg: { _icon: { size: 5 }, _text: { fontSize: 'xl' } },
    md: { _icon: { size: 4 }, _text: { fontSize: 'lg' } },
    sm: { _icon: { size: 3 }, _text: { fontSize: 'md' } },
};
var defaultProps = {
    defaultIsChecked: false,
    size: 'sm',
    colorScheme: 'primary',
};
export default {
    baseStyle: baseStyle,
    sizes: sizes,
    defaultProps: defaultProps,
};
