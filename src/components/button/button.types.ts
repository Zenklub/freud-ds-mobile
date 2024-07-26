import { IconName } from '@components/icon';
import { PressableProps } from '@components/touchable';
import { ContainerProps } from '@theme/container-props-style';
import { ButtonSizes, ButtonVariants } from '@theme/tokens';
import { TextStyle, ViewStyle } from 'react-native';

export type ButtonProps<T> = PressableProps<T> &
	ContainerProps & {
		text: string;
		style?: ViewStyle;
		textStyle: TextStyle;
		inverted?: boolean;
		size?: ButtonSizes;
		disabled?: boolean;
		variant?: ButtonVariants;
		isLoading?: boolean;
		isFocused?: boolean;
		icon?: IconName;
		testID?: string;
	};
