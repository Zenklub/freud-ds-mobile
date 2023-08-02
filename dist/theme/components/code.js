import Badge from './badge';
import { Platform } from 'react-native';
var variants = Badge.variants, defaultProps = Badge.defaultProps;
var baseStyle = {
    _text: {
        fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
        fontSize: 'sm',
    },
    borderRadius: 'sm',
    px: 2,
    py: 1,
};
export default {
    baseStyle: baseStyle,
    variants: variants,
    defaultProps: defaultProps,
};
