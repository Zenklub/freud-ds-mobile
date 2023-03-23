import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { renderWithProviders } from '../../helpers/testing';
import { Icon } from '../icon/icon';
import { iconCharMap } from '../icon/constants';
import { IconName } from '../icon/types';

const testID = 'icon-test';

describe('Icons', () => {
	it.each(Object.keys(iconCharMap) as Array<IconName>)(
		'should render icon "%s" correctly',
		function (key: IconName) {
			const { getByTestId } = renderWithProviders(
				<Icon testID={testID} name={key} size="md" color="white" />
			);

			expect(getByTestId(testID)).toBeTruthy();
			expect(getByTestId(testID)).toHaveTextContent(iconCharMap[key]);
		}
	);

	type SizeFont = {
		size: 'sm' | 'md' | 'lg';
		fontSize: number;
	};

	it.each([
		{ size: 'sm', fontSize: 16 },
		{ size: 'md', fontSize: 24 },
		{ size: 'lg', fontSize: 32 },
	] as Array<SizeFont>)(
		'should render icon size "%s" correctly',
		({ size, fontSize }: SizeFont) => {
			const { getByTestId } = renderWithProviders(
				<Icon testID={testID} name="plus" size={size} color="white" />
			);

			expect(getByTestId(testID)).toBeTruthy();
			expect(getByTestId(testID)).toHaveStyle({ fontSize });
		}
	);

	it('should render default icon size correctly', () => {
		const { getByTestId } = renderWithProviders(
			<Icon testID={testID} name="plus" color="white" />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveStyle({ fontSize: 24 });
	});

	it('should render icon with color correctly', () => {
		const { getByTestId } = renderWithProviders(
			<Icon testID={testID} name="plus" size="md" color="white" />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveStyle({ color: 'white' });
	});
});
