import { ViewStyle } from 'react-native';

export type IRadioValue = string;
export type IRadioGroupOnChangeHandler = (value: IRadioValue) => any;
export interface RadioProps {
	value: IRadioValue;
	testID?: string;
	children: React.ReactNode;
	isFocused?: boolean;
	disabled?: boolean;
	inverted?: boolean;
	style?: ViewStyle | ViewStyle[];
}

export interface RadioGroupProps {
	style?: ViewStyle | ViewStyle[];
	value?: IRadioValue;
	initialValue?: IRadioValue;
	onChange?: IRadioGroupOnChangeHandler;
	children: React.ReactNode;
	direction?: 'row' | 'column';
}

export interface RadioComponentType extends React.FC<RadioProps> {
	Group: React.FC<RadioGroupProps>;
}
