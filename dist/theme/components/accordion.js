// Accordion
// @ts-ignore
import { mode } from 'native-base/lib/module/theme/tools';
var accordionBaseStyle = function (props) {
    return {
        borderWidth: 1,
        borderColor: mode('gray.300', 'gray.600')(props),
        borderRadius: 'lg',
    };
};
export var Accordion = {
    baseStyle: accordionBaseStyle,
};
// AccordionItem
export var AccordionItem = {};
// AccordionIcon
export var AccordionIcon = {};
// AccordionSummary
var accordionSummaryBaseStyle = function (props) {
    return {
        borderTopWidth: 1,
        borderTopColor: mode('gray.300', 'gray.600')(props),
        p: 3,
        _hover: {
            bg: mode('primary.200', 'primary.300')(props),
        },
        _expanded: {
            bg: 'primary.600',
            borderBottomColor: mode('gray.300', 'gray.600')(props),
            _text: { color: 'white' },
        },
        _disabled: {
            bg: mode('gray.200', 'gray.700')(props),
        },
    };
};
export var AccordionSummary = {
    baseStyle: accordionSummaryBaseStyle,
};
// AccordionDetails
var accordionPanelBaseStyle = {
    p: 3,
};
export var AccordionDetails = {
    baseStyle: accordionPanelBaseStyle,
};
