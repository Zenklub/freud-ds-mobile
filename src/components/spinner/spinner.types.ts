import { ColorsPathOrHardCoded } from '@theme/tokens/colors';

export type SpinnerSize = number | 'small' | 'large';

export interface SpinnerProps {
	size?: SpinnerSize;
	color?: ColorsPathOrHardCoded;
	testID?: string;
}
