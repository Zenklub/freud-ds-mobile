import { useMemo } from 'react';
import { useToken } from 'native-base';
// @ts-ignore
import { useIsPressed } from 'native-base/lib/module/components/primitives/Pressable/Pressable';
export var useIconColor = function (themeVariants, _a) {
    var icon = _a.icon, variant = _a.variant, inverted = _a.inverted;
    var _b = useIsPressed(), pressableProps = _b.pressableProps, isPressed = _b.isPressed;
    var iconColorKey = useMemo(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (!icon)
            return 'brand.pure';
        var _variant = variant || 'solid';
        var result = (_a = themeVariants[_variant]) === null || _a === void 0 ? void 0 : _a.call(themeVariants, {
            variant: _variant,
            inverted: inverted,
        });
        if (isPressed) {
            return inverted
                ? (_d = (_c = (_b = result._dark) === null || _b === void 0 ? void 0 : _b._pressed) === null || _c === void 0 ? void 0 : _c._icon) === null || _d === void 0 ? void 0 : _d.color
                : (_f = (_e = result._pressed) === null || _e === void 0 ? void 0 : _e._icon) === null || _f === void 0 ? void 0 : _f.color;
        }
        return inverted ? (_h = (_g = result._dark) === null || _g === void 0 ? void 0 : _g._icon) === null || _h === void 0 ? void 0 : _h.color : (_j = result._icon) === null || _j === void 0 ? void 0 : _j.color;
    }, [icon, inverted, isPressed, variant]);
    var iconColor = useToken('colors', [iconColorKey])[0];
    return [iconColor, pressableProps];
};
