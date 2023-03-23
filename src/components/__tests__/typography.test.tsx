import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { renderWithProviders } from '../../helpers/testing';
import { Heading } from '../typography/heading';
import { Text } from '../typography/text';

const testID = 'heading-test';

describe('Typography > Heading', () => {
	it('should render correctly', function () {
		const { getByTestId } = renderWithProviders(
			<Heading testID={testID}>Test</Heading>
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveTextContent('Test');
	});
});

describe('Typography > Text', () => {
	it('should render correctly', function () {
		const { getByTestId } = renderWithProviders(
			<Text testID={testID}>Test</Text>
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveTextContent('Test');
	});
});
