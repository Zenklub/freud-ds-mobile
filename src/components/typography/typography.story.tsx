import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ScrollView } from 'react-native';

import { FreudHeading } from './heading';
import { VStack } from 'native-base';

const HeadingStory: React.FC = () => {
	return (
		<ScrollView
			contentContainerStyle={{
				flex: 1,
				justifyContent: 'flex-start',
			}}
		>
			<VStack space={1} alignItems="center">
				<FreudHeading size="xs">xs 2</FreudHeading>
				<FreudHeading size="sm">sm</FreudHeading>
				<FreudHeading size="md">md</FreudHeading>
				<FreudHeading size="lg">lg</FreudHeading>
				<FreudHeading size="xl">xl</FreudHeading>
				<FreudHeading size="2xl">2xl</FreudHeading>
				<FreudHeading size="3xl">3xl</FreudHeading>
				<FreudHeading size="4xl">4xl</FreudHeading>
			</VStack>
		</ScrollView>
	);
};

storiesOf('Typography', module).add('Heading', () => <HeadingStory />);
