import React, { useMemo } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { RadioGroupContextProvider, useRadioContext } from './radio-context';
import { Text } from '../typography/text';
import { useToken } from 'native-base';
export var Radio = function (_a) {
    var value = _a.value, isFocused = _a.isFocused, disabled = _a.disabled, inverted = _a.inverted, children = _a.children;
    var _b = useToken('colors', ['neutral.white', 'neutral.light.400', 'brand.pure']), neutralWhiteColor = _b[0], neutralLight400Color = _b[1], brandPureColor = _b[2];
    var _c = useRadioContext(), setValue = _c.setValue, currentValue = _c.currentValue;
    var isChecked = useMemo(function () {
        return currentValue === value;
    }, [currentValue, value]);
    var onPressHandler = function () {
        if (disabled)
            return;
        setValue(value);
    };
    return (<TouchableWithoutFeedback onPress={onPressHandler}>
			<View style={[styles.container, disabled ? styles.disabled : undefined]}>
				<View style={[
            styles.focusContainer,
            {
                borderColor: isFocused && !disabled ? brandPureColor : 'transparent',
            },
        ]}>
					<View style={[
            styles.radio,
            {
                backgroundColor: neutralWhiteColor,
                borderColor: isChecked ? brandPureColor : neutralLight400Color,
                borderWidth: isChecked ? 5 : 2,
            },
        ]}/>
				</View>
				<Text inverted={inverted}>{children}</Text>
			</View>
		</TouchableWithoutFeedback>);
};
var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    disabled: {
        opacity: 0.4,
    },
    radio: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderRadius: 10,
    },
    focusContainer: {
        borderWidth: 2,
        borderRadius: 12,
        borderColor: 'transparent',
        marginRight: 10,
    },
});
export var RadioGroup = function (_a) {
    var children = _a.children, onChange = _a.onChange, initialValue = _a.initialValue;
    return (<RadioGroupContextProvider onChange={onChange} initialValue={initialValue}>
			{children}
		</RadioGroupContextProvider>);
};
Radio.Group = RadioGroup;
Radio.displayName = 'Radio';
Radio.Group.displayName = 'RadioGroup';
