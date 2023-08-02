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
// @ts-ignore
import * as Tokens from '@freud-ds/tokens/style/react-native/variables';
import button from '../components/button';
var baseStyle = function (props) {
    return __assign(__assign({}, button.baseStyle(props)), { borderRadius: Tokens.borderRadiusSm, _disabled: {
            opacity: Tokens.opacityLevel5,
        } });
};
function variantGhost(props) {
    return __assign(__assign({}, button.variants.ghost(props)), { borderRadius: Tokens.borderRadiusSm, _disabled: {
            opacity: Tokens.opacityLevel5,
        } });
}
function variantOutline(props) {
    return __assign(__assign({}, button.variants.outline(props)), { borderRadius: Tokens.borderRadiusSm, _disabled: {
            opacity: Tokens.opacityLevel5,
        } });
}
function variantSolid(props) {
    return __assign(__assign({}, button.variants.solid(props)), { borderRadius: Tokens.borderRadiusSm, _disabled: {
            opacity: Tokens.opacityLevel5,
        } });
}
var variants = {
    ghost: variantGhost,
    outline: variantOutline,
    solid: variantSolid,
};
var sizes = {
    lg: {
        px: '2',
        py: '2',
        height: Tokens.spacingSizeMd / 4,
        width: Tokens.spacingSizeMd / 4,
    },
    md: {
        px: '2',
        py: '2',
        height: Tokens.spacingSizeSm / 4,
        width: Tokens.spacingSizeSm / 4,
    },
    sm: {
        px: '2',
        py: '2',
        height: Tokens.spacingSizeXs / 4,
        width: Tokens.spacingSizeXs / 4,
    },
    xs: {
        px: '1',
        py: '1',
        height: Tokens.spacingSizeXxs / 4,
        width: Tokens.spacingSizeXxs / 4,
    },
};
var defaultProps = {
    variant: 'solid',
    size: 'md',
    colorScheme: 'brand.pure',
};
export default {
    baseStyle: baseStyle,
    variants: variants,
    sizes: sizes,
    defaultProps: defaultProps,
};
