import React, { useCallback, useState } from 'react';
import { createContext, useContext } from 'react';
export var RadioGroupContext = createContext({});
export var RadioGroupContextProvider = function (_a) {
    var initialValue = _a.initialValue, onChange = _a.onChange, children = _a.children;
    var _b = useState(initialValue), currentValue = _b[0], setCurrentValue = _b[1];
    var setValue = useCallback(function (optionValue) {
        onChange === null || onChange === void 0 ? void 0 : onChange(optionValue);
        setCurrentValue(optionValue);
    }, []);
    return (<RadioGroupContext.Provider value={{ setValue: setValue, currentValue: currentValue }}>
			{children}
		</RadioGroupContext.Provider>);
};
export var useRadioContext = function () {
    var context = useContext(RadioGroupContext);
    if (!context) {
        throw new Error('useRadioContext must be used within a Radio.Group component');
    }
    return context;
};
