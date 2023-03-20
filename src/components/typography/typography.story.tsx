import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ScrollView, View } from 'react-native';

import { FreudHeading } from './heading';

const HeadingStory: React.FC = () => {
	return (
		<ScrollView
			contentContainerStyle={{
				flex: 1,
				justifyContent: 'flex-start',
			}}
		>
			<View
				style={{
					flexShrink: 1,
					padding: 16,
				}}
			>
				<FreudHeading>Heading text</FreudHeading>
			</View>
		</ScrollView>
	);
};

storiesOf('Typography', module).add('Heading', () => <HeadingStory />);
