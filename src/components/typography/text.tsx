import React from 'react';
import { Text as RNText } from 'react-native';
import { IText } from './typography.types';

import { TextFontSize } from './typography-theme';

import { useTextStyle } from './use-text-style';

export const Text: IText = ({
	fontSize = 'md',
	font = 'body',
	customColor,
	color,
	bold,
	semibold,
	fontWeight,
	lineHeight,
	noOfLines,
	isTruncated,
	italic,
	underline,
	strikeThrough,
	ellipsizeMode,
	textAlign,
	style,
	children,
	inverted,
	...props
}) => {
	const textStyle = useTextStyle({
		color: color ?? inverted ? 'neutral.light.400' : 'neutral.dark.400',
		customColor,
		fontSizeMap: TextFontSize,
		fontSize,
		fontWeight,
		bold,
		semibold,
		lineHeight,
		font,
		italic,
		textAlign,
		underline,
		strikeThrough,
		isTruncated,
	});

	return (
		<RNText
			style={[textStyle, style]}
			numberOfLines={noOfLines}
			ellipsizeMode={ellipsizeMode}
			{...props}
		>
			{children}
		</RNText>
	);
};

const TextMedium: IText['Medium'] = (props) => {
	return <Text {...props} fontWeight="semibold" />;
};

const TextRegular: IText['Regular'] = (props) => {
	return <Text {...props} fontWeight="regular" />;
};

Text.Medium = TextMedium;
Text.Regular = TextRegular;

Text.displayName = 'Text';
Text.Regular.displayName = 'Text.Regular';
Text.Medium.displayName = 'Text.Medium';
