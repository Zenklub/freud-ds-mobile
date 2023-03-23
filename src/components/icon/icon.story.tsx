import { StoryWrapper } from '../../storybook/story-wrapper';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { Icon } from '@components/icon/icon';
import { Text } from '@components/typography/text';
import { iconCharMap } from '@components/icon/constants';
import { IconName } from '@components/icon/types';

const keys = Object.keys(iconCharMap) as Array<IconName>;

const MARGIN = 5;
const IconStory = () => {
	const { width } = useWindowDimensions();

	const itensPerRow = 3;
	const itemWidth = (width - 10) / itensPerRow - MARGIN * (itensPerRow - 1);
	const renderIcon = (name: IconName) => {
		return (
			<View
				key={name}
				style={{
					width: itemWidth,
					alignItems: 'center',
					margin: MARGIN,
					borderWidth: StyleSheet.hairlineWidth,
					borderColor: '#252525',
					borderRadius: 8,
					padding: 8,
				}}
			>
				<View style={{ height: 34, justifyContent: 'center' }}>
					<Icon name={name} size="md" />
				</View>
				<Text lineBreakMode="tail" noOfLines={1}>
					{name}
				</Text>
			</View>
		);
	};

	return (
		<StoryWrapper title="Media and Icons | Icons">
			<StoryWrapper.Session alignItems={undefined}>
				<View
					style={{
						paddingHorizontal: 5,
						flex: 1,
						flexDirection: 'row',
						flexWrap: 'wrap',
					}}
				>
					{keys.map(renderIcon)}
				</View>
			</StoryWrapper.Session>
		</StoryWrapper>
	);
};

storiesOf('Media and Icons', module).add('Icons', () => <IconStory />);
