import { ColorsPathOrHardCoded, SpinnerSize } from '@theme';
import { ActivityIndicator } from 'react-native';

type RNSpinnerProps = React.ComponentProps<typeof ActivityIndicator>;

export interface SpinnerProps extends Omit<RNSpinnerProps, 'size' | 'color'> {
	size?: SpinnerSize;
	color?: ColorsPathOrHardCoded;
	inverted?: boolean;
	testID?: string;
}
