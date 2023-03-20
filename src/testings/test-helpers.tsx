import React from 'react';
import { FreudDSProvider } from '../providers';
import {
	render,
	RenderAPI,
	RenderOptions,
} from '@testing-library/react-native';

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
