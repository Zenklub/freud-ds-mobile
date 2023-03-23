import { IButtonProps } from 'native-base';
import { IconName } from '@components/icon/icon-code-map';

export interface ButtonProps {
	children: IButtonProps['children'];
	inverted?: boolean;
	size?: 'sm' | 'md' | 'lg';
	disabled?: boolean;
	variant?: 'solid' | 'outline' | 'ghost';
	isLoading?: boolean;
	isFocused?: boolean;
	icon?: IconName;
}
