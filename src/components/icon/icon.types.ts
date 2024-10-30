import { ColorsPathOrHardCoded, IconName, IconSize } from '@theme';
import { StyleProp, TextStyle } from 'react-native';

export interface IconProps {
	name: IconName;
	size?: IconSize | number;
	color?: ColorsPathOrHardCoded;
	inverted?: boolean;
	testID?: string;
	style?: StyleProp<TextStyle>;
}
