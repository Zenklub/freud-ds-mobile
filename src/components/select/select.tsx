import React, {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { SelectOption, SelectProps } from './select.types';
import {
	Button,
	InputAccessoryView,
	Keyboard,
	StyleSheet,
	TextInput,
	View,
} from 'react-native';
import { Text } from '@components/typography';
import { Icon } from '@components/icon';
import { FreudDSIOSPickerView } from './ios-picker-view';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useIsIOS } from '@helpers/use-is-ios.hook';
import { Picker } from '@react-native-picker/picker';
import { useSelectStyle } from './use-select-style.hook';
import { ConditionalTouchable } from '@components/touchable';

export const Select: React.FC<SelectProps> = ({
	testID,
	placeholder,
	selected,
	options,
	label,
	error,
	helperText,
	onClose,
	onOpen,
	onCancel,
	onDone,
	onPress,
	onSelectedValueChange,
	nativeID: inputNativeID,
	accessoryViewID,
	style,
	cancelText = 'Cancel',
	doneText = 'Done',
	cancelAccessibilityLabel = 'Cancel',
	doneAccessibilityLabel = 'Done',
	hideCancelButton = false,
	hideDoneButton = false,
	customPicker = false,
	inverted = false,
	isFocused = false,
	disabled = false,
	displayAccessories = true,
}) => {
	const isIOS = useIsIOS();

	const [isOpen, setIsOpen] = useState(false);

	const [previousSelected, setPreviousSelected] =
		useState<SelectOption['value']>();

	const selectedItem = useMemo(() => {
		return options.find((option) => option.value === selected);
	}, [options, selected]);

	const inputAccessoryViewID = useMemo(() => {
		return accessoryViewID ?? `${inputNativeID}-accessory`;
	}, [accessoryViewID, inputNativeID]);

	const {
		backgroundColor,
		normalBorderColor,
		focusedBorderColor,
		errorBorderColor,
		placeholderTextColor,
		helperTextColor,
		errorTextColor,
		selectedItemTextColor,
		labelColor,
		iconColor,
		inputHeight,
		paddingHorizontal,
		inputAccessoryPaddingHorizontal,
		borderRadius,
		opacity,
	} = useSelectStyle(disabled, inverted);

	const inputRef = useRef<TextInput>(null);

	const borderColor = useMemo(() => {
		if (error) {
			return errorBorderColor;
		} else if (isFocused) {
			return focusedBorderColor;
		} else {
			return normalBorderColor;
		}
	}, [inverted, focusedBorderColor, errorBorderColor, isFocused]);

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
		<View
			testID={testID}
			style={[
				styles.container,
				{
					opacity: opacity,
				},
				style,
			]}
		>
			{label ? (
				<Text
					testID={`${testID}-label`}
					customColor={labelColor}
					fontWeight="semibold"
					fontSize="md"
				>
					{label}
				</Text>
			) : null}
			<ConditionalTouchable
				condition={customPicker}
				onPress={onPressHandler}
				testID={`${testID}-text-container`}
				style={[
					styles.selectContainer,
					{
						backgroundColor,
						borderColor,
						height: inputHeight,
						borderRadius: borderRadius,
						paddingHorizontal: paddingHorizontal,
					},
				]}
			>
				<Text
					testID={`${testID}-text`}
					style={styles.selectValue}
					bold={!!selectedLabel && !!isFocused && !disabled}
					color={selectedLabel ? selectedItemTextColor : placeholderTextColor}
					fontSize="md"
				>
					{selectedLabel ?? placeholder}
				</Text>
				<TouchableWithoutFeedback
					style={styles.iconContainer}
					onPress={onChevronPress}
				>
					<Icon name="chevron-down" size="md" color={iconColor} />
				</TouchableWithoutFeedback>

				<View
					style={styles.nativePickerContainer}
					pointerEvents={disabled ? 'none' : undefined}
				>
					{renderPicker()}
				</View>
			</ConditionalTouchable>

			{error || helperText ? (
				<Text
					testID={`${testID}-${helperText ? 'helper-text' : 'error'}`}
					color={error ? errorTextColor : helperTextColor}
					bold={!!selectedLabel && isFocused && !disabled}
				>
					{error ?? helperText}
				</Text>
			) : null}
			{displayAccessories && isIOS ? (
				<InputAccessoryView nativeID={inputAccessoryViewID}>
					<View
						style={{
							flex: 1,
							flexDirection: 'row',
							justifyContent: 'space-between',
							display: 'flex',
							paddingHorizontal: inputAccessoryPaddingHorizontal,
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
		</View>
	);
};

const styles = StyleSheet.create({
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
	nativePickerContainer: {
		...StyleSheet.absoluteFillObject,
		position: 'absolute',
		marginTop: -7,
		opacity: 0,
	},
});
