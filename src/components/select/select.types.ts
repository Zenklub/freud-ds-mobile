import { BaseInputProps } from '@components/input-wrapper/input-wrapper';
import {
	NativeSyntheticEvent,
	StyleProp,
	TextInputProps,
	TextStyle,
} from 'react-native';
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

export type SelectProps = Omit<
	FreudDSPickerViewProps,
	'inputNativeID' | 'options'
> &
	Omit<
		BaseInputProps,
		'iconName' | 'onIconPress' | 'iconContainerStyle' | 'iconHitSlop'
	> & {
		customPicker?: boolean;
		options: SelectOption[];
		nativeID: string;
		isFocused?: boolean;
		placeholder?: string;
		inputStyle?: StyleProp<TextStyle>;
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
	};

export interface SelectOption {
	label: string;
	value: string;
}
