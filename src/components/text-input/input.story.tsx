import { storiesOf } from '@storybook/react-native';
import { SpacingSizes } from '@theme';
import React from 'react';
import { Alert } from 'react-native';
import { StoryWrapper } from '../../storybook/story-wrapper';
import { TextInput } from './input-text';

const marginTop: SpacingSizes = 'xxs';
const paddingX = 16;

const TextInputStory = () => {
	const [state, setState] = React.useState({} as Record<string, string>);
	const setValue = (inputName: string) => (value: string) => {
		setState((previous) => ({ ...previous, [inputName]: value }));
	};

	const onIconPressHandler = (inputName: string) => () => {
		Alert.alert(`Icon pressed for ${inputName}`);
	};

	return (
		<StoryWrapper title="Forms | TextInput">
			<StoryWrapper.Session paddingX={paddingX} alignItems={undefined}>
				<TextInput
					label="Normal"
					helperText="Helper text"
					iconName="bookmark"
					placeholder="Placeholder"
					value={state.normal}
					onChangeText={setValue('normal')}
					onIconPress={onIconPressHandler('normal')}
				/>
				<TextInput
					label="With error"
					helperText="Helper text"
					iconName="bookmark"
					placeholder="Placeholder"
					error="Some error"
					value={state.error}
					onChangeText={setValue('error')}
					onIconPress={onIconPressHandler('error')}
					mt={marginTop}
				/>
				<TextInput
					label="Normal disabled"
					helperText="Helper text"
					iconName="bookmark"
					placeholder="Placeholder"
					value={state.disabled}
					onChangeText={setValue('disabled')}
					onIconPress={onIconPressHandler('disabled')}
					mt={marginTop}
					disabled
				/>
				<TextInput
					label="With error disabled"
					helperText="Helper text"
					placeholder="Placeholder"
					iconName="bookmark"
					error="Some error"
					value={state.errorDisabled}
					onChangeText={setValue('errorDisabled')}
					onIconPress={onIconPressHandler('errorDisabled')}
					mt={marginTop}
					disabled
				/>
			</StoryWrapper.Session>
			<StoryWrapper.Session paddingX={paddingX} alignItems={undefined} inverted>
				<TextInput
					label="Normal"
					helperText="Helper text"
					placeholder="Placeholder"
					iconName="bookmark"
					value={state.normalInverted}
					onChangeText={setValue('normalInverted')}
					onIconPress={onIconPressHandler('normalInverted')}
					inverted
				/>
				<TextInput
					label="With error"
					helperText="Helper text"
					placeholder="Placeholder"
					error="Some error"
					iconName="bookmark"
					value={state.errorInverted}
					onChangeText={setValue('errorInverted')}
					onIconPress={onIconPressHandler('errorInverted')}
					mt={marginTop}
					inverted
				/>
				<TextInput
					label="Normal disabled"
					helperText="Helper text"
					placeholder="Placeholder"
					iconName="bookmark"
					value={state.disabledInverted}
					onChangeText={setValue('disabledInverted')}
					onIconPress={onIconPressHandler('disabledInverted')}
					mt={marginTop}
					disabled
					inverted
				/>
				<TextInput
					label="With error disabled"
					helperText="Helper text"
					placeholder="Placeholder"
					error="Some error"
					iconName="bookmark"
					value={state.errorDisabledInverted}
					onChangeText={setValue('errorDisabledInverted')}
					onIconPress={onIconPressHandler('errorDisabledInverted')}
					mt={marginTop}
					disabled
					inverted
				/>
			</StoryWrapper.Session>
		</StoryWrapper>
	);
};

storiesOf('Forms', module).add('TextInput', () => <TextInputStory />);
