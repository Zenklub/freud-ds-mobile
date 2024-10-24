import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { renderWithProviders } from '../../helpers/testing';
import { IconButton } from '../icon-button/icon-button';
import { iconCharMap } from '../icon/constants';

const testID = 'icon-btn-test';

const sizes = ['xs', 'sm', 'md', 'lg'] as const;
const sizesMap = {
	xs: 24,
	sm: 32,
	md: 40,
	lg: 48,
};

const iconSizeMap = {
	xs: 12,
	sm: 24,
	md: 24,
	lg: 24,
};

type VariantIconColorMap = {
	variant: 'solid' | 'outline' | 'ghost';
	iconColor: string;
};

const IconButtonVariantsIconColorsMap: VariantIconColorMap[] = [
	{ variant: 'solid', iconColor: '#FFFFFF' },
	{ variant: 'outline', iconColor: '#6732D1' },
	{ variant: 'ghost', iconColor: '#6732D1' },
];
const IconButtonInvertedVariantsIconColorsMap: VariantIconColorMap[] = [
	{ variant: 'solid', iconColor: '#6732D1' },
	{ variant: 'outline', iconColor: '#FFFFFF' },
	{ variant: 'ghost', iconColor: '#FFFFFF' },
];

describe('Forms > Icon IconButton', () => {
	it('should render correctly', () => {
		const { getByTestId } = renderWithProviders(
			<IconButton testID={testID} icon="plus" />
		);
		expect(getByTestId(`${testID}-container`)).toBeTruthy();
	});

	it.each(sizes)('should render size "%s" correctly', (size) => {
		const { getByTestId } = renderWithProviders(
			<IconButton testID={testID} size={size} icon="plus" />
		);
		expect(getByTestId(`${testID}-container`)).toBeTruthy();
		expect(getByTestId(`${testID}-container`)).toHaveStyle({
			height: sizesMap[size],
		});
	});

	it('should render default size correctly', () => {
		const { getByTestId } = renderWithProviders(
			<IconButton testID={testID} icon="plus" />
		);
		expect(getByTestId(`${testID}-container`)).toBeTruthy();
		expect(getByTestId(`${testID}-container`)).toHaveStyle({
			height: sizesMap.md,
		});
	});

	it('should render icon correctly', () => {
		const { getByTestId } = renderWithProviders(
			<IconButton testID={testID} icon="plus" />
		);
		expect(getByTestId(`${testID}-container`)).toBeTruthy();
		expect(getByTestId(`${testID}-icon`)).toHaveTextContent(iconCharMap.plus);
	});

	it.each(sizes)('should render icon with correctly size "%s"', (size) => {
		const { getByTestId } = renderWithProviders(
			<IconButton testID={testID} icon="plus" size={size} />
		);

		expect(getByTestId(`${testID}-container`)).toBeTruthy();
		expect(getByTestId(`${testID}-icon`)).toHaveStyle({
			fontSize: iconSizeMap[size],
		});
	});

	it.each(IconButtonVariantsIconColorsMap)(
		'should render icon variant color "%s" correctly',
		({ variant, iconColor }) => {
			const { getByTestId } = renderWithProviders(
				<IconButton testID={testID} variant={variant} icon="plus" />
			);
			expect(getByTestId(`${testID}-container`)).toBeTruthy();

			expect(getByTestId(`${testID}-icon`)).toHaveStyle({
				color: iconColor,
			});
		}
	);

	it.each(IconButtonInvertedVariantsIconColorsMap)(
		'should render inverted icon variant color "%s" correctly',
		({ variant, iconColor }) => {
			const { getByTestId } = renderWithProviders(
				<IconButton testID={testID} variant={variant} icon="plus" inverted />
			);
			expect(getByTestId(`${testID}-container`)).toBeTruthy();

			expect(getByTestId(`${testID}-icon`)).toHaveStyle({
				color: iconColor,
			});
		}
	);
});
