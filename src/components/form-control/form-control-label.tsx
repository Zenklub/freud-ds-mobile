import React from 'react';
import { FormControlLabelProps } from '@components/form-control/form-control.types';
import { FormControl } from 'native-base';

export const FormControlLabel: React.FC<FormControlLabelProps> = ({
	inverted,
	...props
}) => {
	return (
		<FormControl.Label
			colorScheme={inverted ? 'neutral.white' : 'brand.pure'}
			{...props}
		/>
	);
};
