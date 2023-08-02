// @ts-ignore
import * as Tokens from '@freud-ds/tokens/style/react-native/variables';
var baseStyle = function (_props) {
    return {
        fontFamily: 'body',
        fontSize: 'md',
        py: '2',
        px: '3',
        borderRadius: 'md',
        overflow: 'hidden',
        h: '10',
        _disabled: {
            opacity: Tokens.opacityLevel5,
        },
        bg: 'neutral.white',
        _input: {
            flex: 1,
            bg: 'neutral.white',
            w: '100%',
            h: '100%',
            fontSize: 'md',
        },
        placeholderTextColor: 'neutral.dark.200',
        color: 'neutral.dark.400',
        borderColor: 'neutral.light.300',
        _stack: {
            bg: 'neutral.white',
            flexDirection: 'row',
            alignItems: 'center',
            overflow: 'hidden',
        },
        _invalid: {
            borderColor: 'feedback.negative.pure',
        },
        _focus: {
            borderColor: 'brand.pure',
            bg: 'neutral.white',
            _invalid: {
                borderColor: 'feedback.negative.pure',
            },
            _ios: {
                selectionColor: 'brand.pure',
            },
            _android: {
                selectionColor: 'brand.pure',
            },
            _disabled: {
                placeholderTextColor: 'neutral.dark.200',
                _hover: {
                    borderColor: 'brand.pure',
                },
            },
            _stack: {
                bg: 'neutral.white',
                borderColor: 'brand.pure',
            },
        },
        // _dark: {
        // 	placeholderTextColor: 'neutral.dark.200',
        // 	color: 'text.50',
        // 	borderColor: 'muted.700',
        // 	_hover: {
        // 		borderColor: 'primary.500',
        // 	},
        // 	_focus: {
        // 		borderColor: 'primary.500',
        // 		_hover: { borderColor: 'primary.500' },
        // 		_stack: {
        // 			style: {
        // 				outlineWidth: '0',
        // 				boxShadow: `0 0 0 1px ${primary[500]}`,
        // 			},
        // 		},
        // 	},
        // 	_invalid: {
        // 		borderColor: 'error.500',
        // 		_stack: {
        // 			style: {
        // 				outlineWidth: '0',
        // 				boxShadow: `0 0 0 1px ${error[500]}`,
        // 			},
        // 		},
        // 		_hover: { borderColor: 'error.500' },
        // 	},
        // 	_ios: {
        // 		selectionColor: 'warmGray.50',
        // 	},
        // 	_android: {
        // 		selectionColor: 'warmGray.50',
        // 	},
        // 	_disabled: {
        // 		placeholderTextColor: 'text.50',
        // 		_hover: {
        // 			borderColor: 'muted.700',
        // 		},
        // 	},
        // 	_stack: {
        // 		flexDirection: 'row',
        // 		alignItems: 'center',
        // 		// justifyContent: 'space-between',
        // 		overflow: 'hidden',
        // 	},
        // },
    };
};
function outlineStyle(_props) {
    return {
        borderWidth: '1',
        _focus: {
            bg: 'neutral.white',
        },
    };
}
var variants = {
    outline: outlineStyle,
};
var sizes = {
    '2xl': { fontSize: 'xl' },
    xl: { fontSize: 'lg' },
    lg: { fontSize: 'md' },
    md: { fontSize: 'sm' },
    sm: { fontSize: 'xs' },
    xs: { fontSize: '2xs' },
};
var defaultProps = {
    size: 'md',
    variant: 'outline',
};
// InputText
export var Input = {
    baseStyle: baseStyle,
    defaultProps: defaultProps,
    variants: variants,
    sizes: sizes,
};
export default {};
