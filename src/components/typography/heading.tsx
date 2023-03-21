import React, { useMemo } from 'react';
import { Heading as NBHeading, IHeadingProps } from 'native-base';
import HeadingTheme from '@theme/components/heading';

export interface HeadingProps extends IHeadingProps {
	inverted?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({ inverted, ...props }) => {
	const color = useMemo(() => {
		if (props.color) return props.color;
		return inverted ? HeadingTheme.baseStyle()._dark.color : props.color;
	}, [props.color, inverted]);

	return <NBHeading {...props} color={color} fontFamily="heading" />;
};
