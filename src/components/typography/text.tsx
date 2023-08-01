import React, { useMemo } from 'react';
import { Text as NBText } from 'native-base';
import TextTheme from '@theme/components/text';
import { TextProps } from './typography.types';

export const Text: React.FC<TextProps> = ({ inverted, ...props }) => {
	const color = useMemo(() => {
		if (props.color) return props.color;
		return inverted ? TextTheme.baseStyle()._dark.color : props.color;
	}, [props.color, inverted]);
	return <NBText {...props} color={color} fontFamily={'heading'} />;
};
