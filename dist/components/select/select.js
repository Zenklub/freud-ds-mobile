var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useCallback, useEffect, useMemo, useRef, useState, } from 'react';
import { Button, InputAccessoryView, Keyboard, StyleSheet, TextInput, View, } from 'react-native';
import { Text } from '../typography';
import { Icon } from '../icon';
import { FreudDSIOSPickerView } from './ios-picker-view';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useIsIOS } from '../../helpers/use-is-ios.hook';
import { Picker } from '@react-native-picker/picker';
import { useSelectStyle } from './use-select-style.hook';
export var Select = function (_a) {
    var testID = _a.testID, placeholder = _a.placeholder, _b = _a.inverted, inverted = _b === void 0 ? false : _b, selected = _a.selected, _c = _a.isFocused, isFocused = _c === void 0 ? false : _c, options = _a.options, label = _a.label, error = _a.error, helperText = _a.helperText, _d = _a.disabled, disabled = _d === void 0 ? false : _d, inputNativeID = _a.nativeID, onClose = _a.onClose, onOpen = _a.onOpen, onCancel = _a.onCancel, onDone = _a.onDone, onSelectedValueChange = _a.onSelectedValueChange, _e = _a.displayAccessories, displayAccessories = _e === void 0 ? true : _e, accessoryViewID = _a.accessoryViewID, _f = _a.cancelText, cancelText = _f === void 0 ? 'Cancel' : _f, _g = _a.doneText, doneText = _g === void 0 ? 'Done' : _g, _h = _a.cancelAccessibilityLabel, cancelAccessibilityLabel = _h === void 0 ? 'Cancel' : _h, _j = _a.doneAccessibilityLabel, doneAccessibilityLabel = _j === void 0 ? 'Done' : _j, _k = _a.hideCancelButton, hideCancelButton = _k === void 0 ? false : _k, _l = _a.hideDoneButton, hideDoneButton = _l === void 0 ? false : _l;
    var isIOS = useIsIOS();
    var _m = useState(false), isOpen = _m[0], setIsOpen = _m[1];
    var _o = useState(), previousSelected = _o[0], setPreviousSelected = _o[1];
    var selectedItem = useMemo(function () {
        return options === null || options === void 0 ? void 0 : options.find(function (option) { return option.value === selected; });
    }, [options, selected]);
    var inputAccessoryViewID = useMemo(function () {
        return accessoryViewID !== null && accessoryViewID !== void 0 ? accessoryViewID : "".concat(inputNativeID, "-accessory");
    }, [accessoryViewID, inputNativeID]);
    var _p = useSelectStyle(disabled, inverted), backgroundColor = _p.backgroundColor, normalBorderColor = _p.normalBorderColor, focusedBorderColor = _p.focusedBorderColor, errorBorderColor = _p.errorBorderColor, placeholderTextColor = _p.placeholderTextColor, helperTextColor = _p.helperTextColor, errorTextColor = _p.errorTextColor, selectedItemTextColor = _p.selectedItemTextColor, labelColor = _p.labelColor, iconColor = _p.iconColor, inputHeight = _p.inputHeight, paddingHorizontal = _p.paddingHorizontal, inputAccessoryPaddingHorizontal = _p.inputAccessoryPaddingHorizontal, borderRadius = _p.borderRadius, opacity = _p.opacity;
    console.log('inputHeight', inputHeight);
    console.log('borderRadius', borderRadius);
    console.log('opacity', opacity);
    var inputRef = useRef(null);
    var borderColor = useMemo(function () {
        if (error) {
            return errorBorderColor;
        }
        else if (isFocused) {
            return focusedBorderColor;
        }
        else {
            return normalBorderColor;
        }
    }, [inverted, focusedBorderColor, errorBorderColor, isFocused]);
    var selectedLabel = useMemo(function () {
        if (!selected)
            return;
        var option = options.find(function (option) { return option.value === selected; });
        return option === null || option === void 0 ? void 0 : option.label;
    }, [selected, options]);
    var onChevronPress = function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var onCancelHandler = function () {
        onCancel === null || onCancel === void 0 ? void 0 : onCancel();
        onSelectedValueChange === null || onSelectedValueChange === void 0 ? void 0 : onSelectedValueChange(previousSelected);
        Keyboard.dismiss();
    };
    var onDoneHandler = function () {
        onDone === null || onDone === void 0 ? void 0 : onDone();
        Keyboard.dismiss();
    };
    var onFocusHandler = useCallback(function () {
        setPreviousSelected(selected);
        setIsOpen(true);
    }, [selected]);
    var onBlurHandler = useCallback(function () {
        setIsOpen(false);
    }, []);
    var onValueChangeAndroidHandler = useCallback(function (value) {
        onSelectedValueChange === null || onSelectedValueChange === void 0 ? void 0 : onSelectedValueChange(value);
    }, [onSelectedValueChange]);
    useEffect(function () {
        if (isOpen) {
            onOpen === null || onOpen === void 0 ? void 0 : onOpen();
        }
        else {
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }
    }, [isOpen, onClose, onOpen]);
    return (<View testID={testID} style={[
            styles.container,
            {
                opacity: opacity,
            },
        ]}>
			{label ? (<Text testID={"".concat(testID, "-label")} color={labelColor} fontWeight={600} fontSize="md">
					{label}
				</Text>) : null}
			<View testID={"".concat(testID, "-text-container")} style={[
            styles.selectContainer,
            {
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                height: inputHeight,
                borderRadius: borderRadius,
                paddingHorizontal: paddingHorizontal,
            },
        ]}>
				<Text testID={"".concat(testID, "-text")} style={styles.selectValue} bold={!!selectedLabel && !!isFocused && !disabled} color={!!selectedLabel ? selectedItemTextColor : placeholderTextColor} fontSize="md">
					{selectedLabel !== null && selectedLabel !== void 0 ? selectedLabel : placeholder}
				</Text>
				<TouchableWithoutFeedback style={styles.iconContainer} onPress={onChevronPress}>
					<Icon name="chevron-down" size="md" color={iconColor}/>
				</TouchableWithoutFeedback>

				<View style={styles.nativePickerContainer} pointerEvents={disabled ? 'none' : undefined}>
					{isIOS ? (<>
							<TextInput ref={inputRef} nativeID={inputNativeID} style={styles.input} underlineColorAndroid="transparent" editable={!disabled} selectTextOnFocus={!disabled} placeholder={placeholder} value={selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.label} onFocus={onFocusHandler} onBlur={onBlurHandler} inputAccessoryViewID={inputAccessoryViewID} contextMenuHidden caretHidden/>

							<FreudDSIOSPickerView options={options} selected={selected} onSelectedValueChange={onSelectedValueChange} inputNativeID={inputNativeID}/>
						</>) : (<Picker onValueChange={onValueChangeAndroidHandler} selectedValue={selected}>
							{options.map(function (option) { return (<Picker.Item key={option.value} label={option.label} value={option.value}/>); })}
						</Picker>)}
				</View>
			</View>

			{error || helperText ? (<Text testID={"".concat(testID, "-").concat(!!helperText ? 'helper-text' : 'error')} color={!!error ? errorTextColor : helperTextColor} fontWeight={400} fontSize="md" bold={!!selectedLabel && isFocused && !disabled}>
					{error !== null && error !== void 0 ? error : helperText}
				</Text>) : null}
			{displayAccessories && isIOS ? (<InputAccessoryView nativeID={inputAccessoryViewID}>
					<View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                display: 'flex',
                paddingHorizontal: inputAccessoryPaddingHorizontal,
            }}>
						<View>
							{hideCancelButton ? null : (<Button testID={"".concat(testID, "-cancel-button")} onPress={onCancelHandler} title={cancelText} accessibilityLabel={cancelAccessibilityLabel}/>)}
						</View>
						<View>
							{hideDoneButton ? null : (<Button testID={"".concat(testID, "-done-button")} onPress={onDoneHandler} title={doneText} accessibilityLabel={doneAccessibilityLabel}/>)}
						</View>
					</View>
				</InputAccessoryView>) : null}
		</View>);
};
var styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    selectContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        width: '100%',
    },
    selectValue: {
        flex: 1,
    },
    input: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    iconContainer: {
    // marginRight: -4,
    },
    nativePickerContainer: __assign(__assign({}, StyleSheet.absoluteFillObject), { position: 'absolute', marginTop: -7, opacity: 0 }),
});
