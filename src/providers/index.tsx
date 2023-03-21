import React from 'react';
import { NativeBaseProvider, NativeBaseProviderProps } from 'native-base';
import { theme } from '@theme';

export const FreudDSProvider: React.FC<NativeBaseProviderProps> = (props) => {
	return <NativeBaseProvider theme={theme} {...props} />;
};
