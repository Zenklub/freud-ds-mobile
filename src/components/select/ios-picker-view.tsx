import React, { memo, useCallback } from 'react';
import { requireNativeComponent, Platform } from 'react-native';
import {
	FreudDSPickerViewChangeEvent,
	FreudDSPickerViewProps,
} from './select.types';

const RNFreudDSIOSPickerView = Platform.select({
	ios: requireNativeComponent('RNFreudDSPickerView'),
}) as React.ComponentType<any>;

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
