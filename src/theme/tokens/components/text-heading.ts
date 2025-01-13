import { ContainerThemeAggregate } from '@theme/theming.interface';
import {
	ColorsLeaves,
	TypographyFontFamilyLeaves,
	TypographyFontSizeLeaves,
	TypographyFontWeightLeaves,
	TypographyLineHeightLeaves,
} from '@theme/types';
import { HardCodedColor } from '../tokens';

export type TextFontSizes =
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

export type HeadingFontSizes =
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl';

export interface TypographyTheme {
	fontSize: TypographyFontSizeLeaves;
	/**
	 * Line height values are multipliers of the font size.
	 */
	lineHeight: TypographyLineHeightLeaves;
	fontWeight: TypographyFontWeightLeaves;
	fontFamily: TypographyFontFamilyLeaves;
}

export interface TextComponentTheme extends ContainerThemeAggregate {
	color: ColorsLeaves | HardCodedColor;
	sizes: Record<TextFontSizes, TypographyTheme>;
}
export interface HeadingComponentTheme extends ContainerThemeAggregate {
	color: ColorsLeaves | HardCodedColor;
	sizes: Record<HeadingFontSizes, TypographyTheme>;
}
