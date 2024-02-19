import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { renderWithProviders } from '../../helpers/testing';
import { Button } from '../button/button';
import { iconCharMap, iconSizeMap } from '../icon/constants';

const testID = 'button-test';

const sizes = ['sm', 'md', 'lg'] as const;
const sizesMap = {
	sm: 32,
	md: 40,
	lg: 48,
};

type VariantIconColorMap = {
	variant: 'solid' | 'outline' | 'ghost';
	iconColor: string;
};

const buttonVariantsIconColorsMap: VariantIconColorMap[] = [
	{ variant: 'solid', iconColor: '#FFFFFF' },
	{ variant: 'outline', iconColor: '#6732D1' },
	{ variant: 'ghost', iconColor: '#6732D1' },
];
const buttonInvertedVariantsIconColorsMap: VariantIconColorMap[] = [
	{ variant: 'solid', iconColor: '#6732D1' },
	{ variant: 'outline', iconColor: '#FFFFFF' },
	{ variant: 'ghost', iconColor: '#FFFFFF' },
];

describe('Forms > Button', () => {
	it('should render button correctly', () => {
		const { getByTestId } = renderWithProviders(
			<Button testID={testID}>Test</Button>
		);
		expect(getByTestId(testID)).toBeTruthy();
	});

	it.each(sizes)('should render button size "%s" correctly', (size) => {
		const { getByTestId } = renderWithProviders(
			<Button testID={testID} size={size}>
				Test
			</Button>
		);
		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveStyle({ height: sizesMap[size] });
	});

	it('should render default button size correctly', () => {
		const { getByTestId } = renderWithProviders(
			<Button testID={testID}>Test</Button>
		);
		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveStyle({ height: sizesMap.md });
	});

	it('should render icon button correctly', () => {
		const { getByTestId } = renderWithProviders(
			<Button testID={testID} icon="plus">
				Test
			</Button>
		);
		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(`${testID}-icon`)).toHaveTextContent(iconCharMap.plus);
	});

	it.each(sizes)('should render icon with correctly size "%s"', (size) => {
		const { getByTestId } = renderWithProviders(
			<Button testID={testID} icon="plus" size={size}>
				Test
			</Button>
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(`${testID}-icon`)).toHaveStyle({
			fontSize: iconSizeMap[size],
		});
	});

	it.each(buttonVariantsIconColorsMap)(
		'should render icon variant color "%s" correctly',
		({ variant, iconColor }) => {
			const { getByTestId } = renderWithProviders(
				<Button testID={testID} variant={variant} icon="plus">
					Test
				</Button>
			);
			expect(getByTestId(testID)).toBeTruthy();

			expect(getByTestId(`${testID}-icon`)).toHaveStyle({
				color: iconColor,
			});
		}
	);

	it.each(buttonInvertedVariantsIconColorsMap)(
		'should render inverted icon variant color "%s" correctly',
		({ variant, iconColor }) => {
			const { getByTestId } = renderWithProviders(
				<Button testID={testID} variant={variant} icon="plus" inverted>
					Test
				</Button>
			);
			expect(getByTestId(testID)).toBeTruthy();

			expect(getByTestId(`${testID}-icon`)).toHaveStyle({
				color: iconColor,
			});
		}
	);

	it('should persist text when loading', async () => {
		const { getByTestId, getByText } = renderWithProviders(
			<Button testID={testID} isLoading>
				Test
			</Button>
		);
		expect(getByTestId(testID)).toBeTruthy();
		expect(getByText('Test')).toBeTruthy();
	});

	it('should add children', async () => {
		const { getByTestId, getByText } = renderWithProviders(
			<Button testID={testID}>Test</Button>
		);
		expect(getByTestId(testID)).toBeTruthy();
		expect(getByText('Test')).toBeTruthy();
	});
});
