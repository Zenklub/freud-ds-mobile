import { StoryWrapper } from '../../storybook/story-wrapper';
import { Button } from './button';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { HStack } from 'native-base';
import { Text } from '@components/typography/text';
import { ButtonProps } from '@components/button/button.types';

const sizes = ['lg', 'md', 'sm'] as const;
const variants = ['solid', 'outline', 'ghost'] as const;

const renderButtonSizes = (
	size: 'lg' | 'md' | 'sm',
	inverted: boolean,
	extraProps: Partial<ButtonProps> = {},
	key = 'default'
) => {
	const renderButton = (variant: 'solid' | 'outline' | 'ghost') => {
		return (
			<Button
				size={size}
				variant={variant}
				inverted={inverted}
				key={`${key}-${variant}`}
				{...extraProps}
			>
				Button
			</Button>
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

const ButtonStory = () => {
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
					Width Icon
				</Text>
				{sizes.map((size) =>
					renderButtonSizes(size, inverted, { icon: 'plus' }, 'icon')
				)}
				<Text style={{ marginTop: 16 }} inverted={inverted}>
					Disabled
				</Text>
				{sizes.map((size) =>
					renderButtonSizes(size, inverted, { disabled: true }, 'disabled')
				)}

				<Text style={{ marginTop: 16 }} inverted={inverted}>
					Disabled Icon
				</Text>
				{sizes.map((size) =>
					renderButtonSizes(
						size,
						inverted,
						{ disabled: true, icon: 'plus' },
						'disabled-icon'
					)
				)}
				<Text style={{ marginTop: 16 }} inverted={inverted}>
					Loading
				</Text>
				{sizes.map((size) =>
					renderButtonSizes(size, inverted, { isLoading: true }, 'loading')
				)}
			</StoryWrapper.Session>
		);
	};

	return (
		<StoryWrapper title="Forms | Button">
			{renderSession(false)}
			{renderSession(true)}
		</StoryWrapper>
	);
};

storiesOf('Forms', module).add('Button', () => <ButtonStory />);
