import React from 'react';
import {
	render,
	RenderAPI,
	RenderOptions,
} from '@testing-library/react-native';
import { FreudDSProvider } from '../../providers';
import { FormControl } from '../../components/form-control/form-control';

const inset = {
	frame: { x: 0, y: 0, width: 0, height: 0 },
	insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

export const renderWithProviders = (
	component: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
	options?: RenderOptions | undefined
): RenderAPI => {
	return render(
		<FreudDSProvider initialWindowMetrics={inset}>{component}</FreudDSProvider>,
		options
	);
};

export const renderWithProvidersAndFormControl = (
	component: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
	options?: RenderOptions | undefined
): RenderAPI => {
	return render(
		<FreudDSProvider initialWindowMetrics={inset}>
			<FormControl>{component}</FormControl>
		</FreudDSProvider>,
		options
	);
};
