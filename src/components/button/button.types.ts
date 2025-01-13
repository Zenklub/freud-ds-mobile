import { PressableProps } from '@components/touchable';
import { ContainerProps } from '@components/view';
import { ButtonSizes, ButtonVariants, IconName } from '@theme';
import { TextStyle, ViewStyle } from 'react-native';

export type ButtonProps<T> = PressableProps<T> &
	ContainerProps & {
		style?: ViewStyle;
		textStyle?: TextStyle;
		inverted?: boolean;
		size?: ButtonSizes;
		disabled?: boolean;
		variant?: ButtonVariants;
		isLoading?: boolean;
		isFocused?: boolean;
		icon?: IconName;
		testID?: string;
		iconStyle?: TextStyle;
	} & (
		| {
				text: string;
				children?: React.ReactNode;
		  }
		| {
				text?: string;
				children: React.ReactNode;
		  }
	);
