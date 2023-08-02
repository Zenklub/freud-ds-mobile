import { ViewStyle } from 'react-native';
import { FreudDSPickerViewProps } from './ios-picker-view';
export interface SelectProps extends Omit<FreudDSPickerViewProps, 'inputNativeID'> {
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
