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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { composeEventHandlers, IconButton as NRIconButton } from 'native-base';
import { Icon } from '../icon/icon';
import { useIconColor } from '../../helpers/icons-color.hook';
import iconButtonTheme from '../../theme/components/icon-button';
export var IconButton = function (_a) {
    var _b = _a.inverted, inverted = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? 'solid' : _c, icon = _a.icon, testID = _a.testID, _d = _a.size, size = _d === void 0 ? 'md' : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, onPressIn = _a.onPressIn, onPressOut = _a.onPressOut, props = __rest(_a, ["inverted", "variant", "icon", "testID", "size", "disabled", "onPressIn", "onPressOut"]);
    var _f = useIconColor(iconButtonTheme.variants, __assign({ icon: icon, variant: variant, inverted: inverted }, props)), iconColor = _f[0], pressableProps = _f[1];
    return (<NRIconButton testID={testID} variant={variant} size={size} colorScheme={inverted ? 'neutral.white' : 'brand.pure'} isDisabled={disabled} onPressIn={composeEventHandlers(onPressIn, pressableProps.onPressIn)} onPressOut={composeEventHandlers(onPressOut, pressableProps.onPressOut)} icon={<Icon name={icon} size={size} color={iconColor !== null && iconColor !== void 0 ? iconColor : 'white'} testID={"".concat(testID, "-icon")}/>}/>);
};
