import { StoryWrapper } from '../../storybook/story-wrapper';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { InputText } from '@components/input-text/input-text';
import { FormControl } from '@components/form-control/form-control';
import { Alert } from 'react-native';

const InputTextStory = () => {
	const [state, setState] = React.useState({} as Record<string, string>);
	const setValue = (inputName: string) => (value: string) => {
		setState((previous) => ({ ...previous, [inputName]: value }));
	};

	const onIconPressHandler = (inputName: string) => () => {
		Alert.alert(`Icon pressed for ${inputName}`);
	};

	return (
		<StoryWrapper title="Forms | InputText">
			<FormControl>
				<StoryWrapper.Session paddingX={3} alignItems={undefined}>
					<InputText
						label="Normal"
						helperText="Helper text"
						iconName="bookmark"
						placeholder="Placeholder"
						value={state.normal}
						onChangeText={setValue('normal')}
						onIconPress={onIconPressHandler('normal')}
					/>
					<InputText
						label="With error"
						helperText="Helper text"
						iconName="bookmark"
						placeholder="Placeholder"
						error="Some error"
						value={state.error}
						onChangeText={setValue('error')}
						onIconPress={onIconPressHandler('error')}
					/>
					<InputText
						label="Normal disbabled"
						helperText="Helper text"
						iconName="bookmark"
						placeholder="Placeholder"
						value={state.disabled}
						onChangeText={setValue('disabled')}
						onIconPress={onIconPressHandler('disabled')}
						disabled
					/>
					<InputText
						label="With error disbabled"
						helperText="Helper text"
						placeholder="Placeholder"
						iconName="bookmark"
						error="Some error"
						value={state.errorDisabled}
						onChangeText={setValue('errorDisabled')}
						onIconPress={onIconPressHandler('errorDisabled')}
						disabled
					/>
				</StoryWrapper.Session>
				<StoryWrapper.Session paddingX={3} alignItems={undefined} inverted>
					<InputText
						label="Normal"
						helperText="Helper text"
						placeholder="Placeholder"
						iconName="bookmark"
						value={state.normalInverted}
						onChangeText={setValue('normalInverted')}
						onIconPress={onIconPressHandler('normalInverted')}
						inverted
					/>
					<InputText
						label="With error"
						helperText="Helper text"
						placeholder="Placeholder"
						error="Some error"
						iconName="bookmark"
						value={state.errorInverted}
						onChangeText={setValue('errorInverted')}
						onIconPress={onIconPressHandler('errorInverted')}
						inverted
					/>
					<InputText
						label="Normal disbabled"
						helperText="Helper text"
						placeholder="Placeholder"
						iconName="bookmark"
						value={state.disabledInverted}
						onChangeText={setValue('disabledInverted')}
						onIconPress={onIconPressHandler('disabledInverted')}
						disabled
						inverted
					/>
					<InputText
						label="With error disbabled"
						helperText="Helper text"
						placeholder="Placeholder"
						error="Some error"
						iconName="bookmark"
						value={state.errorDisabledInverted}
						onChangeText={setValue('errorDisabledInverted')}
						onIconPress={onIconPressHandler('errorDisabledInverted')}
						disabled
						inverted
					/>
				</StoryWrapper.Session>
			</FormControl>
		</StoryWrapper>
	);
};

storiesOf('Forms', module).add('InputText', () => <InputTextStory />);
