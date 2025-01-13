import { StoryWrapper } from '../../storybook/story-wrapper';
import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { Text } from '@components/typography/text';
import { Checkbox } from './checkbox';
import { HStack } from '../../storybook/components/h-stack';

const SPACE_BETWEEN = 16;
const CheckboxStory = () => {
	const [checked, setChecked] = useState(false);
	const [invertedChecked, setInvertedChecked] = useState(false);
	const [focusedChecked, setFocusedChecked] = useState(false);
	const [invertedFocusedChecked, setFocusedInvertedChecked] = useState(false);

	return (
		<StoryWrapper title="Forms | Checkbox">
			<StoryWrapper.Session>
				<HStack space={SPACE_BETWEEN} marginBottom={5}>
					<Text>Default</Text>
					<Text>Default focused</Text>
				</HStack>
				<HStack space={SPACE_BETWEEN}>
					<Checkbox label="Checkbox" checked={checked} onChange={setChecked} />
					<Checkbox
						label="Checkbox"
						checked={focusedChecked}
						onChange={setFocusedChecked}
						focused
					/>
				</HStack>
			</StoryWrapper.Session>
			<StoryWrapper.Session inverted>
				<HStack space={SPACE_BETWEEN}>
					<Checkbox
						label="Checkbox"
						checked={invertedChecked}
						onChange={setInvertedChecked}
						inverted
					/>
					<Checkbox
						label="Checkbox"
						checked={invertedFocusedChecked}
						onChange={setFocusedInvertedChecked}
						focused
						inverted
					/>
				</HStack>
			</StoryWrapper.Session>
			<StoryWrapper.Session>
				<HStack space={SPACE_BETWEEN} marginBottom={5}>
					<Text>Disabled</Text>
					<Text>Disabled Selected</Text>
				</HStack>
				<HStack space={SPACE_BETWEEN}>
					<Checkbox label="Checkbox" disabled />
					<Checkbox label="Checkbox" disabled checked />
				</HStack>
			</StoryWrapper.Session>
			<StoryWrapper.Session inverted>
				<HStack space={SPACE_BETWEEN}>
					<Checkbox label="Checkbox" inverted disabled />
					<Checkbox label="Checkbox" inverted disabled checked />
				</HStack>
			</StoryWrapper.Session>
		</StoryWrapper>
	);
};

storiesOf('Forms', module).add('Checkbox', () => <CheckboxStory />);
