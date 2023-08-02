export interface CheckboxProps {
	label: string;
	checked?: boolean;
	disabled?: boolean;
	onChange?: (checked: boolean) => void;
	inverted?: boolean;
	testID?: string;
	focused?: boolean;
}
