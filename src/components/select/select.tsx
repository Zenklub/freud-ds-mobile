import { InputWrapper } from '@components/input-wrapper/input-wrapper';
import { InputState } from '@theme/tokens/components/input-base-theme';
import React, {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import {
	Button,
	InputAccessoryView,
	Keyboard,
	Platform,
	StyleSheet,
	TextInput,
	View,
} from 'react-native';
import { SelectOption, SelectProps } from './select.types';

import { ConditionalTouchable } from '@components/touchable/conditional-touchable';
import { Text } from '@components/typography/text';
import { Picker } from '@react-native-picker/picker';
import { ColorsPathOrHardCoded } from '@theme';
import { FreudDSIOSPickerView } from './ios-picker-view';

const isIOS = Platform.OS === 'ios';

export const Select: React.FC<SelectProps> = (props) => {
	const {
		placeholder,
		testID,
		error,
		options,
		selected,
		accessoryViewID,
		onClose,
		onOpen,
		onCancel,
		onDone,
		onPress,
		onSelectedValueChange,
		nativeID: inputNativeID,
		inputStyle,
		cancelText = 'Cancel',
		doneText = 'Done',
		cancelAccessibilityLabel = 'Cancel',
		doneAccessibilityLabel = 'Done',
		hideCancelButton = false,
		hideDoneButton = false,
		customPicker = false,
		isFocused = false,
		disabled = false,
		displayAccessories = true,
	} = props;
	const value = '';
	const [focused, _setFocusedState] = useState(false);
	const state: InputState =
		disabled === true
			? 'disabled'
			: focused
			? 'focused'
			: error
			? 'error'
			: value
			? 'entered'
			: 'normal';

	const [isOpen, setIsOpen] = useState(false);

	const [previousSelected, setPreviousSelected] =
		useState<SelectOption['value']>();

	const selectedItem = useMemo(() => {
		return options.find((option) => option.value === selected);
	}, [options, selected]);

	const inputAccessoryViewID = useMemo(() => {
		return accessoryViewID ?? `${inputNativeID}-accessory`;
	}, [accessoryViewID, inputNativeID]);

	const inputRef = useRef<TextInput>(null);

	const selectedLabel = useMemo(() => {
		if (!selected) return;

		const option = options.find((option) => option.value === selected);

		return option?.label;
	}, [selected, options]);

	const onChevronPress = () => {
		inputRef.current?.focus();
	};

	const onCancelHandler = () => {
		onCancel?.();
		onSelectedValueChange?.(previousSelected);
		Keyboard.dismiss();
	};

	const onDoneHandler = () => {
		onDone?.();
		Keyboard.dismiss();
	};

	const onFocusHandler = useCallback(() => {
		setPreviousSelected(selected);
		setIsOpen(true);
	}, [selected]);

	const onBlurHandler = useCallback(() => {
		setIsOpen(false);
	}, []);

	const onValueChangeAndroidHandler = useCallback(
		(value: string) => {
			onSelectedValueChange?.(value);
		},
		[onSelectedValueChange]
	);

	const onPressHandler = useCallback(() => {
		const state = !isOpen;
		setIsOpen(state);

		onPress?.();

		if (state) {
			onOpen?.();
		} else {
			onClose?.();
		}
	}, [isOpen, onPress, onClose, onOpen]);

	const renderPicker = () => {
		if (customPicker) {
			return null;
		}

		if (isIOS) {
			return (
				<>
					<TextInput
						ref={inputRef}
						nativeID={inputNativeID}
						style={styles.input}
						underlineColorAndroid="transparent"
						editable={!disabled}
						selectTextOnFocus={!disabled}
						placeholder={placeholder}
						value={selectedItem?.label}
						onFocus={onFocusHandler}
						onBlur={onBlurHandler}
						inputAccessoryViewID={inputAccessoryViewID}
						contextMenuHidden
						caretHidden
					/>

					<FreudDSIOSPickerView
						options={options}
						selected={selected}
						onSelectedValueChange={onSelectedValueChange}
						inputNativeID={inputNativeID}
					/>
				</>
			);
		}

		return (
			<Picker
				onValueChange={onValueChangeAndroidHandler}
				selectedValue={selected}
			>
				{options.map((option) => (
					<Picker.Item
						key={option.value}
						label={option.label}
						value={option.value}
					/>
				))}
			</Picker>
		);
	};

	useEffect(() => {
		if (isOpen) {
			onOpen?.();
		} else {
			onClose?.();
		}
	}, [isOpen, onClose, onOpen]);

	return (
		<InputWrapper
			{...props}
			theme="Select"
			state={state}
			iconName="chevron-down"
			onIconPress={onChevronPress}
		>
			{(theme) => (
				<>
					<ConditionalTouchable
						condition={customPicker}
						onPress={onPressHandler}
						testID={`${testID}-text-container`}
						style={styles.selectContainer}
					>
						<Text
							testID={`${testID}-text`}
							bold={!!selectedLabel && !!isFocused && !disabled}
							style={[styles.selectValue, theme.input.style, inputStyle]}
							color={
								(selectedLabel
									? theme.input.style.color
									: theme.placeholderColor) as ColorsPathOrHardCoded
							}
							size="md"
						>
							{selectedLabel ?? placeholder}
						</Text>

						<View
							style={styles.nativePickerContainer}
							pointerEvents={disabled ? 'none' : undefined}
						>
							{renderPicker()}
						</View>
					</ConditionalTouchable>
					{displayAccessories && isIOS ? (
						<InputAccessoryView nativeID={inputAccessoryViewID}>
							<View
								style={{
									flex: 1,
									flexDirection: 'row',
									justifyContent: 'space-between',
									display: 'flex',
									// paddingHorizontal: inputAccessoryPaddingHorizontal,
								}}
							>
								<View>
									{hideCancelButton ? null : (
										<Button
											testID={`${testID}-cancel-button`}
											onPress={onCancelHandler}
											title={cancelText}
											accessibilityLabel={cancelAccessibilityLabel}
										/>
									)}
								</View>
								<View>
									{hideDoneButton ? null : (
										<Button
											testID={`${testID}-done-button`}
											onPress={onDoneHandler}
											title={doneText}
											accessibilityLabel={doneAccessibilityLabel}
										/>
									)}
								</View>
							</View>
						</InputAccessoryView>
					) : null}
				</>
			)}
		</InputWrapper>
	);
};

const styles = StyleSheet.create({
	selectContainer: {
		flex: 1,
		flexGrow: 1,
	},
	selectValue: {
		flex: 1,
		flexGrow: 1,
	},
	input: {
		flex: 1,
		flexGrow: 1,
		backgroundColor: 'transparent',
	},
	nativePickerContainer: {
		...StyleSheet.absoluteFillObject,
		position: 'absolute',
		marginTop: -7,
		opacity: 0,
	},
});
