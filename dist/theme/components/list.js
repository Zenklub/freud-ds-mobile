// @ts-ignore
import { mode } from 'native-base/lib/module/theme/tools';
// List
export var List = {
    baseStyle: function (props) {
        return {
            py: 2,
            borderWidth: 1,
            borderColor: 'gray.300',
            _hover: { bg: mode('primary.100', 'primary.700')(props) },
        };
    },
};
// ListItem
export var ListItem = {
    baseStyle: {
        // borderTopWidth: 1,
        py: 2,
        borderColor: 'gray.300',
    },
    defaultProps: {
        start: 1,
    },
};
// ListIcon
export var ListIcon = {
    baseStyle: {
        mr: 8,
        size: 'md',
    },
};
