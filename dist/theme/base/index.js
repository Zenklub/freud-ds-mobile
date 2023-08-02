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
import borderWidths from './borders';
import breakpoints from './breakpoints';
import colors from './colors';
import radii from './radius';
import shadows from './shadows';
import sizes from './sizes';
import { spacing } from './space';
import typography from './typography';
import opacity from './opacity';
var theme = __assign(__assign({ borderWidths: borderWidths, breakpoints: breakpoints, colors: colors, radii: radii }, typography), { sizes: sizes, space: spacing, shadows: shadows, opacity: opacity });
export var themePropertyMap = {
    borderRadius: 'radii',
    color: 'colors',
    letterSpacing: 'letterSpacings',
    lineHeight: 'lineHeights',
    fontFamily: 'fonts',
    fontSize: 'fontSizes',
    fontWeight: 'fontWeights',
    size: 'sizes',
    space: 'space',
    border: 'borders',
    shadow: 'shadows',
};
export default theme;
