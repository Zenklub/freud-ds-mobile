import { InterfaceButtonProps } from 'native-base/lib/typescript/components/primitives/Button/types';
export declare const ButtonGroup: {
    baseStyle: {
        direction: string;
    };
    defaultProps: {
        space: number;
    };
};
declare const _default: {
    baseStyle: ({ colorScheme }: InterfaceButtonProps & {
        theme: any;
    }) => {
        flexDirection: string;
        justifyContent: string;
        alignItems: string;
        paddingHorizontal: number;
        rounded: string;
        borderWidth: number;
        borderColor: string;
        bg: string;
        _text: {
            color: string;
            fontWeight: string;
        };
        _icon: {
            color: string;
        };
        _dark: {
            bg: string;
            _text: {
                color: string;
            };
            _icon: {
                color: string;
            };
            _loading: {
                color: string;
            };
        };
        _stack: {
            space: string;
            alignItems: string;
        };
        _loading: {
            opacity: any;
        };
        _disabled: {
            opacity: any;
        };
        _spinner: {
            size: string;
            focusable: boolean;
        };
        _pressed: {
            bg: string;
        };
    };
    variants: {
        ghost: any;
        outline: any;
        solid: any;
        unstyled: any;
    };
    sizes: {
        lg: {
            px: string;
            py: string;
            height: number;
            _text: {
                fontSize: string;
            };
            _icon: {
                size: string;
            };
        };
        md: {
            px: string;
            py: string;
            height: number;
            _text: {
                fontSize: string;
            };
            _icon: {
                size: string;
            };
        };
        sm: {
            px: string;
            py: string;
            height: number;
            _text: {
                fontSize: string;
            };
            _icon: {
                size: string;
            };
        };
    };
    defaultProps: {
        variant: string;
        size: string;
        colorScheme: string;
    };
};
export default _default;
