import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { baseThemeTypography } from '@theme/base-theme/typography';
import { HeadingFontSizes, TextFontSizes } from '@theme/tokens/typography';
import { HStack } from '../../storybook/components/h-stack';
import { StoryWrapper } from '../../storybook/story-wrapper';
import { Heading } from './heading';
import { Text } from './text';

const headerSizesWithSize: { size: HeadingFontSizes; fontSize: number }[] = [
	{ size: 'xs', fontSize: baseThemeTypography.heading.xs.fontSize },
	{ size: 'sm', fontSize: baseThemeTypography.heading.sm.fontSize },
	{ size: 'md', fontSize: baseThemeTypography.heading.md.fontSize },
	{ size: 'lg', fontSize: baseThemeTypography.heading.lg.fontSize },
	{ size: 'xl', fontSize: baseThemeTypography.heading.xl.fontSize },
	{ size: '2xl', fontSize: baseThemeTypography.heading['2xl'].fontSize },
	{ size: '3xl', fontSize: baseThemeTypography.heading['3xl'].fontSize },
	{ size: '4xl', fontSize: baseThemeTypography.heading['4xl'].fontSize },
];

const textSizesWithSize: { size: TextFontSizes; fontSize: number }[] = [
	{ size: '2xs', fontSize: baseThemeTypography.text['2xs'].fontSize },
	{ size: 'xs', fontSize: baseThemeTypography.text.xs.fontSize },
	{ size: 'sm', fontSize: baseThemeTypography.text.sm.fontSize },
	{ size: 'md', fontSize: baseThemeTypography.text.md.fontSize },
	{ size: 'lg', fontSize: baseThemeTypography.text.lg.fontSize },
	{ size: 'xl', fontSize: baseThemeTypography.text.xl.fontSize },
	{ size: '2xl', fontSize: baseThemeTypography.text['2xl'].fontSize },
	{ size: '3xl', fontSize: baseThemeTypography.text['3xl'].fontSize },
	{ size: '4xl', fontSize: baseThemeTypography.text['4xl'].fontSize },
	{ size: '5xl', fontSize: baseThemeTypography.text['5xl'].fontSize },
	{ size: '6xl', fontSize: baseThemeTypography.text['6xl'].fontSize },
];

const HeadingStory: React.FC = () => {
	return (
		<StoryWrapper title="Typography | Heading">
			<StoryWrapper.Session>
				{headerSizesWithSize.map((item) => (
					<Heading size={item.size} key={item.size}>
						{item.size}: {item.fontSize}px
					</Heading>
				))}
			</StoryWrapper.Session>
			<StoryWrapper.Session inverted>
				{headerSizesWithSize.map((item) => (
					<Heading size={item.size} key={item.size} inverted>
						{item.size}: {item.fontSize}px
					</Heading>
				))}
			</StoryWrapper.Session>
		</StoryWrapper>
	);
};

const SPACE = 32;

const TextStory: React.FC = () => {
	return (
		<StoryWrapper title="Typography | Text">
			<StoryWrapper.Session>
				<HStack space={SPACE}>
					<Text size="md">Regular</Text>
					<Text size="md">Medium </Text>
				</HStack>
				{textSizesWithSize.map((item) => (
					<HStack space={SPACE} key={item.size}>
						<Text.Regular size={item.size}>
							{item.size}: {item.fontSize}px
						</Text.Regular>
						<Text.Medium size={item.size}>
							{item.size}: {item.fontSize}px
						</Text.Medium>
					</HStack>
				))}
			</StoryWrapper.Session>
			<StoryWrapper.Session inverted>
				<HStack space={SPACE}>
					<Text size="md" inverted>
						Regular
					</Text>
					<Text size="md" inverted>
						Medium{' '}
					</Text>
				</HStack>
				{textSizesWithSize.map((item) => (
					<HStack space={SPACE} key={item.size}>
						<Text.Regular size={item.size} inverted>
							{item.size}: {item.fontSize}px
						</Text.Regular>
						<Text.Medium size={item.size} inverted>
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
