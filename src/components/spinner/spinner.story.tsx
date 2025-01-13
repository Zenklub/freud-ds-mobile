import { Spinner } from '@components/spinner/spinner';
import { Text } from '@components/typography/text';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { HStack } from '../../storybook/components/h-stack';
import { StoryWrapper } from '../../storybook/story-wrapper';

const sizes = ['small', 'large'] as const;

const SPACE_BETWEEN = 16;
const SpinnerStory = () => {
	return (
		<StoryWrapper title="Feedback | Spinner">
			<StoryWrapper.Session>
				<HStack space={SPACE_BETWEEN} marginBottom={5}>
					<Text>Small</Text>
					<Text>Large</Text>
				</HStack>
				<HStack space={SPACE_BETWEEN}>
					{sizes.map((size) => (
						<Spinner key={size} size={size} />
					))}
				</HStack>
			</StoryWrapper.Session>
			<StoryWrapper.Session inverted>
				<HStack space={SPACE_BETWEEN}>
					{sizes.map((size) => (
						<Spinner key={size} size={size} color="neutral.light.100" />
					))}
				</HStack>
			</StoryWrapper.Session>
		</StoryWrapper>
	);
};

storiesOf('Feedback', module).add('Spinner', () => <SpinnerStory />);
