import React from 'react';
import { FormControl as NRFormControl } from 'native-base';
import { FormControlComponentType } from '@components/form-control/types';
import { FormControlLabel } from '@components/form-control/form-control-label';
import { FormControlHelperText } from '@components/form-control/form-control-helper-text';

export const FormControl = (({ children, ...props }) => {
	return <NRFormControl {...props}>{children}</NRFormControl>;
}) as FormControlComponentType;

FormControl.Label = FormControlLabel;
FormControl.HelperText = FormControlHelperText;
