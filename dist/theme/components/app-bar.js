// @ts-ignore
import { getColorScheme, mode } from 'native-base/lib/module/theme/tools';
var baseStyle = function (props) {
    var colorScheme = getColorScheme(props);
    return {
        bg: mode("".concat(colorScheme, ".500"), "".concat(colorScheme, ".300"))(props),
        px: 2,
    };
};
var defaultProps = {
    colorScheme: 'primary',
};
export default {
    baseStyle: baseStyle,
    defaultProps: defaultProps,
};
