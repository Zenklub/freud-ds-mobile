var baseStyle = function () {
    return {
        color: 'neutral.black',
        _dark: {
            color: 'neutral.white',
        },
        fontWeight: '400',
        fontFamily: 'body',
        fontStyle: 'normal',
        fontSize: 'sm',
        letterSpacing: 'md',
        lineHeight: 'lg',
    };
};
var defaultProps = {};
export default { baseStyle: baseStyle, defaultProps: defaultProps };
