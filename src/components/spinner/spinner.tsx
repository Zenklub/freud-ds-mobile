import { SpinnerProps } from '@components/spinner/spinner.types';
import { useColorTokenOrHardCoded } from '@hooks';
import React from 'react';
import { ActivityIndicator } from 'react-native';

export const Spinner: React.FC<SpinnerProps> = ({
	testID,
	size = 'large',
	color = 'brand.pure',
}) => {
	const spinnerColor = useColorTokenOrHardCoded(color, 'brand.pure');
	return <ActivityIndicator testID={testID} size={size} color={spinnerColor} />;
};
