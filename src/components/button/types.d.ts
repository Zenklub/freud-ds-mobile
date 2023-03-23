import { IButtonProps } from 'native-base';
import { IconName } from '@components/icon/constants';

export type ButtonVariants = 'solid' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
	children: IButtonProps['children'];
	inverted?: boolean;
	size?: ButtonSize;
	disabled?: boolean;
	variant?: ButtonVariants;
	isLoading?: boolean;
	isFocused?: boolean;
	icon?: IconName;
	testID?: string;
	onPress?: IButtonProps['onPress'];
	onPressIn?: IButtonProps['onPressIn'];
	onPressOut?: IButtonProps['onPressOut'];
}
