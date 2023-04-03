import { IconName } from '@components/icon/types';

export interface InputProps {
	label?: string;
	helperText?: string;
	inverted?: boolean;
	disabled?: boolean;
	error?: string;
	placeholder?: string;
	value?: string;
	onChangeText?: (text: string) => void;
	iconName?: IconName;
	onIconPress?: () => void;
	testID?: string;
}
