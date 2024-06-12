import { IColors } from '@theme/base/colors';
import React from 'react';
import {
	TextStyle,
	TextProps as RNTextProps,
	AccessibilityProps,
} from 'react-native';

export type ITextFontSizes =
	| '2xs'
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl';

export type IHeadingFontSizes =
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl';

export type ILineHeight = 'sm' | 'md' | 'lg' | 'xl';
export type IFontWeight = 'regular' | 'semibold' | 'bold';
export type IFont = 'heading' | 'body' | 'mono' | 'customFont';

interface BaseTypographyProps extends AccessibilityProps {
	/**
	 * The line height of the text
	 * @default 'md'
	 */
	lineHeight?: ILineHeight;
	/**
	 * The font weight of the text
	 * @default 'regular'
	 */
	fontWeight?: IFontWeight;
	/**
	 * Font weight bold
	 *
	 * Has precedence over `fontWeight` and `semibold`
	 * @default false
	 */
	bold?: boolean;
	/**
	 * Font weight semibold
	 *
	 * Has precedence over `fontWeight`
	 * @default false
	 */
	semibold?: boolean;
	/**
	 * The color of the text
	 * @default 'neutral.dark.400'
	 */
	color?: IColors;
	/**
	 * Custom color for the text
	 */
	customColor?: string;
	/**
	 * Fonts used in the text
	 * @default 'body' for Text and 'heading' for Heading
	 */
	font?: IFont;
	/**
	 * Used to truncate text at a specific number of lines
	 */
	noOfLines?: number;
	/**
	 * If true, it will render an ellipsis when the text exceeds the width of the viewport or maxWidth set.
	 */
	isTruncated?: boolean;
	/**
	 * Used to make the text italic.
	 */
	italic?: boolean;
	/**
	 * Used to underline the text.
	 */
	underline?: boolean;
	/**
	 * A horizontal line through the center of the text.
	 */
	strikeThrough?: boolean;
	/**
	 * Style object for the text
	 */
	style?: TextStyle;
	/**
	 * If true, the text color will be inverted (only works with default colors)
	 * @default false
	 */
	inverted?: boolean;
	textAlign?: TextStyle['textAlign'];
	ellipsizeMode?: RNTextProps['ellipsizeMode'];
	testID?: string;
}

export interface TextProps extends BaseTypographyProps {
	/**
	 * The font size of the text
	 * @default 'md'
	 */
	fontSize?: ITextFontSizes;
}

export interface HeadingProps extends BaseTypographyProps {
	/**
	 * The font size of the text
	 * @default 'md'
	 */
	fontSize?: IHeadingFontSizes;
}

export interface IText extends React.FC<TextProps> {
	Regular: React.FC<TextProps>;
	Medium: React.FC<TextProps>;
}
