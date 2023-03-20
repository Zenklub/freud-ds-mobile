import React from 'react';
import { NativeBaseProvider, NativeBaseProviderProps } from 'native-base';

export const FreudDSProvider: React.FC<NativeBaseProviderProps> = (props) => {
	return <NativeBaseProvider {...props} />;
};
