import React from 'react';
import { NativeBaseProvider, NativeBaseProviderProps } from 'native-base';
import { theme, ThemeProvider } from '../theme';
import { ToastDialogProvider } from '@components';
import { PortalProvider } from '@gorhom/portal';

export const FreudDSProvider: React.FC<NativeBaseProviderProps> = ({
	children,
	...props
}) => {
	return (
		<ThemeProvider>
			<NativeBaseProvider theme={theme} {...props}>
				<PortalProvider>
					<ToastDialogProvider>{children}</ToastDialogProvider>
				</PortalProvider>
			</NativeBaseProvider>
		</ThemeProvider>
	);
};
