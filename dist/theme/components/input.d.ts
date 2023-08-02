import { InterfaceInputProps } from 'native-base/lib/typescript/components/primitives/Input/types';
export declare const Input: {
    baseStyle: (_props: InterfaceInputProps & {
        theme: any;
    }) => {
        fontFamily: string;
        fontSize: string;
        py: string;
        px: string;
        borderRadius: string;
        overflow: string;
        h: string;
        _disabled: {
            opacity: any;
        };
        bg: string;
        _input: {
            flex: number;
            bg: string;
            w: string;
            h: string;
            fontSize: string;
        };
        placeholderTextColor: string;
        color: string;
        borderColor: string;
        _stack: {
            bg: string;
            flexDirection: string;
            alignItems: string;
            overflow: string;
        };
        _invalid: {
            borderColor: string;
        };
        _focus: {
            borderColor: string;
            bg: string;
            _invalid: {
                borderColor: string;
            };
            _ios: {
                selectionColor: string;
            };
            _android: {
                selectionColor: string;
            };
            _disabled: {
                placeholderTextColor: string;
                _hover: {
                    borderColor: string;
                };
            };
            _stack: {
                bg: string;
                borderColor: string;
            };
        };
    };
    defaultProps: {
        size: string;
        variant: string;
    };
    variants: {
        outline: any;
    };
    sizes: {
        '2xl': {
            fontSize: string;
        };
        xl: {
            fontSize: string;
        };
        lg: {
            fontSize: string;
        };
        md: {
            fontSize: string;
        };
        sm: {
            fontSize: string;
        };
        xs: {
            fontSize: string;
        };
    };
};
declare const _default: {};
export default _default;
