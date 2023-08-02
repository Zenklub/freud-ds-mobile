var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useMemo } from 'react';
import { Input as NRInput, Pressable, useThemeProps } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { FormControl } from '../form-control/form-control';
import { Icon } from '../icon/icon';
import Colors from '../../theme/base/colors';
var styles = StyleSheet.create({
    iconContainer: {
        paddingRight: 8,
    },
});
var iconHitSlop = {
    top: 8,
    bottom: 8,
    left: 8,
    right: 0,
};
export var InputText = function (_a) {
    var label = _a.label, helperText = _a.helperText, _b = _a.inverted, inverted = _b === void 0 ? false : _b, error = _a.error, _c = _a.disabled, disabled = _c === void 0 ? false : _c, iconName = _a.iconName, onChangeText = _a.onChangeText, onIconPress = _a.onIconPress, testID = _a.testID, value = _a.value, props = __rest(_a, ["label", "helperText", "inverted", "error", "disabled", "iconName", "onChangeText", "onIconPress", "testID", "value"]);
    var colorScheme = inverted ? 'neutral.white' : 'brand.pure';
    useThemeProps('InputText', {
        variant: 'outline',
        colorScheme: colorScheme,
        isDisabled: disabled,
        isInvalid: !!error,
    });
    var icon = useMemo(function () {
        if (iconName) {
            var iconComponent = (<Icon testID={"".concat(testID, "-icon")} name={iconName} size="md" color={Colors.neutral.dark[100]}/>);
            if (!onIconPress) {
                return (<View testID={"".concat(testID, "-icon-container")} style={styles.iconContainer}>
						{iconComponent}
					</View>);
            }
            return (<Pressable testID={"".concat(testID, "-icon-container")} style={styles.iconContainer} onPress={onIconPress} hitSlop={iconHitSlop}>
					{iconComponent}
				</Pressable>);
        }
        return undefined;
    }, [iconName, onIconPress]);
    return (<View>
			{label ? (<FormControl.Label testID={"".concat(testID, "-label")} inverted={inverted} isDisabled={disabled}>
					{label}
				</FormControl.Label>) : null}
			<NRInput testID={testID} isInvalid={!!error} isDisabled={disabled} variant="outline" colorScheme={colorScheme} InputRightElement={icon} value={value} {...props}/>
			{(error !== null && error !== void 0 ? error : helperText) ? (<FormControl.HelperText testID={"".concat(testID, "-helper-text")} inverted={inverted} isDisabled={disabled}>
					{error !== null && error !== void 0 ? error : helperText}
				</FormControl.HelperText>) : null}
		</View>);
};
