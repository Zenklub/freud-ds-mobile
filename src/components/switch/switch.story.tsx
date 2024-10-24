import { StoryWrapper } from '../../storybook/story-wrapper';
import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { Text } from '@components/typography/text';
import { Switch } from './switch';
import { HStack } from '../../storybook/components/h-stack';

const SPACE_BETWEEN = 16;
const SwitchStory = () => {
	const [checked, setChecked] = useState(false);
	const [invertedChecked, setInvertedChecked] = useState(false);

	return (
		<StoryWrapper title="Forms | Switch">
			<StoryWrapper.Session>
				<HStack space={SPACE_BETWEEN} marginBottom={5}>
					<Text>Default</Text>
					<Text>Disabled</Text>
					<Text>Disabled Selected</Text>
				</HStack>
				<HStack space={SPACE_BETWEEN}>
					<Switch checked={checked} onChange={setChecked} />
					<Switch disabled />
					<Switch disabled checked />
				</HStack>
			</StoryWrapper.Session>
			<StoryWrapper.Session inverted>
				<HStack space={SPACE_BETWEEN}>
					<Switch
						inverted
						checked={invertedChecked}
						onChange={setInvertedChecked}
					/>
					<Switch inverted disabled />
					<Switch inverted disabled checked />
				</HStack>
			</StoryWrapper.Session>
		</StoryWrapper>
	);
};

storiesOf('Forms', module).add('Switch', () => <SwitchStory />);
