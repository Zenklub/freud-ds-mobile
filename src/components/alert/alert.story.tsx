import React from 'react';
import { Alert as RNAlert, ScrollView, View } from 'react-native';

import { Alert } from './alert';
import { Text } from '@components/typography';
import { StoryWrapper } from '../../storybook/story-wrapper';
import { storiesOf } from '@storybook/react-native';

const Space: React.FC<{ size: number }> = ({ size }) => (
	<View style={{ height: size }} />
);

const body = 'The quick brown fox jumps over the lazy dog';
export const Story = () => {
	const action = () => {
		RNAlert.alert('Alert with alert pressed');
	};

	return (
		<ScrollView style={{ width: '100%' }}>
			<View style={{ flex: 1, padding: 32, paddingTop: 16, width: '100%' }}>
				<Text size="lg">Alerts Status</Text>
				<View>
					<Space size={16} />
					<Alert
						title="Alert with success status"
						body={body}
						status="success"
					/>
					<Space size={16} />
					<Alert
						title="Alert with warning status"
						body={body}
						status="warning"
					/>
					<Space size={16} />
					<Alert title="Alert with danger status" body={body} status="danger" />
					<Space size={16} />
					<Alert title="Alert with info status" body={body} status="info" />
				</View>

				<Space size={36} />
				<Text size="lg">NOT dismissible</Text>
				<Space size={16} />
				<Alert title="Alert with title" status="success" dismissible={false} />

				<Space size={36} />
				<Text size="lg">Just title</Text>
				<Space size={16} />
				<Alert title="Alert with title" status="warning" />
				<Space size={36} />
				<Text size="lg">With Action Callback</Text>
				<Space size={16} />
				<Alert
					title="Alert with action"
					body="The quick brown fox jumps over the lazy dog"
					status="info"
					action={action}
				/>
			</View>
		</ScrollView>
	);
};

export const ToastDialogStory = () => (
	<StoryWrapper title="Feedback | Alert">
		<StoryWrapper.Session>
			<Story />
		</StoryWrapper.Session>
	</StoryWrapper>
);

storiesOf('Feedback', module).add('Alert', () => <ToastDialogStory />);
