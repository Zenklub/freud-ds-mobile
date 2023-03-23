import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Heading } from './heading';
import { HStack, VStack } from 'native-base';
import { Text } from './text';

const headerSizesWithSize = [
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
		<View style={{ flex: 1 }}>
			<View
				style={{
					padding: 20,
					borderBottomColor: '#707870',
					borderBottomWidth: StyleSheet.hairlineWidth,
				}}
			>
				<Heading size="lg">Heading</Heading>
			</View>
			<ScrollView
				style={{ flex: 1 }}
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'flex-start',
				}}
			>
				<VStack space={1} alignItems="center" paddingY={10}>
					{headerSizesWithSize.map((item) => (
						<Heading size={item.size} key={item.size}>
							{item.size}: {item.fontSize}px
						</Heading>
					))}
				</VStack>
				<VStack
					space={1}
					alignItems="center"
					background="#241249"
					paddingY={10}
				>
					{headerSizesWithSize.map((item) => (
						<Heading size={item.size} inverted key={item.size}>
							{item.size}: {item.fontSize}px
						</Heading>
					))}
				</VStack>
			</ScrollView>
		</View>
	);
};

const textSizesWithSize = [
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
		<View style={{ flex: 1 }}>
			<View
				style={{
					padding: 20,
					borderBottomColor: '#707870',
					borderBottomWidth: StyleSheet.hairlineWidth,
				}}
			>
				<Heading size="lg">Text</Heading>
			</View>
			<ScrollView
				style={{ flex: 1 }}
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'flex-start',
				}}
			>
				<VStack space={1} alignItems="center" paddingY={10}>
					<HStack space="xl">
						<Text fontSize="md">Regular</Text>
						<Text fontSize="md">Medium </Text>
					</HStack>
					{textSizesWithSize.map((item) => (
						<HStack space="xl" key={item.size}>
							<Text fontSize={item.size}>
								{item.size}: {item.fontSize}px
							</Text>
							<Text fontSize={item.size} fontWeight="medium">
								{item.size}: {item.fontSize}px
							</Text>
						</HStack>
					))}
				</VStack>
				<VStack
					space={1}
					alignItems="center"
					background="#241249"
					paddingY={10}
				>
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
							<Text fontSize={item.size} inverted>
								{item.size}: {item.fontSize}px
							</Text>
							<Text fontSize={item.size} inverted fontWeight="medium">
								{item.size}: {item.fontSize}px
							</Text>
						</HStack>
					))}
				</VStack>
			</ScrollView>
		</View>
	);
};

storiesOf('Typography', module)
	.add('Heading', () => <HeadingStory />)
	.add('Text', () => <TextStory />);
