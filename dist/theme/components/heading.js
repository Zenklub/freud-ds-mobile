var baseStyle = function () {
    return {
        color: 'neutral.black',
        _dark: {
            color: 'neutral.white',
        },
        fontWeight: 'bold',
        lineHeight: 'sm',
    };
};
var sizes = {
    '4xl': {
        fontSize: { base: '6xl', md: '7xl' },
        letterSpacing: 'xl',
    },
    '3xl': {
        fontSize: { base: '5xl', md: '6xl' },
        letterSpacing: 'xl',
    },
    '2xl': {
        fontSize: { base: '4xl', md: '5xl' },
    },
    xl: {
        fontSize: { base: '3xl', md: '4xl' },
    },
    lg: {
        fontSize: { base: '2xl', md: '3xl' },
    },
    md: { fontSize: 'xl' },
    sm: { fontSize: 'md' },
    xs: { fontSize: 'sm' },
};
var defaultProps = {
    size: 'lg',
};
export default {
    baseStyle: baseStyle,
    sizes: sizes,
    defaultProps: defaultProps,
};
