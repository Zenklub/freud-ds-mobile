import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { theme } from '../theme';
export var FreudDSProvider = function (props) {
    return <NativeBaseProvider theme={theme} {...props}/>;
};
