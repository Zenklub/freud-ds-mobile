// themeDecorator.js
import React from 'react';
import { FreudDSProvider } from '@freud-ds/react-native';

export const ThemeDecorator = (storyFn: () => any) => (
	<FreudDSProvider>{storyFn()}</FreudDSProvider>
);
