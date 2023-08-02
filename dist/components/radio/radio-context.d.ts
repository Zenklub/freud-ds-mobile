import { IRadioValue } from 'native-base';
import { IRadioGroupOnChangeHandler } from 'native-base/lib/typescript/components/primitives/Radio/types';
import React from 'react';
export interface IRadioGroupContext {
    setValue: (optionValue: string) => void;
    currentValue?: string;
}
export declare const RadioGroupContext: React.Context<IRadioGroupContext>;
export interface RadioGroupOptions {
    value: any;
    selected: boolean;
}
export interface RadioGroupProps {
    initialValue?: IRadioValue;
    onChange?: IRadioGroupOnChangeHandler;
    children: React.ReactNode;
}
export declare const RadioGroupContextProvider: React.FC<RadioGroupProps>;
export interface IUseRadioContext {
    currentSelected?: string;
    setSelected: (value: string) => void;
}
export declare const useRadioContext: () => IRadioGroupContext;
