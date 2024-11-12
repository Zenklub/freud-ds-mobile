import React, { createContext, useCallback, useContext, useState } from 'react';

export type IRadioValue = string;
export type IRadioGroupOnChangeHandler = (value: IRadioValue) => any;

export interface IRadioGroupContext {
	setValue: (optionValue: string) => void;
	currentValue?: string;
}

export const RadioGroupContext = createContext({} as IRadioGroupContext);

export interface RadioGroupOptions {
	value: any;
	selected: boolean;
}

export interface RadioGroupProps {
	initialValue?: IRadioValue;
	onChange?: IRadioGroupOnChangeHandler;
	children: React.ReactNode;
}

export const RadioGroupContextProvider: React.FC<RadioGroupProps> = ({
	initialValue,
	onChange,
	children,
}) => {
	const [currentValue, setCurrentValue] = useState<IRadioValue | undefined>(
		initialValue
	);

	const setValue = useCallback((optionValue: IRadioValue) => {
		onChange?.(optionValue);
		setCurrentValue(optionValue);
	}, []);

	return (
		<RadioGroupContext.Provider value={{ setValue, currentValue }}>
			{children}
		</RadioGroupContext.Provider>
	);
};

export interface IUseRadioContext {
	currentSelected?: string;
	setSelected: (value: string) => void;
}

export const useRadioContext = (): IRadioGroupContext => {
	const context = useContext(RadioGroupContext);

	if (!context) {
		throw new Error(
			'useRadioContext must be used within a Radio.Group component'
		);
	}

	return context;
};
