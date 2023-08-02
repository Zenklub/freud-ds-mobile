declare function variantGhost(props: any): any;
declare function variantOutline(props: any): any;
declare function variantSolid(props: any): any;
declare const _default: {
    baseStyle: (props: any) => {
        borderRadius: any;
        _disabled: {
            opacity: any;
        };
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
        _spinner: {
            size: string;
            focusable: boolean;
        };
        _pressed: {
            bg: string;
        };
    };
    variants: {
        ghost: typeof variantGhost;
        outline: typeof variantOutline;
        solid: typeof variantSolid;
    };
    sizes: {
        lg: {
            px: string;
            py: string;
            height: number;
            width: number;
        };
        md: {
            px: string;
            py: string;
            height: number;
            width: number;
        };
        sm: {
            px: string;
            py: string;
            height: number;
            width: number;
        };
        xs: {
            px: string;
            py: string;
            height: number;
            width: number;
        };
    };
    defaultProps: {
        variant: string;
        size: string;
        colorScheme: string;
    };
};
export default _default;
