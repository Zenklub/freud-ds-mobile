import { IconName } from '@components/icon/icon.types';
import { IButtonProps } from 'native-base';

export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type IconButtonVariant = 'solid' | 'outline' | 'ghost';

export interface IconButtonProps {
	icon: IconName;
	disabled?: boolean;
	inverted?: boolean;
	size?: IconButtonSize;
	variant?: IconButtonVariant;
	testID?: string;
	onPress?: IButtonProps['onPress'];
	onPressIn?: IButtonProps['onPressIn'];
	onPressOut?: IButtonProps['onPressOut'];
}
