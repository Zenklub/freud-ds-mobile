var baseStyle = function () {
    return {
        color: 'muted.500',
        _dark: {
            color: 'muted.400',
        },
    };
};
var sizes = {
    '2xs': 2,
    xs: 3,
    sm: 4,
    md: 5,
    lg: 6,
    xl: 7,
    '2xl': 8,
    '3xl': 9,
    '4xl': 10,
    '5xl': 12,
    '6xl': 16,
};
var defaultProps = { size: 'sm' };
export default { baseStyle: baseStyle, sizes: sizes, defaultProps: defaultProps };
