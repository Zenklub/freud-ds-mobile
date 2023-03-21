import React, { useMemo } from 'react';
import { ITextProps, Text as NBText } from 'native-base';
import TextTheme from '@theme/components/text';

export interface TextProps extends ITextProps {
	inverted?: boolean;
}

export const Text: React.FC<TextProps> = ({ inverted, ...props }) => {
	const color = useMemo(() => {
		if (props.color) return props.color;
		return inverted ? TextTheme.baseStyle()._dark.color : props.color;
	}, [props.color, inverted]);
	return <NBText {...props} color={color} fontFamily={'heading'} />;
};
