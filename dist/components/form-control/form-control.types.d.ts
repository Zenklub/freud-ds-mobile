import { IFormControlHelperTextProps, IFormControlLabelProps, IFormControlProps } from 'native-base/lib/typescript/components/composites/FormControl';
import React from 'react';
export type FormControlProps = IFormControlProps;
export type FormControlLabelProps = IFormControlLabelProps & {
    inverted?: boolean;
};
export type FormControlHelperTextProps = IFormControlHelperTextProps & {
    inverted?: boolean;
};
export type FormControlComponentType = ((props: FormControlProps) => JSX.Element) & {
    Label: React.FC<FormControlLabelProps>;
    HelperText: React.FC<FormControlHelperTextProps>;
};
