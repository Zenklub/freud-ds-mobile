export type SpinnerSize = 'sm' | 'lg' | 'small' | 'large';

export interface SpinnerProps {
	size?: SpinnerSize;
	inverted?: boolean;
	testID?: string;
}
