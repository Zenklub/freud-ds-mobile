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
import { Heading as NBHeading } from 'native-base';
import HeadingTheme from '../../theme/components/heading';
export var Heading = function (_a) {
    var inverted = _a.inverted, props = __rest(_a, ["inverted"]);
    var color = useMemo(function () {
        if (props.color)
            return props.color;
        return inverted ? HeadingTheme.baseStyle()._dark.color : props.color;
    }, [props.color, inverted]);
    return <NBHeading {...props} color={color} fontFamily="heading"/>;
};
