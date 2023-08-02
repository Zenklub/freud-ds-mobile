import { getColor, getColorScheme, transparentize,
// @ts-ignore
 } from 'native-base/lib/module/theme/tools';
function getBg(props) {
    var theme = props.theme, c = props.colorScheme, status = props.status, variant = props.variant;
    var colorScheme = getColorScheme(props, !status ? c : status);
    var lightBg = variant === 'solid'
        ? getColor(theme, "".concat(colorScheme, ".700"), colorScheme)
        : getColor(theme, "".concat(colorScheme, ".200"), colorScheme);
    var darkBg = variant === 'solid'
        ? getColor(theme, "".concat(colorScheme, ".600"), colorScheme)
        : getColor(theme, "".concat(colorScheme, ".200"), colorScheme);
    return { lightBg: lightBg, darkBg: darkBg };
}
var variantSubtle = function (props) {
    var colorScheme = props.colorScheme, status = props.status;
    var _a = getBg(props), lightBg = _a.lightBg, darkBg = _a.darkBg;
    colorScheme = getColorScheme(props, !status ? colorScheme : status);
    return {
        bg: lightBg,
        _icon: { color: "".concat(colorScheme, ".700") },
        _dark: {
            bg: darkBg,
            _icon: { color: "".concat(colorScheme, ".600") },
        },
    };
};
var variantOutline = function (props) {
    var colorScheme = props.colorScheme, status = props.status;
    colorScheme = getColorScheme(props, !status ? colorScheme : status);
    return {
        borderWidth: 1,
        _icon: { color: "".concat(colorScheme, ".700") },
        borderColor: "".concat(colorScheme, ".700"),
        _dark: {
            _icon: { color: "".concat(colorScheme, ".600") },
            borderColor: "".concat(colorScheme, ".600"),
        },
    };
};
var variantOutlineLight = function (props) {
    var colorScheme = props.colorScheme, status = props.status, theme = props.theme;
    colorScheme = getColorScheme(props, !status ? colorScheme : status);
    return {
        borderWidth: 1,
        _icon: { color: "".concat(colorScheme, ".700") },
        borderColor: transparentize("".concat(colorScheme, ".700"), 0.4)(theme),
        _dark: {
            _icon: { color: "".concat(colorScheme, ".600") },
            borderColor: transparentize("".concat(colorScheme, ".600"), 0.4)(theme),
        },
    };
};
var variantSolid = function (props) {
    var _a = getBg(props), lightBg = _a.lightBg, darkBg = _a.darkBg;
    return {
        bg: lightBg,
        _dark: {
            bg: darkBg,
        },
        _icon: { color: "muted.50" },
    };
};
var variantLeftAccent = function (props) {
    var colorScheme = props.colorScheme, status = props.status;
    var _a = getBg(props), lightBg = _a.lightBg, darkBg = _a.darkBg;
    colorScheme = getColorScheme(props, !status ? colorScheme : status);
    return {
        borderLeftWidth: 4,
        bg: lightBg,
        _icon: { color: "".concat(colorScheme, ".700") },
        borderLeftColor: "".concat(colorScheme, ".700"),
        _dark: {
            bg: darkBg,
            _icon: { color: "".concat(colorScheme, ".600") },
            borderLeftColor: "".concat(colorScheme, ".600"),
        },
    };
};
var variantTopAccent = function (props) {
    var colorScheme = props.colorScheme, status = props.status;
    var _a = getBg(props), lightBg = _a.lightBg, darkBg = _a.darkBg;
    colorScheme = getColorScheme(props, !status ? colorScheme : status);
    return {
        borderTopWidth: 4,
        bg: lightBg,
        _icon: { color: "".concat(colorScheme, ".700") },
        borderTopColor: "".concat(colorScheme, ".700"),
        _dark: {
            bg: darkBg,
            _icon: { color: "".concat(colorScheme, ".600") },
            borderTopColor: "".concat(colorScheme, ".600"),
        },
    };
};
var variants = {
    subtle: variantSubtle,
    solid: variantSolid,
    'left-accent': variantLeftAccent,
    'top-accent': variantTopAccent,
    outline: variantOutline,
    'outline-light': variantOutlineLight,
};
export var Alert = {
    baseStyle: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        p: 3,
        space: 3,
        borderRadius: 'sm',
    },
    variants: variants,
    defaultProps: {
        colorScheme: 'info',
        variant: 'subtle',
    },
};
// AlertIcon
export var AlertIcon = {
    baseStyle: {
        size: 4,
    },
};
