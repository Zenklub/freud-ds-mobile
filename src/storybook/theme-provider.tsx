// themeDecorator.js
import React from 'react';
// @ts-ignore
import { FreudDSProvider } from '@freud-ds/react-native';

export const ThemeDecorator = (storyFn: () => any) => (
	<FreudDSProvider>{storyFn()}</FreudDSProvider>
);
