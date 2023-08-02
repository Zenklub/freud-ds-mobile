var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function baseStyle(props) {
    var orientation = props.orientation, thickness = props.thickness;
    var orientationProps = orientation === 'vertical'
        ? {
            width: "".concat(thickness, "px"),
            height: '100%',
        }
        : {
            width: '100%',
            height: "".concat(thickness, "px"),
        };
    return __assign({ bg: 'muted.300', _dark: {
            bg: 'muted.600',
        } }, orientationProps);
}
export default {
    baseStyle: baseStyle,
    defaultProps: {
        orientation: 'horizontal',
        thickness: '1',
    },
};
