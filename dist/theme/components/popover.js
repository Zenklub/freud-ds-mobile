export var Popover = {
    baseStyle: function () { return ({
        _overlay: {
            unmountOnExit: true,
        },
    }); },
};
export var PopoverCloseButton = {
    baseStyle: function () { return ({
        position: 'absolute',
        right: 3,
        top: 3,
        zIndex: 1,
        p: '2',
        bg: 'transparent',
        borderRadius: 'sm',
        _web: {
            outlineWidth: 0,
            cursor: 'pointer',
        },
        _icon: {
            size: '4',
        },
        _light: {
            _icon: {
                color: 'muted.500',
            },
            _hover: {
                bg: 'muted.200',
            },
            _pressed: {
                bg: 'muted.300',
            },
        },
        _dark: {
            _icon: {
                color: 'muted.400',
            },
            _hover: {
                bg: 'muted.700',
            },
            _pressed: {
                bg: 'muted.600',
            },
        },
    }); },
};
export var PopoverBody = {
    baseStyle: function () { return ({
        p: '3',
        shadow: '6',
        bg: 'muted.50',
        _text: {
            color: 'text.900',
        },
        _dark: {
            bg: 'muted.800',
            _text: {
                color: 'text.50',
            },
        },
    }); },
};
export var PopoverContent = {
    baseStyle: function () { return ({
        //TODO: Box inside PopperContent is not able to resolve shadow
        // shadow: '6',
        borderColor: 'muted.300',
        _text: {
            color: 'text.900',
        },
        _dark: {
            borderColor: 'muted.700',
            _text: {
                color: 'text.50',
            },
        },
        borderWidth: 1,
        rounded: 'md',
        overflow: 'hidden',
    }); },
};
export var PopoverHeader = {
    baseStyle: function () { return ({
        _web: {
            accessibilityRole: 'header',
        },
        p: '4',
        borderBottomWidth: '1',
        _text: {
            fontSize: 'md',
            fontWeight: '700',
            lineHeight: 'sm',
            color: 'text.900',
        },
        bg: 'muted.50',
        borderColor: 'muted.300',
        _dark: {
            bg: 'muted.800',
            borderColor: 'muted.700',
            _text: {
                color: 'text.50',
            },
        },
    }); },
};
export var PopoverArrow = {
    baseStyle: function () { return ({
        bg: 'muted.50',
        borderColor: 'muted.300',
        _dark: {
            bg: 'muted.800',
            borderColor: 'muted.700',
        },
    }); },
};
export var PopoverFooter = {
    baseStyle: function () {
        return {
            p: '4',
            shadow: '6',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
            borderTopWidth: 1,
            bg: 'muted.50',
            borderColor: 'muted.300',
            _dark: {
                bg: 'muted.800',
                borderColor: 'muted.700',
            },
        };
    },
};
