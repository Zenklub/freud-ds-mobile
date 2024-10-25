import '@testing-library/jest-native/extend-expect';
import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import { act } from 'react-test-renderer';
import { renderWithProvidersAndFormControl } from '../../helpers/testing';
import { TextInput } from '../text-input';

const testID = 'input-text-test';

describe('Forms > TextInput', () => {
	it('should render correctly', () => {
		const { getByTestId } = renderWithProvidersAndFormControl(
			<TextInput testID={testID} value="Test" />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveProp('value', 'Test');
	});

	it('should render correctly with label', () => {
		const { getByTestId } = renderWithProvidersAndFormControl(
			<TextInput testID={testID} label="Label" />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(`${testID}-label`)).toHaveTextContent('Label');
	});

	it('should render correctly with helper text', () => {
		const { getByTestId } = renderWithProvidersAndFormControl(
			<TextInput testID={testID} helperText="Helper text" />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(`${testID}-helper-text`)).toHaveTextContent(
			'Helper text'
		);
	});

	it('should render correctly with error', () => {
		const { getByTestId } = renderWithProvidersAndFormControl(
			<TextInput testID={testID} error="Error" />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(`${testID}-error-text`)).toHaveTextContent('Error');
	});

	it('should render correctly with icon', () => {
		const { getByTestId } = renderWithProvidersAndFormControl(
			<TextInput testID={testID} iconName="bookmark" />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(`${testID}-icon`)).toBeTruthy();
	});

	it('should render correctly with placeholder', () => {
		const { getByTestId } = renderWithProvidersAndFormControl(
			<TextInput testID={testID} placeholder="Placeholder" />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveProp('placeholder', 'Placeholder');
	});

	it('should render disabled correctly', () => {
		const { getByTestId } = renderWithProvidersAndFormControl(
			<TextInput testID={testID} disabled />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveProp('editable', false);
	});

	it('should render enabled correctly', () => {
		const { getByTestId } = renderWithProvidersAndFormControl(
			<TextInput testID={testID} />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveProp('editable', true);
	});

	it('should render not editable correctly', () => {
		const { getByTestId } = renderWithProvidersAndFormControl(
			<TextInput testID={testID} editable={false} />
		);

		expect(getByTestId(testID)).toBeTruthy();
		expect(getByTestId(testID)).toHaveProp('editable', false);
	});

	it('should respond to onChangeText', async () => {
		const onChangeText = jest.fn();
		const { getByTestId } = renderWithProvidersAndFormControl(
			<TextInput testID={testID} value="Test" onChangeText={onChangeText} />
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
			<TextInput
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
