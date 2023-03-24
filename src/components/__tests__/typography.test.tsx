import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { renderWithProviders } from '../../helpers/testing';
import { Heading } from '../typography/heading';
import { Text } from '../typography/text';

const testID = 'typography-test';

describe('Typography', () => {
	describe('Heading', () => {
		it('should render correctly', function () {
			const { getByTestId } = renderWithProviders(
				<Heading testID={testID}>Test</Heading>
			);

			expect(getByTestId(testID)).toBeTruthy();
			expect(getByTestId(testID)).toHaveTextContent('Test');
		});

		it('should render correctly with color', function () {
			const { getByTestId } = renderWithProviders(
				<Heading testID={testID}>Test</Heading>
			);

			expect(getByTestId(testID)).toBeTruthy();
			expect(getByTestId(testID)).toHaveTextContent('Test');
			expect(getByTestId(testID)).toHaveStyle({ color: '#000000' });
		});

		it('should render custom correctly with color', function () {
			const { getByTestId } = renderWithProviders(
				<Heading testID={testID} color="brand.pure">
					Test
				</Heading>
			);

			expect(getByTestId(testID)).toBeTruthy();
			expect(getByTestId(testID)).toHaveTextContent('Test');
			expect(getByTestId(testID)).toHaveStyle({ color: '#6732D1' });
		});

		it('should render correctly with inverted', function () {
			const { getByTestId } = renderWithProviders(
				<Heading testID={testID} inverted>
					Test
				</Heading>
			);

			expect(getByTestId(testID)).toBeTruthy();
			expect(getByTestId(testID)).toHaveTextContent('Test');
			expect(getByTestId(testID)).toHaveStyle({ color: '#FFFFFF' });
		});
	});

	describe('Text', () => {
		it('should render correctly', function () {
			const { getByTestId } = renderWithProviders(
				<Text testID={testID}>Test</Text>
			);

			expect(getByTestId(testID)).toBeTruthy();
			expect(getByTestId(testID)).toHaveTextContent('Test');
		});

		it('should render correctly with color', function () {
			const { getByTestId } = renderWithProviders(
				<Text testID={testID}>Test</Text>
			);

			expect(getByTestId(testID)).toBeTruthy();
			expect(getByTestId(testID)).toHaveTextContent('Test');
			expect(getByTestId(testID)).toHaveStyle({ color: '#000000' });
		});

		it('should render custom correctly with color', function () {
			const { getByTestId } = renderWithProviders(
				<Text testID={testID} color="brand.pure">
					Test
				</Text>
			);

			expect(getByTestId(testID)).toBeTruthy();
			expect(getByTestId(testID)).toHaveTextContent('Test');
			expect(getByTestId(testID)).toHaveStyle({ color: '#6732D1' });
		});

		it('should render correctly with inverted', function () {
			const { getByTestId } = renderWithProviders(
				<Text testID={testID} inverted>
					Test
				</Text>
			);

			expect(getByTestId(testID)).toBeTruthy();
			expect(getByTestId(testID)).toHaveTextContent('Test');
			expect(getByTestId(testID)).toHaveStyle({ color: '#FFFFFF' });
		});
	});
});
