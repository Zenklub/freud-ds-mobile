import React from 'react';
import { ITextProps, Text } from 'native-base';

export const FreudText: React.FC<ITextProps> = (props) => {
	return <Text {...props} fontFamily={'heading'} />;
};
