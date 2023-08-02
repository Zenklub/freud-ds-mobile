import React from 'react';
import { Spinner as NBSpinner } from 'native-base';
import { iconSizesMap } from '../spinner/constants';
export var Spinner = function (_a) {
    var testID = _a.testID, _b = _a.size, size = _b === void 0 ? 'large' : _b, _c = _a.inverted, inverted = _c === void 0 ? false : _c;
    return (<NBSpinner testID={testID} size={iconSizesMap[size]} color={inverted ? 'neutral.white' : 'brand.pure'}/>);
};
