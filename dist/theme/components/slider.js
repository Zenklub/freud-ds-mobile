export var SliderTrack = {
    baseStyle: function (_a) {
        var isVertical = _a.isVertical, size = _a.size;
        return {
            bg: 'muted.200',
            borderRadius: 'lg',
            overflow: 'hidden',
            style: {
                height: isVertical ? '100%' : size,
                width: !isVertical ? '100%' : size,
            },
            _pressable: {
                alignItems: 'center',
                justifyContent: 'center',
                height: isVertical ? '100%' : size,
                width: !isVertical ? '100%' : size,
                py: !isVertical ? '3' : undefined,
                px: isVertical ? '3' : undefined,
            },
            _dark: {
                bg: 'muted.700',
            },
        };
    },
};
export var SliderThumb = {
    baseStyle: function (props) {
        var colorScheme = props.colorScheme;
        var primary = props.theme.colors.primary;
        return {
            borderRadius: 'full',
            zIndex: 999,
            alignItems: 'center',
            justifyContent: 'center',
            scaleOnPressed: 1,
            _interactionBox: {
                position: 'absolute',
                borderRadius: 'full',
                zIndex: -1,
            },
            _stack: {
                direction: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                space: 2,
            },
            bg: "".concat(colorScheme, ".600"),
            _hover: {
                _web: {
                    outlineWidth: '4px',
                    outlineColor: primary[300],
                    outlineStyle: 'solid',
                },
            },
            _focus: {
                _web: {
                    outlineWidth: '2px',
                    outlineColor: primary[400],
                    outlineStyle: 'solid',
                },
            },
            _pressed: {
                _interactionBox: {
                    borderWidth: '8',
                    borderColor: "".concat(colorScheme, ".300"),
                },
            },
            _dark: {
                bg: "".concat(colorScheme, ".500"),
                _hover: {
                    _web: {
                        outlineWidth: '4px',
                        outlineColor: primary[800],
                        outlineStyle: 'solid',
                    },
                },
                _focus: {
                    _web: {
                        outlineWidth: '2px',
                        outlineColor: primary[400],
                        outlineStyle: 'solid',
                    },
                },
                _pressed: {
                    _interactionBox: {
                        borderWidth: '8',
                        borderColor: "".concat(colorScheme, ".800"),
                    },
                },
            },
            // shadow: 6,
            _web: {
                cursor: 'pointer',
            },
        };
    },
    defaultProps: {
        colorScheme: 'primary',
    },
    sizes: {
        lg: {
            _interactionBox: '3',
        },
        md: {
            _interactionBox: '2',
        },
        sm: {
            _interactionBox: '2.5',
        },
    },
};
export var SliderFilledTrack = {
    baseStyle: function (_a) {
        var orientation = _a.orientation, isReversed = _a.isReversed, sliderTrackPosition = _a.sliderTrackPosition, size = _a.size, colorScheme = _a.colorScheme;
        return {
            left: orientation !== 'vertical' && !isReversed ? 0 : undefined,
            bottom: orientation === 'vertical' && !isReversed ? 0 : undefined,
            right: orientation !== 'vertical' && isReversed ? 0 : undefined,
            top: orientation === 'vertical' && isReversed ? 0 : undefined,
            style: orientation === 'vertical'
                ? { height: sliderTrackPosition, width: size }
                : { width: sliderTrackPosition, height: size },
            bg: "".concat(colorScheme, ".600"),
            _dark: {
                bg: "".concat(colorScheme, ".500"),
            },
        };
    },
    defaultProps: {
        colorScheme: 'primary',
    },
};
var sizes = {
    lg: { thumbSize: 6, sliderTrackHeight: 6, _interactionBox: { p: '3' } },
    md: { thumbSize: 5, sliderTrackHeight: 5, _interactionBox: { p: '2.5' } },
    sm: { thumbSize: 4, sliderTrackHeight: 4, _interactionBox: { p: '2' } },
};
export var Slider = {
    baseStyle: function (props) {
        return {
            alignItems: 'center',
            justifyContent: 'center',
            height: props.orientation === 'vertical' ? '100%' : undefined,
            width: props.orientation !== 'vertical' ? '100%' : undefined,
            _disabled: {
                opacity: 0.4,
                _web: {
                    cursor: 'not-allowed',
                },
            },
        };
    },
    defaultProps: {
        size: 'sm',
    },
    sizes: sizes,
};
