import { StoryWrapper } from '../../storybook/story-wrapper';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { FormControl } from '@components/form-control/form-control';
import { SelectOption } from './select.types';
import { Select } from './select';

const options: SelectOption[] = [
	{ label: 'Option 1', value: 'option1' },
	{ label: 'Option 2', value: 'option2' },
	{ label: 'Option 3', value: 'option3' },
	{ label: 'Option 4', value: 'option4' },
	{ label: 'Option 5', value: 'option5' },
];

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
				</StoryWrapper.Session>
			</FormControl>
		</StoryWrapper>
	);
};

storiesOf('Forms', module).add('Select', () => <SelectStory />);
