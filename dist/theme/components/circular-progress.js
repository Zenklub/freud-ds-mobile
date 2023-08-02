// @ts-ignore
import { getColorScheme, mode } from 'native-base/lib/module/theme/tools';
var sizes = {
    xs: {
        height: 6,
        width: 6,
    },
    sm: {
        height: 8,
        width: 8,
    },
    md: {
        height: 16,
        width: 16,
    },
    lg: {
        height: 20,
        width: 20,
    },
    xl: {
        height: 24,
        width: 24,
    },
    '2xl': {
        height: 32,
        width: 32,
    },
};
var defaultProps = {
    thickness: 8,
    colorScheme: 'primary',
    size: 'lg',
};
function baseStyle(props) {
    var colorScheme = getColorScheme(props);
    return {
        color: mode("".concat(colorScheme, ".600"), "".concat(colorScheme, ".500"))(props),
        trackColor: mode("".concat(colorScheme, ".200"), "".concat(colorScheme, ".800"))(props),
    };
}
export default { baseStyle: baseStyle, sizes: sizes, defaultProps: defaultProps };
