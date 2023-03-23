import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { renderWithProviders } from '../../helpers/testing';
import { Spinner } from '../spinner/spinner';
import { SpinnerSize } from '../spinner/types';
import { iconSizesMap } from '../spinner/constants';
import { colors } from '../../theme/tokens';

const testID = 'spinner-test';

const sizes = Object.keys(iconSizesMap) as Array<SpinnerSize>;

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
		expect(getByTestId(testID)).toHaveProp('size', iconSizesMap[size]);
	});

	it('should render default spinner size correctly', () => {
		const { getByTestId } = renderWithProviders(<Spinner testID={testID} />);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveProp('size', iconSizesMap.large);
	});

	it('should render spinner with color correctly', () => {
		const { getByTestId } = renderWithProviders(<Spinner testID={testID} />);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveProp('color', colors.brand.pure);
	});

	it('should render spinner with inverted color correctly', () => {
		const { getByTestId } = renderWithProviders(
			<Spinner testID={testID} inverted />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveProp('color', colors.neutral.white);
	});
});
