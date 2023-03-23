import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { renderWithProviders } from '../../helpers/testing';
import { Heading } from '../typography/heading';
import { Text } from '../typography/text';

const testID = 'heading-test';

describe('Typography > Heading', () => {
	it('should render correctly', function () {
		const { getByTestId } = renderWithProviders(
			<Heading testID={testID}>Teste</Heading>
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveTextContent('Teste');
	});
});

describe('Typography > Text', () => {
	it('should render correctly', function () {
		const { getByTestId } = renderWithProviders(
			<Text testID={testID}>Teste</Text>
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveTextContent('Teste');
	});
});
