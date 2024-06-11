import { StoryWrapper } from '../../storybook/story-wrapper';
import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { FormControl } from '@components/form-control/form-control';
import { SelectOption } from './select.types';
import { Select } from './select';
import { useBooleanState } from '@hooks';
import { Text } from '@components/typography';
import { Modal, StyleSheet, View } from 'react-native';
import { Touchable } from '@components/touchable';
import { Icon } from '@components/icon';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const options: SelectOption[] = [
	{ label: 'Option 1', value: 'option1' },
	{ label: 'Option 2', value: 'option2' },
	{ label: 'Option 3', value: 'option3' },
	{ label: 'Option 4', value: 'option4' },
	{ label: 'Option 5', value: 'option5' },
];

interface CustomModalProps {
	options: SelectOption[];
	title: string;
	visible: boolean;
	selected?: string;
	onSelectedValueChange: (selected?: SelectOption['value']) => void;
	onDismiss: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({
	title,
	options,
	selected,
	onSelectedValueChange,
	onDismiss,
	visible = false,
}) => {
	const onPressHandler = (option: SelectOption) => {
		onSelectedValueChange(option.value);
	};

	const renderItem = (option: SelectOption) => {
		const isSelected = option.value === selected;
		return (
			<Touchable
				key={option.value}
				data={option}
				onPress={onPressHandler}
				style={modalStyles.item}
			>
				<View style={modalStyles.selectedIconContainer}>
					{isSelected ? <Icon size="sm" name="check" /> : null}
				</View>
				<Text style={isSelected ? modalStyles.textSelected : modalStyles.text}>
					{option.label}
				</Text>
			</Touchable>
		);
	};
	return (
		<Modal visible={visible} onDismiss={onDismiss} transparent>
			<View style={modalStyles.backdrop} onTouchEnd={onDismiss}>
				<View style={modalStyles.container}>
					<Text bold textAlign="center">
						{title}
					</Text>
					<View style={modalStyles.itemsContainer}>
						{options.map(renderItem)}
					</View>
				</View>
			</View>
		</Modal>
	);
};

const modalStyles = StyleSheet.create({
	backdrop: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		width: '70%',
		backgroundColor: 'white',
		paddingVertical: 16,
		borderRadius: 8,
	},
	itemsContainer: {
		display: 'flex',
		borderTopColor: '#E0E0E0',
		borderTopWidth: 1,
		paddingTop: 8,
	},
	item: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 4,
		paddingHorizontal: 16,
	},
	selectedIconContainer: {
		width: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#333',
	},
	textSelected: {
		color: '#6732D1',
	},
});

const CustomSelect: React.FC<{ nativeID: string; inverted?: boolean }> = ({
	nativeID,
	inverted = false,
}) => {
	const [selected, setSelected] = useState<SelectOption['value'] | undefined>(
		undefined
	);
	const modalVisibility = useBooleanState(false);

	return (
		<>
			<Select
				label="Custom Select"
				placeholder="Placeholder"
				helperText="Helper text"
				nativeID={nativeID}
				onPress={modalVisibility.toggle}
				options={options}
				selected={selected}
				inverted={inverted}
				customPicker
			/>
			<CustomModal
				title="Select an option"
				options={options}
				selected={selected}
				onDismiss={modalVisibility.setOff}
				onSelectedValueChange={setSelected}
				visible={modalVisibility.state}
			/>
		</>
	);
};

const SelectStory = () => {
	const [state, setState] = React.useState(
		{} as Record<string, string | undefined>
	);
	const setValue = (inputName: string) => (value?: string) => {
		setState((previous) => ({ ...previous, [inputName]: value }));
	};

	// const [nativeID, setNativeID] = React.useState<string>();

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setNativeID('select-native-id');
	// 	}, 10000);
	// }, []);

	return (
		<StoryWrapper title="Forms | Select">
			<FormControl>
				<StoryWrapper.Session paddingX={3} alignItems={undefined}>
					<Select
						label="Normal"
						helperText="Helper text"
						placeholder="Placeholder"
						nativeID="select-normal"
						selected={state.normal}
						onSelectedValueChange={setValue('normal')}
						options={options}
					/>
					<Select
						label="With error"
						helperText="Helper text"
						placeholder="Placeholder"
						nativeID="select-error"
						error="Some error"
						selected={state.error}
						onSelectedValueChange={setValue('error')}
						options={options}
					/>
					<Select
						label="Normal disabled"
						helperText="Helper text"
						placeholder="Placeholder"
						nativeID="select-disabled"
						selected={state.disabled}
						onSelectedValueChange={setValue('disabled')}
						options={options}
						disabled
					/>
					<Select
						label="With error disabled"
						helperText="Helper text"
						placeholder="Placeholder"
						nativeID="select-error-disabled"
						error="Some error"
						selected={state.errorDisabled}
						onSelectedValueChange={setValue('errorDisabled')}
						options={options}
						disabled
					/>
					<CustomSelect nativeID="select-custom" />
				</StoryWrapper.Session>
				<StoryWrapper.Session paddingX={3} alignItems={undefined} inverted>
					<Select
						label="Normal"
						helperText="Helper text"
						placeholder="Placeholder"
						nativeID="select-normal-inverted"
						selected={state.normalInverted}
						onSelectedValueChange={setValue('normalInverted')}
						options={options}
						inverted
					/>
					<Select
						label="With error"
						helperText="Helper text"
						placeholder="Placeholder"
						nativeID="select-error-inverted"
						error="Some error"
						selected={state.errorInverted}
						onSelectedValueChange={setValue('errorInverted')}
						options={options}
						inverted
					/>
					<Select
						label="Normal disabled"
						helperText="Helper text"
						placeholder="Placeholder"
						nativeID="select-disabled-inverted"
						selected={state.disabledInverted}
						onSelectedValueChange={setValue('disabledInverted')}
						options={options}
						disabled
						inverted
					/>
					<Select
						label="With error disabled"
						helperText="Helper text"
						placeholder="Placeholder"
						nativeID="select-error-disabled-inverted"
						error="Some error"
						selected={state.errorDisabledInverted}
						onSelectedValueChange={setValue('errorDisabledInverted')}
						options={options}
						disabled
						inverted
					/>
					<CustomSelect nativeID="select-custom-inverted" inverted />
				</StoryWrapper.Session>
			</FormControl>
		</StoryWrapper>
	);
};

storiesOf('Forms', module).add('Select', () => <SelectStory />);
