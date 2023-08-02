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
import React, { useMemo } from 'react';
import { Button as NBButton, composeEventHandlers } from 'native-base';
import { Icon } from '../icon/icon';
import { useIconColor } from '../../helpers/icons-color.hook';
import buttonTheme from '../../theme/components/button';
export var Button = function (_a) {
    var testID = _a.testID, icon = _a.icon, inverted = _a.inverted, onPressIn = _a.onPressIn, onPressOut = _a.onPressOut, props = __rest(_a, ["testID", "icon", "inverted", "onPressIn", "onPressOut"]);
    var _b = useIconColor(buttonTheme.variants, __assign({ icon: icon, inverted: inverted }, props)), iconColor = _b[0], pressableProps = _b[1];
    var _isLoadingText = useMemo(function () {
        if (props.isLoading)
            return props.children;
        return undefined;
    }, [props.isLoading, props.children]);
    return (<NBButton testID={testID} size="md" onPressIn={composeEventHandlers(onPressIn, pressableProps.onPressIn)} onPressOut={composeEventHandlers(onPressOut, pressableProps.onPressOut)} colorScheme={inverted ? 'neutral.white' : 'brand.pure'} endIcon={icon ? (<Icon name={icon} size={props.size} color={iconColor !== null && iconColor !== void 0 ? iconColor : 'white'} testID={"".concat(testID, "-icon")}/>) : undefined} {...props} isDisabled={props.disabled || props.isLoading} isLoadingText={_isLoadingText} spinnerPlacement="end">
			{props.variant}
		</NBButton>);
};
