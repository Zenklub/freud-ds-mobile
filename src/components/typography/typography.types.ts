import { ContainerProps } from '@theme/container-props-style';
import { ColorsPathOrHardCoded } from '@theme/types/colors';
import {
	HeadingFontSizes,
	IFont,
	IFontWeight,
	TextFontSizes,
} from '@theme/types/typography';
import React from 'react';
import {
	TextStyle,
	TextProps as RNTextProps,
	AccessibilityProps,
} from 'react-native';

export interface BaseTypographyStyleProps extends ContainerProps {
	color?: ColorsPathOrHardCoded;
	font?: IFont;
	fontSize?: number;
	lineHeight?: number;
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
	fontWeight?: IFontWeight;
	thin?: boolean;
	light?: boolean;
	regular?: boolean;
	medium?: boolean;
	semibold?: boolean;
	bold?: boolean;
	extrabold?: boolean;
	black?: boolean;
}

type BaseTypographyProps = BaseTypographyStyleProps &
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
