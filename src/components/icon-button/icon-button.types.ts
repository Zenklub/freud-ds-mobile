import { IconName } from '@components/icon/icon.types';
import { PressableProps } from '@components/touchable';
import { ContainerProps } from '@theme/container-props-style';
import { IconButtonSizes, IconButtonVariants } from '@theme/tokens';
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
