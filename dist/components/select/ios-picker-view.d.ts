import React from 'react';
import { TextInputProps, NativeSyntheticEvent } from 'react-native';
import { SelectOption } from './select.types';
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
export declare const FreudDSIOSPickerView: React.FC<FreudDSPickerViewProps>;
