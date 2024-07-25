import React from 'react';
import { ActivityIndicator } from 'react-native';
import { SpinnerProps } from '@components/spinner/spinner.types';
import { useColors } from '@hooks';

export const Spinner: React.FC<SpinnerProps> = ({
	testID,
	size = 'large',
	inverted = false,
}) => {
	const [color] = useColors(inverted ? 'neutral.white' : 'brand.pure');

	return <ActivityIndicator testID={testID} size={size} color={color} />;
};
