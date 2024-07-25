import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Heading } from '@components/typography/heading';
import { VStack } from 'native-base';
import { IVStackProps } from 'native-base/lib/typescript/components/primitives/Stack/VStack';

interface StoryWrapperProps {
	children: React.ReactNode;
	title: string;
}

interface StoryWrapperSessionProps extends IVStackProps {
	inverted?: boolean;
}

interface IStoryWrapper extends React.FC<StoryWrapperProps> {
	Session: React.FC<StoryWrapperSessionProps>;
}

export const StoryWrapper = (({ children, title }: StoryWrapperProps) => {
	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					padding: 20,
					borderBottomColor: '#707870',
					borderBottomWidth: StyleSheet.hairlineWidth,
				}}
			>
				<Heading size="lg">{title}</Heading>
			</View>
			<ScrollView
				style={{ flex: 1 }}
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'flex-start',
				}}
				keyboardDismissMode="interactive"
				keyboardShouldPersistTaps="handled"
			>
				{children}
			</ScrollView>
		</View>
	);
}) as IStoryWrapper;

const Session: React.FC<StoryWrapperSessionProps> = ({
	inverted = false,
	...props
}) => {
	return (
		<VStack
			space={1}
			alignItems="center"
			paddingY={10}
			background={inverted ? '#241249' : undefined}
			{...props}
		/>
	);
};

StoryWrapper.Session = Session;
