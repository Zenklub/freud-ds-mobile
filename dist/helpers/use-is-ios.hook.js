import { useState, useEffect } from 'react';
import { Platform } from 'react-native';
export var useIsIOS = function () {
    var _a = useState(false), isIOS = _a[0], setIsIOS = _a[1];
    useEffect(function () {
        setIsIOS(Platform.OS === 'ios');
    }, []);
    return isIOS;
};
