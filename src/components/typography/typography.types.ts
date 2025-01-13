import { ContainerProps } from '@components/view';
import {
	ColorsPathOrHardCoded,
	FontSize,
	FontWeight,
	LineHeight,
} from '@theme';
import {
	HeadingFontSizes,
	TextFontSizes,
} from '@theme/tokens/components/text-heading';
import React from 'react';
import {
	AccessibilityProps,
	TextProps as RNTextProps,
	TextStyle,
} from 'react-native';

export interface BaseTypographyStyleProps extends ContainerProps {
	color?: ColorsPathOrHardCoded;
	fontSize?: number | FontSize;
	lineHeight?: LineHeight | number;
	fontFamily?: string;
	textAlign?: 'left' | 'center' | 'right';
	italic?: boolean;
	underline?: boolean;
	strikeThrough?: boolean;
	isTruncated?: boolean;
	ellipsis?: boolean;
	noWrap?: boolean;
	overflow?: TextStyle['overflow'];

	style?: TextStyle;

	/**
	 * Invert default the text color if no color is provided
	 */
	inverted?: boolean;

	// Font weight
	fontWeight?: FontWeight;
	thin?: boolean;
	light?: boolean;
	regular?: boolean;
	medium?: boolean;
	semibold?: boolean;
	bold?: boolean;
	extrabold?: boolean;
	black?: boolean;
}

export type BaseTypographyProps = BaseTypographyStyleProps &
	ContainerProps &
	AccessibilityProps &
	RNTextProps;

export type TextProps = BaseTypographyProps & {
	/**
	 * The font size of the text
	 * @default 'md'
	 */
	size?: TextFontSizes;
};

export type HeadingProps = BaseTypographyProps & {
	/**
	 * The font size of the text
	 * @default 'md'
	 */
	size?: HeadingFontSizes;
};

export interface IText extends React.FC<TextProps> {
	Regular: React.FC<TextProps>;
	Medium: React.FC<TextProps>;
}
