import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Heading } from './heading';
import { HStack } from 'native-base';
import { Text } from './text';
import { StoryWrapper } from '../../storybook/story-wrapper';
import { IHeadingFontSizes, ITextFontSizes } from './typography.types';

const headerSizesWithSize: { size: IHeadingFontSizes; fontSize: number }[] = [
	{ size: 'xs', fontSize: 14 },
	{ size: 'sm', fontSize: 16 },
	{ size: 'md', fontSize: 20 },
	{ size: 'lg', fontSize: 24 },
	{ size: 'xl', fontSize: 30 },
	{ size: '2xl', fontSize: 36 },
	{ size: '3xl', fontSize: 48 },
	{ size: '4xl', fontSize: 60 },
];

const HeadingStory: React.FC = () => {
	return (
		<StoryWrapper title="Typography | Heading">
			<StoryWrapper.Session>
				{headerSizesWithSize.map((item) => (
					<Heading fontSize={item.size} key={item.size}>
						{item.size}: {item.fontSize}px
					</Heading>
				))}
			</StoryWrapper.Session>
			<StoryWrapper.Session inverted>
				{headerSizesWithSize.map((item) => (
					<Heading fontSize={item.size} inverted key={item.size}>
						{item.size}: {item.fontSize}px
					</Heading>
				))}
			</StoryWrapper.Session>
		</StoryWrapper>
	);
};

const textSizesWithSize: { size: ITextFontSizes; fontSize: number }[] = [
	{ size: '2xs', fontSize: 10 },
	{ size: 'xs', fontSize: 12 },
	{ size: 'sm', fontSize: 14 },
	{ size: 'md', fontSize: 16 },
	{ size: 'lg', fontSize: 18 },
	{ size: 'xl', fontSize: 20 },
	{ size: '2xl', fontSize: 24 },
	{ size: '3xl', fontSize: 32 },
	{ size: '4xl', fontSize: 40 },
	{ size: '5xl', fontSize: 48 },
	{ size: '6xl', fontSize: 60 },
];

const TextStory: React.FC = () => {
	return (
		<StoryWrapper title="Typography | Text">
			<StoryWrapper.Session>
				<HStack space="xl">
					<Text fontSize="md">Regular</Text>
					<Text fontSize="md">Medium </Text>
				</HStack>
				{textSizesWithSize.map((item) => (
					<HStack space="xl" key={item.size}>
						<Text.Regular fontSize={item.size}>
							{item.size}: {item.fontSize}px
						</Text.Regular>
						<Text.Medium fontSize={item.size}>
							{item.size}: {item.fontSize}px
						</Text.Medium>
					</HStack>
				))}
			</StoryWrapper.Session>
			<StoryWrapper.Session inverted>
				<HStack space="xl">
					<Text fontSize="md" inverted>
						Regular
					</Text>
					<Text fontSize="md" inverted>
						Medium{' '}
					</Text>
				</HStack>
				{textSizesWithSize.map((item) => (
					<HStack space="xl" key={item.size}>
						<Text.Regular fontSize={item.size} inverted>
							{item.size}: {item.fontSize}px
						</Text.Regular>
						<Text.Medium fontSize={item.size} inverted>
							{item.size}: {item.fontSize}px
						</Text.Medium>
					</HStack>
				))}
			</StoryWrapper.Session>
		</StoryWrapper>
	);
};

storiesOf('Typography', module)
	.add('Heading', () => <HeadingStory />)
	.add('Text', () => <TextStory />);
