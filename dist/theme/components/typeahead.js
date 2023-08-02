// @ts-ignore
import { mode } from 'native-base/lib/module/theme/tools';
var typeaheadSearchItemBaseStyle = function (props) {
    return {
        backgroundColor: mode('gray.100', 'gray.600')(props),
        _focus: {
            backgroundColor: mode('primary.300', 'primary.700')(props),
        },
        _disabled: {
            backgroundColor: 'gray.200',
        },
    };
};
export var TypeAheadSearchItem = {
    baseStyle: typeaheadSearchItemBaseStyle,
};
