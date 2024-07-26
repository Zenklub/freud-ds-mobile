export type SpinnerSize = number | 'small' | 'large';

export interface SpinnerProps {
	size?: SpinnerSize;
	inverted?: boolean;
	testID?: string;
}
