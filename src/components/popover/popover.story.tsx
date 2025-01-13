import { Text } from '@components/typography/text';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { StoryWrapper } from '../../storybook/story-wrapper';
import { Popover } from './popover';

const Space: React.FC<{ size: number }> = ({ size }) => (
	<View style={{ height: size }} />
);

const TargetContent = () => (
	<View
		style={{
			backgroundColor: '#222222',
			width: 100,
			alignItems: 'center',
		}}
	>
		<Text color="#ffffff">Click me</Text>
	</View>
);

export const Story = () => {
	return (
		<View
			style={{
				flex: 1,
				padding: 32,
				paddingTop: 16,
				width: '100%',
				alignItems: 'center',
			}}
		>
			<Text size="lg">Popover top</Text>

			<Space size={16} />
			<Popover content="Hello" placement="top">
				<TargetContent />
			</Popover>
			<Space size={36} />
			<Text size="lg">Popover bottom</Text>

			<Space size={16} />
			<Popover content="Hello" placement="bottom">
				<TargetContent />
			</Popover>

			<Space size={36} />
			<Text size="lg">Popover left</Text>
			<Popover content="Hello" placement="left">
				<TargetContent />
			</Popover>

			<Space size={36} />
			<Text size="lg">Popover right</Text>
			<Popover content="Hello" placement="right">
				<TargetContent />
			</Popover>
		</View>
	);
};

export const PopoverStory = () => (
	<StoryWrapper title="Feedback | Popover">
		<StoryWrapper.Session>
			<Story />
		</StoryWrapper.Session>
	</StoryWrapper>
);

storiesOf('Feedback', module).add('Popover', () => <PopoverStory />);
