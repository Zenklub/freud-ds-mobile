var baseStyle = function (props) {
    var primary = props.theme.colors.primary;
    return {
        _focusVisible: {
            _web: {
                style: {
                    outlineWidth: 0,
                    boxShadow: "".concat(primary[400], " 0px 0px 0px 2px"),
                },
            },
        },
        _dark: {
            _focusVisible: {
                _web: {
                    style: {
                        outlineWidth: 0,
                        boxShadow: "".concat(primary[500], " 0px 0px 0px 2px"),
                    },
                },
            },
        },
    };
};
export default {
    baseStyle: baseStyle,
    defaultProps: {},
};
