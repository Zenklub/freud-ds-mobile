import React from 'react';

// import { ToastDialogProvider } from '@components';
import { ToastDialogProvider } from '@components/toast';
import { PortalProvider } from '@gorhom/portal';
import { ThemeProvider, ThemeProviderProps } from '@theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type FreudDSProviderProps = ThemeProviderProps;

export const FreudDSProvider: React.FC<FreudDSProviderProps> = ({
	theme,
	children,
}) => {
	return (
		<ThemeProvider theme={theme}>
			<SafeAreaProvider>
				<PortalProvider>
					<ToastDialogProvider>{children}</ToastDialogProvider>
				</PortalProvider>
			</SafeAreaProvider>
		</ThemeProvider>
	);
};
