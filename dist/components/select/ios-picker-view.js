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
import React, { memo, useCallback } from 'react';
import { requireNativeComponent, Platform, } from 'react-native';
var RNFreudDSIOSPickerView = Platform.select({
    ios: requireNativeComponent('RNFreudDSPickerView'),
});
export var FreudDSIOSPickerView = memo(function (_a) {
    var onSelectedValueChange = _a.onSelectedValueChange, props = __rest(_a, ["onSelectedValueChange"]);
    var onValueChangeHandler = useCallback(function (event) {
        console.log('onValueChangeHandler', event.nativeEvent.value);
        onSelectedValueChange === null || onSelectedValueChange === void 0 ? void 0 : onSelectedValueChange(event.nativeEvent.value);
    }, [onSelectedValueChange]);
    return (<RNFreudDSIOSPickerView {...props} onValueChange={onValueChangeHandler}/>);
});
