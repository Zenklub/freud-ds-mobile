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
var baseStyle = {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    spacing: '2',
};
var defaultProps = {
    direction: 'row',
    wrap: 'wrap',
};
export var Breadcrumb = {
    baseStyle: baseStyle,
    defaultProps: defaultProps,
};
export var BreadcrumbText = {
    baseStyle: __assign(__assign({}, baseStyle), { _current: { fontWeight: 'bold' } }),
    defaultProps: defaultProps,
};
export var BreadcrumbIcon = {
    baseStyle: __assign({}, baseStyle),
    defaultProps: defaultProps,
};
