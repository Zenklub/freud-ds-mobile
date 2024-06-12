import React from 'react';
import { Text as RNText } from 'react-native';
import { HeadingProps } from './typography.types';
import { HeadingFontSize } from './typography-theme';
import { useTextStyle } from './use-text-style';

export const Heading: React.FC<HeadingProps> = ({
	color,
	fontSize = 'md',
	font = 'heading',
	customColor,
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
	inverted,
	style,
	children,
	...props
}) => {
	const textStyle = useTextStyle({
		color: color ?? inverted ? 'neutral.light.400' : 'neutral.dark.400',
		customColor,
		fontSizeMap: HeadingFontSize,
		fontSize,
		fontWeight,
		bold,
		semibold,
		lineHeight,
		font,
		textAlign,
		italic,
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
