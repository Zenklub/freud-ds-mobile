import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { renderWithProviders } from '../../helpers/testing';
import { iconCharMap } from '../icon/constants';
import { Icon } from '../icon/icon';
import { IconName } from '../icon/icon.types';

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
				<Icon testID={testID} name="plus" size={size} color="#FFF" />
			);

			expect(getByTestId(testID)).toBeTruthy();
			expect(getByTestId(testID)).toHaveStyle({ fontSize });
		}
	);

	it('should render default icon size correctly', () => {
		const { getByTestId } = renderWithProviders(
			<Icon testID={testID} name="plus" color="#FFF" />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveStyle({ fontSize: 24 });
	});

	it('should render icon with color correctly', () => {
		const { getByTestId } = renderWithProviders(
			<Icon testID={testID} name="plus" size="md" color="#FFF" />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveStyle({ color: '#FFF' });
	});

	it('should render null when name not found correctly', () => {
		const { queryByTestId } = renderWithProviders(
			<Icon testID={testID} name={'no-existent-icon' as IconName} />
		);
		expect(queryByTestId(testID)).toBeFalsy();
	});
});
