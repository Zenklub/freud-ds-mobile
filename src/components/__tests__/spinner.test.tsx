import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { renderWithProviders } from '../../helpers/testing';
import Colors from '../../theme/base/colors';
import { Spinner } from '../spinner/spinner';

const testID = 'spinner-test';
const sizes = ['small', 'large'];

describe('Feedback > Spinner', () => {
	it('should render spinner correctly', () => {
		const { getByTestId } = renderWithProviders(<Spinner testID={testID} />);

		expect(getByTestId(testID)).toBeTruthy();
	});

	it.each(sizes)('should render spinner size "%s" correctly', (size) => {
		const { getByTestId } = renderWithProviders(
			<Spinner testID={testID} size={size} />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveProp('size', size);
	});

	it('should render default spinner size correctly', () => {
		const { getByTestId } = renderWithProviders(<Spinner testID={testID} />);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveProp('size', 'large');
	});

	it('should render spinner with color correctly', () => {
		const { getByTestId } = renderWithProviders(<Spinner testID={testID} />);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveProp('color', Colors.brand.pure);
	});

	it('should render spinner with inverted color correctly', () => {
		const { getByTestId } = renderWithProviders(
			<Spinner testID={testID} inverted />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveProp('color', Colors.brand.pure);
	});
});
