import React, { memo, useCallback } from 'react';
import {
	requireNativeComponent,
	TextInputProps,
	NativeSyntheticEvent,
	Platform,
} from 'react-native';
import { SelectOption } from './select.types';

const RNFreudDSIOSPickerView = Platform.select({
	ios: requireNativeComponent('RNFreudDSPickerView'),
}) as React.ComponentType<any>;

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

export const FreudDSIOSPickerView: React.FC<FreudDSPickerViewProps> = memo(
	({ onSelectedValueChange, ...props }) => {
		const onValueChangeHandler = useCallback(
			(event: FreudDSPickerViewChangeEvent) => {
				onSelectedValueChange?.(event.nativeEvent.value);
			},
			[onSelectedValueChange]
		);

		return (
			<RNFreudDSIOSPickerView {...props} onValueChange={onValueChangeHandler} />
		);
	}
);
