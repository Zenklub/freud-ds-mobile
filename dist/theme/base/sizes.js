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
import { spacing } from './space';
var container = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
};
var sizes = __assign(__assign(__assign({}, spacing), {
    '3xs': 224,
    '2xs': 256,
    xs: 320,
    sm: 384,
    md: 448,
    lg: 512,
    xl: 576,
    '2xl': 672,
}), { container: container });
export default sizes;
