import { Icon } from '@components/icon/icon';
import { Text } from '@components/typography/text';
import { storiesOf } from '@storybook/react-native';
import { IconName } from '@theme';
import { iconsNamesList } from '@theme/tokens/icons';
import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { StoryWrapper } from '../../storybook/story-wrapper';

const MARGIN = 5;
const IconStory = () => {
	const { width } = useWindowDimensions();

	const itemsPerRow = 3;
	const itemWidth = (width - 10) / itemsPerRow - MARGIN * (itemsPerRow - 1);
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
				<Text ellipsizeMode="tail" numberOfLines={1}>
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
					{iconsNamesList.map(renderIcon)}
				</View>
			</StoryWrapper.Session>
		</StoryWrapper>
	);
};

storiesOf('Media and Icons', module).add('Icons', () => <IconStory />);
