import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { renderWithProviders } from '../../../testings/test-helpers';
import { FreudHeading } from '../heading';

const testID = 'heading-test';

describe('Typography > Heading', () => {
	it('should render correctly', function () {
		const { getByTestId } = renderWithProviders(
			<FreudHeading testID={testID}>Teste</FreudHeading>
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveTextContent('Teste');
	});
});
