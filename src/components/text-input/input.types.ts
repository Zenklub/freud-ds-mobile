import { IconName } from '@components/icon/icon.types';
import { TouchableProps } from '@components/touchable';
import { ViewProps } from '@components/view';
import { ContainerProps } from '@theme/container-props-style';
import { TextInputProps } from 'react-native';

export type InputProps = ContainerProps &
	Omit<TextInputProps, 'style'> & {
		label?: string;
		helperText?: string;
		inverted?: boolean;
		disabled?: boolean;
		error?: string | boolean;
		iconName?: IconName;
		onIconPress?: () => void;
		containerStyle?: ViewProps['style'];
		inputContainerStyle?: ViewProps['style'];
		inputStyle?: TextInputProps['style'];
		iconContainerStyle?: ViewProps['style'];
		iconHitSlop?: TouchableProps<any>['hitSlop'];
	};
