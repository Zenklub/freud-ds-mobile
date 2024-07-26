import { iconCharMap } from '@components/icon/constants';
import { TextStyle } from 'react-native';

export type IconName = keyof typeof iconCharMap;
export type IconSize = 'xs' | 'sm' | 'md' | 'lg';

export interface IconProps {
	name: IconName;
	size?: IconSize | number;
	color?: string;
	testID?: string;
	style?: TextStyle | TextStyle[];
}
