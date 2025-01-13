import { PressableProps } from '@components/touchable';
import { ContainerProps } from '@components/view';
import { IconButtonSizes, IconButtonVariants, IconName } from '@theme';
import { ViewStyle } from 'react-native';

export type IconButtonProps<T> = PressableProps<T> &
	ContainerProps & {
		style?: ViewStyle;
		inverted?: boolean;
		size?: IconButtonSizes;
		disabled?: boolean;
		variant?: IconButtonVariants;
		isLoading?: boolean;
		isFocused?: boolean;
		icon: IconName;
		testID?: string;
	};
