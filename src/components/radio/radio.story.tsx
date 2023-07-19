import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { StoryWrapper } from '../../storybook/story-wrapper';
import { Radio } from './radio';
import { HStack } from 'native-base';
import { Text } from '@components/typography/text';
import { View } from 'react-native';

const RadioStory = () => {
	const renderSession = (inverted: boolean) => {
		return (
			<StoryWrapper.Session
				alignItems={undefined}
				paddingX={3}
				inverted={inverted}
				key={`${inverted}`}
			>
				<HStack width="100%" justifyContent="space-around">
					<View>
						<Text inverted={inverted}>Default</Text>
						<Radio.Group initialValue="1">
							<Radio value="1" inverted={inverted}>
								Option 1
							</Radio>
							<Radio value="2" inverted={inverted}>
								Option 2
							</Radio>
							<Radio value="3" inverted={inverted}>
								Option 3
							</Radio>
						</Radio.Group>
					</View>
					<View>
						<Text inverted={inverted}>Focused</Text>
						<Radio.Group initialValue="1">
							<Radio value="1" inverted={inverted}>
								Option 1
							</Radio>
							<Radio value="2" inverted={inverted} isFocused>
								Option 2
							</Radio>
							<Radio value="3" inverted={inverted}>
								Option 3
							</Radio>
						</Radio.Group>
					</View>
					<View>
						<Text inverted={inverted}>Disabled</Text>
						<Radio.Group initialValue="1">
							<Radio value="1" inverted={inverted} disabled>
								Option 1
							</Radio>
							<Radio value="2" inverted={inverted} disabled>
								Option 2
							</Radio>
							<Radio value="3" inverted={inverted} disabled>
								Option 3
							</Radio>
						</Radio.Group>
					</View>
				</HStack>
			</StoryWrapper.Session>
		);
	};
	return (
		<StoryWrapper title="Forms | Radio">
			{renderSession(false)}
			{renderSession(true)}
		</StoryWrapper>
	);
};

storiesOf('Forms', module).add('Radio', () => <RadioStory />);
