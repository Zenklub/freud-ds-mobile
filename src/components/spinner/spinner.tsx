import React from 'react';
import { Spinner as NBSpinner } from 'native-base';
import { SpinnerProps } from '@components/spinner/types';
import { iconSizesMap } from '@components/spinner/constants';

export const Spinner: React.FC<SpinnerProps> = ({
	testID,
	size = 'large',
	inverted = false,
}) => {
	return (
		<NBSpinner
			testID={testID}
			size={iconSizesMap[size]}
			color={inverted ? 'neutral.white' : 'brand.pure'}
		/>
	);
};
