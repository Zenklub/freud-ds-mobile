import { ColorModeOptions, extendTheme } from 'native-base';

import base from '@theme/base';
import components from '@theme/components';

export { ThemeProvider } from './theme-provider';

const config: ColorModeOptions = {
	useSystemColorMode: false, // TODO: implement this
	initialColorMode: 'light',
	accessibleColors: false,
};

export const theme = extendTheme({
	...base,
	components,
	config,
});
