import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { renderWithProvidersAndFormControl } from '../../helpers/testing';
import { InputText } from '../input-text/input-text';
import { act } from 'react-test-renderer';
import { fireEvent } from '@testing-library/react-native';

const testID = 'input-text-test';

describe('Forms > InputText', () => {
	it('should render correctly', () => {
		const { getByTestId } = renderWithProvidersAndFormControl(
			<InputText testID={testID} value="Test" />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveProp('value', 'Test');
	});

	it('should render correctly with label', () => {
		const { getByTestId } = renderWithProvidersAndFormControl(
			<InputText testID={testID} label="Label" />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(`${testID}-label`)).toHaveTextContent('Label');
	});

	it('should render correctly with helper text', () => {
		const { getByTestId } = renderWithProvidersAndFormControl(
			<InputText testID={testID} helperText="Helper text" />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(`${testID}-helper-text`)).toHaveTextContent(
			'Helper text'
		);
	});

	it('should render correctly with error', () => {
		const { getByTestId } = renderWithProvidersAndFormControl(
			<InputText testID={testID} error="Error" />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(`${testID}-helper-text`)).toHaveTextContent('Error');
	});

	it('should render correctly with icon', () => {
		const { getByTestId } = renderWithProvidersAndFormControl(
			<InputText testID={testID} iconName="bookmark" />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(`${testID}-icon`)).toBeTruthy();
	});

	it('should render correctly with placeholder', () => {
		const { getByTestId } = renderWithProvidersAndFormControl(
			<InputText testID={testID} placeholder="Placeholder" />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveProp('placeholder', 'Placeholder');
	});

	it('should render correctly with disabled', () => {
		const { getByTestId } = renderWithProvidersAndFormControl(
			<InputText testID={testID} disabled />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveProp('disabled', true);
	});

	it('should respond to onChangeText', async () => {
		const onChangeText = jest.fn();
		const { getByTestId } = renderWithProvidersAndFormControl(
			<InputText testID={testID} value="Test" onChangeText={onChangeText} />
		);

		await act(async () => {
			fireEvent.changeText(getByTestId(testID), 'Test 2');
		});

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveProp('value', 'Test');
		expect(onChangeText).toBeCalledWith('Test 2');
	});

	it('should respond to onIconPress', async () => {
		const onIconPress = jest.fn();
		const { getByTestId } = renderWithProvidersAndFormControl(
			<InputText
				testID={testID}
				iconName="bookmark"
				onIconPress={onIconPress}
			/>
		);

		await act(async () => {
			fireEvent.press(getByTestId(`${testID}-icon-container`));
		});

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(`${testID}-icon`)).toBeTruthy();
		expect(onIconPress).toBeCalled();
	});
});
