import React from 'react';
import { Button, ScrollView, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { AlertStatus } from '@theme';
import { StoryWrapper } from '../../storybook/story-wrapper';
import { useToast } from './provider';

const Space: React.FC<{ size: number }> = ({ size }) => (
	<View style={{ height: size }} />
);

const body = 'The quick brown fox jumps over the lazy dog';
export const Story = () => {
	const { present } = useToast();

	const displayToastWithTheme = (status: AlertStatus) => () => {
		present({
			title: `Alert ${status}`,
			status,
			body,
		});
	};

	return (
		<ScrollView style={{ width: '100%' }}>
			<View style={{ flex: 1, padding: 32, paddingTop: 16, width: '100%' }}>
				<Button
					title="Present with success status"
					onPress={displayToastWithTheme('success')}
				/>
				<Button
					title="Present with danger status"
					onPress={displayToastWithTheme('danger')}
				/>

				<Button
					title="Present with warning status"
					onPress={displayToastWithTheme('warning')}
				/>
				<Button
					title="Present with info status"
					onPress={displayToastWithTheme('info')}
				/>
				<Space size={46} />
			</View>
		</ScrollView>
	);
};

export const ToastDialogStory = () => (
	<StoryWrapper title="Feedback | Toast">
		<StoryWrapper.Session>
			<Story />
		</StoryWrapper.Session>
	</StoryWrapper>
);

storiesOf('Feedback', module).add('Toast', () => <ToastDialogStory />);
