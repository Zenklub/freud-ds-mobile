import { FormControlLabelProps } from '../../components/form-control/form-control.types';
export declare const FormControl: {
    baseStyle: {
        width: string;
    };
};
export declare const FormControlErrorMessage: {
    baseStyle: () => {
        mt: string;
        _text: {
            fontSize: string;
            color: string;
        };
        _disabled: {
            opacity: any;
        };
        _stack: {
            space: number;
            alignItems: string;
        };
        _dark: {
            _text: {
                color: string;
            };
        };
    };
};
export declare const FormControlLabel: {
    baseStyle: ({ colorScheme }: FormControlLabelProps) => {
        flexDirection: string;
        justifyContent: string;
        _text: {
            fontSize: string;
            fontWeight: string;
            color: string;
        };
        my: string;
        _astrick: {
            color: string;
        };
        _disabled: {
            opacity: any;
        };
        _dark: {
            _text: {
                color: string;
            };
            _astrick: {
                color: string;
            };
        };
    };
};
export declare const FormControlHelperText: {
    baseStyle: ({ colorScheme }: FormControlLabelProps) => {
        mt: string;
        _text: {
            fontSize: string;
            color: string;
        };
        _disabled: {
            opacity: any;
        };
        _dark: {
            _text: {
                color: string;
            };
        };
    };
};
