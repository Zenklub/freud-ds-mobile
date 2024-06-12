import { StoryWrapper } from '../../storybook/story-wrapper';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { HStack } from 'native-base';
import { Text } from '@components/typography/text';
import { IconButton } from '@components/icon-button/icon-button';
import { IconButtonProps } from '@components/icon-button/icon-button.types';

const sizes = ['lg', 'md', 'sm', 'xs'] as const;
const variants = ['solid', 'outline', 'ghost'] as const;

const renderButtonSizes = (
	size: 'lg' | 'md' | 'sm' | 'xs',
	inverted: boolean,
	extraProps: Partial<IconButtonProps> = {},
	key = 'default'
) => {
	const renderButton = (variant: 'solid' | 'outline' | 'ghost') => {
		return (
			<IconButton
				size={size}
				variant={variant}
				inverted={inverted}
				key={`${key}-${variant}`}
				icon="plus"
				{...extraProps}
			/>
		);
	};

	return (
		<HStack
			width="100%"
			justifyContent="space-around"
			key={`${key}-${size}-${inverted}`}
		>
			{variants.map(renderButton)}
		</HStack>
	);
};

const IconButtonStory = () => {
	const renderSession = (inverted: boolean) => {
		return (
			<StoryWrapper.Session
				alignItems={undefined}
				paddingX={3}
				inverted={inverted}
				key={`${inverted}`}
			>
				<HStack width="100%" justifyContent="space-around">
					<Text inverted={inverted}>Solid</Text>
					<Text inverted={inverted}>Outline</Text>
					<Text inverted={inverted}>Ghost</Text>
				</HStack>
				{sizes.map((size) => renderButtonSizes(size, inverted))}

				<Text style={{ marginTop: 16 }} inverted={inverted}>
					Disabled
				</Text>
				{sizes.map((size) =>
					renderButtonSizes(size, inverted, { disabled: true }, 'disabled')
				)}
			</StoryWrapper.Session>
		);
	};

	return (
		<StoryWrapper title="Forms | Icon Button">
			{renderSession(false)}
			{renderSession(true)}
		</StoryWrapper>
	);
};

storiesOf('Forms', module).add('Icon Buttons', () => <IconButtonStory />);
