import { Platform } from 'react-native';
// @ts-ignore
import { mode } from 'native-base/lib/module/theme/tools';
function baseStyle(props) {
    return {
        bg: mode('muted.200', 'muted.700')(props),
        borderColor: mode('muted.300', 'muted.600')(props),
        borderWidth: 2,
        borderBottomWidth: 4,
        shadow: 1,
        borderRadius: 'md',
        px: 2,
        _text: {
            fontSize: 'sm',
            fontWeight: 'bold',
            fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
        },
    };
}
var defaultProps = {};
export default {
    baseStyle: baseStyle,
    defaultProps: defaultProps,
};
