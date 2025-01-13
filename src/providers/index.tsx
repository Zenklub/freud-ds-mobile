import React from 'react';

// import { ToastDialogProvider } from '@components';
import { ToastDialogProvider } from '@components/toast';
import { PortalProvider } from '@gorhom/portal';
import { ThemeProvider, ThemeProviderProps } from '@theme/theme-provider';
import {
	SafeAreaProvider,
	SafeAreaViewProps,
} from 'react-native-safe-area-context';

export type FreudDSProviderProps = ThemeProviderProps & {
	safeAreaInitialMetrics?: SafeAreaViewProps['initialMetrics'];
};

export const FreudDSProvider: React.FC<FreudDSProviderProps> = ({
	children,
	safeAreaInitialMetrics = null,
	...props
}) => {
	return (
		<ThemeProvider {...props}>
			<SafeAreaProvider initialMetrics={safeAreaInitialMetrics}>
				<PortalProvider>
					<ToastDialogProvider>{children}</ToastDialogProvider>
				</PortalProvider>
			</SafeAreaProvider>
		</ThemeProvider>
	);
};
