import { NativeSyntheticEvent, TextInputProps, ViewStyle } from 'react-native';
export interface FreudDSPickerRenderInputProps extends TextInputProps {
	nativeID: string;
	value?: SelectOption['value'];
}

export interface FreudDSPickerViewProps {
	selected?: SelectOption['value'];
	options: SelectOption[];
	inputNativeID: string;
	onSelectedValueChange?: (selected?: SelectOption['value']) => void;
}

export type FreudDSPickerViewChangeEvent = NativeSyntheticEvent<{
	value?: SelectOption['value'];
}>;

export interface SelectProps
	extends Omit<FreudDSPickerViewProps, 'inputNativeID' | 'options'> {
	customPicker?: boolean;
	options: SelectOption[];
	nativeID: string;
	label?: string;
	helperText?: string;
	error?: string;
	inverted?: boolean;
	disabled?: boolean;
	isFocused?: boolean;
	placeholder?: string;
	testID?: string;
	style?: ViewStyle | ViewStyle[];
	onPress?: () => void;
	onOpen?: () => void;
	onClose?: () => void;
	displayAccessories?: boolean;
	accessoryViewID?: string;
	cancelText?: string;
	doneText?: string;
	cancelAccessibilityLabel?: string;
	doneAccessibilityLabel?: string;
	hideCancelButton?: boolean;
	hideDoneButton?: boolean;
	onCancel?: () => void;
	onDone?: () => void;
}

export interface SelectOption {
	label: string;
	value: string;
}
