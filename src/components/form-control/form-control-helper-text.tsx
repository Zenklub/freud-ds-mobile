import React from 'react';
import { FormControlHelperTextProps } from '@components/form-control/types';
import { FormControl } from 'native-base';

export const FormControlHelperText: React.FC<FormControlHelperTextProps> = ({
	inverted,
	...props
}) => {
	return (
		<FormControl.HelperText
			colorScheme={inverted ? 'neutral.white' : 'brand.pure'}
			{...props}
		/>
	);
};
