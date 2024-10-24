import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { renderWithProviders } from '../../helpers/testing';
import { Button } from '../button/button';
import { iconCharMap } from '../icon/constants';

const testID = 'button-test';

const sizes = ['sm', 'md', 'lg'] as const;
const sizesMap = {
	sm: 32,
	md: 40,
	lg: 48,
};

const iconSizeMap = {
	sm: 16,
	md: 20,
	lg: 24,
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
	it('should render button container correctly', () => {
		const { getByTestId } = renderWithProviders(
			<Button testID={testID}>Test</Button>
		);
		expect(getByTestId(`${testID}-container`)).toBeTruthy();
	});

	it.each(sizes)('should render button size "%s" correctly', (size) => {
		const { getByTestId } = renderWithProviders(
			<Button testID={testID} size={size} text="Button" />
		);

		expect(getByTestId(`${testID}-container`)).toHaveStyle({
			height: sizesMap[size],
		});
	});

	it('should render default button size correctly', () => {
		const { getByTestId } = renderWithProviders(
			<Button testID={testID} text="Button" />
		);

		expect(getByTestId(`${testID}-container`)).toHaveStyle({
			height: sizesMap.md,
		});
	});

	it('should render icon button correctly', () => {
		const { getByTestId } = renderWithProviders(
			<Button testID={testID} icon="plus" text="Button" />
		);
		expect(getByTestId(`${testID}-icon`)).toHaveTextContent(iconCharMap.plus);
	});

	it.each(sizes)('should render icon with correctly size "%s"', (size) => {
		const { getByTestId } = renderWithProviders(
			<Button testID={testID} icon="plus" size={size} text="Button" />
		);

		expect(getByTestId(`${testID}-icon`)).toHaveStyle({
			fontSize: iconSizeMap[size],
		});
	});

	it.each(buttonVariantsIconColorsMap)(
		'should render icon variant color "%s" correctly',
		({ variant, iconColor }) => {
			const { getByTestId } = renderWithProviders(
				<Button testID={testID} variant={variant} icon="plus" text="Button" />
			);

			expect(getByTestId(`${testID}-icon`)).toHaveStyle({
				color: iconColor,
			});
		}
	);

	it.each(buttonInvertedVariantsIconColorsMap)(
		'should render inverted icon variant color "%s" correctly',
		({ variant, iconColor }) => {
			const { getByTestId } = renderWithProviders(
				<Button
					testID={testID}
					variant={variant}
					icon="plus"
					text="Button"
					inverted
				/>
			);

			expect(getByTestId(`${testID}-icon`)).toHaveStyle({
				color: iconColor,
			});
		}
	);

	it('should persist text when loading', async () => {
		const { getByTestId } = renderWithProviders(
			<Button testID={testID} text="Button" isLoading />
		);
		expect(getByTestId(`${testID}-spinner`)).toBeTruthy();
	});

	it('should render text', async () => {
		const { getByTestId } = renderWithProviders(
			<Button testID={testID} text="Button" />
		);

		expect(getByTestId(`${testID}-text`)).toHaveTextContent('Button');
	});
});
