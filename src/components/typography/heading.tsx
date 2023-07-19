import React, { useMemo } from 'react';
import { Heading as NBHeading } from 'native-base';
import HeadingTheme from '@theme/components/heading';
import { HeadingProps } from './typography.types';

export const Heading: React.FC<HeadingProps> = ({ inverted, ...props }) => {
	const color = useMemo(() => {
		if (props.color) return props.color;
		return inverted ? HeadingTheme.baseStyle()._dark.color : props.color;
	}, [props.color, inverted]);

	return <NBHeading {...props} color={color} fontFamily="heading" />;
};
