import React from 'react';
import { iconCharMap, iconSizeMap } from '../icon/constants';
import { Text } from 'react-native';
export var Icon = function (_a) {
    var testID = _a.testID, color = _a.color, name = _a.name, _b = _a.size, size = _b === void 0 ? 'md' : _b;
    var char = iconCharMap[name];
    var iconsSize = iconSizeMap[size];
    if (char) {
        return (<Text testID={testID} style={{
                fontFamily: 'freud-icon',
                fontSize: iconsSize,
                color: color,
            }}>
				{char}
			</Text>);
    }
    return null;
};
