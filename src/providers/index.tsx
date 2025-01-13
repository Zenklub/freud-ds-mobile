import React from 'react';

// import { ToastDialogProvider } from '@components';
import { ToastDialogProvider } from '@components/toast';
import { PortalProvider } from '@gorhom/portal';
import { ThemeProvider, ThemeProviderProps } from '@theme/theme-provider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export type FreudDSProviderProps = ThemeProviderProps;

export const FreudDSProvider: React.FC<FreudDSProviderProps> = ({
	children,
	...props
}) => {
	return (
		<ThemeProvider {...props}>
			<SafeAreaProvider>
				<PortalProvider>
					<ToastDialogProvider>{children}</ToastDialogProvider>
				</PortalProvider>
			</SafeAreaProvider>
		</ThemeProvider>
	);
};
