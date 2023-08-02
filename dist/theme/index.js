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
import { extendTheme } from 'native-base';
import base from './base';
import components from './components';
var config = {
    useSystemColorMode: false,
    initialColorMode: 'light',
    accessibleColors: false,
};
export var theme = extendTheme(__assign(__assign({}, base), { components: components, config: config }));
