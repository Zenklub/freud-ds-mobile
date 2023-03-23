import React from 'react';
import { ISpinnerProps, Spinner as NBSpinner } from 'native-base';

interface SpinnerProps {
	size?: 'sm' | 'lg' | 'small' | 'large';
	inverted?: boolean;
}

const sizesMap: Record<
	NonNullable<SpinnerProps['size']>,
	ISpinnerProps['size']
> = {
	sm: 'small',
	lg: 'large',
	small: 'small',
	large: 'large',
};

export const Spinner: React.FC<SpinnerProps> = ({
	size = 'md',
	inverted = false,
}) => {
	return (
		<NBSpinner
			size={sizesMap[size]}
			color={inverted ? 'neutral.white' : 'brand.pure'}
		/>
	);
};
