import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { useComponentTheme } from '@hooks/use-theme.hook';
import {
	HeadingFontSizes,
	TextFontSizes,
} from '@theme/tokens/components/text-heading';
import { HStack } from '../../storybook/components/h-stack';
import { StoryWrapper } from '../../storybook/story-wrapper';
import { Heading } from './heading';
import { Text } from './text';

const HeadingStory: React.FC = () => {
	const theme = useComponentTheme('Heading');
	const sizes: HeadingFontSizes[] = [
		'xs',
		'sm',
		'md',
		'lg',
		'xl',
		'2xl',
		'3xl',
		'4xl',
	];
	return (
		<StoryWrapper title="Typography | Heading">
			<StoryWrapper.Session>
				{sizes.map((size) => (
					<Heading size={size} key={size}>
						{size}: {theme.sizes[size].style.fontSize}px
					</Heading>
				))}
			</StoryWrapper.Session>
			<StoryWrapper.Session inverted>
				{sizes.map((size) => (
					<Heading size={size} key={size} inverted>
						{size}: {theme.sizes[size].style.fontSize}px
					</Heading>
				))}
			</StoryWrapper.Session>
		</StoryWrapper>
	);
};

const SPACE = 32;

const TextStory: React.FC = () => {
	const textComponentTheme = useComponentTheme('Text');
	const sizes: TextFontSizes[] = [
		'2xs',
		'xs',
		'sm',
		'md',
		'lg',
		'xl',
		'2xl',
		'3xl',
		'4xl',
		'5xl',
		'6xl',
	];
	return (
		<StoryWrapper title="Typography | Text">
			<StoryWrapper.Session>
				<HStack space={SPACE}>
					<Text size="md">Regular</Text>
					<Text size="md">Medium </Text>
				</HStack>
				{sizes.map((size) => (
					<HStack space={SPACE} key={size}>
						<Text.Regular size={size}>
							{size}: {textComponentTheme.sizes[size].style.fontSize}px
						</Text.Regular>
						<Text.Medium size={size}>
							{size}: {textComponentTheme.sizes[size].style.fontSize}px
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
				{sizes.map((size) => (
					<HStack space={SPACE} key={size}>
						<Text.Regular size={size} inverted>
							{size}: {textComponentTheme.sizes[size].style.fontSize}px
						</Text.Regular>
						<Text.Medium size={size} inverted>
							{size}: {textComponentTheme.sizes[size].style.fontSize}px
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
