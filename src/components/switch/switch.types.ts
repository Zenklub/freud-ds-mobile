export interface SwitchProps {
	checked?: boolean;
	disabled?: boolean;
	onChange?: (checked: boolean) => void;
	inverted?: boolean;
	testID?: string;
}
