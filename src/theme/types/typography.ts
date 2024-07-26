// @ts-ignore

export type IFontWeight =
	| 'thin'
	| 'light'
	| 'regular'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'extrabold'
	| 'black';

export type IFont = 'heading' | 'body';

export interface FontSizeBaseMap {
	fontSize: number;
	lineHeight: number;
	fontWeight: IFontWeight;
	fontFamily: IFont;
}

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

export function isTextFontSizes(value: string): value is TextFontSizes {
	return [
		'2xs',
		'xs',
		'sm',
		'md',
		'lg',
		'xl',
		'2xl',
		'3xl',
		'4xl',
		'5xl',
		'6xl',
	].includes(value);
}

export function isHeadingFontSizes(value: string): value is HeadingFontSizes {
	return ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'].includes(value);
}

export type TextSizesTheme = Record<TextFontSizes, FontSizeBaseMap>;
export type HeadingSizesTheme = Record<HeadingFontSizes, FontSizeBaseMap>;

export type FontNameWeightMap = Record<IFontWeight, string>;

export interface TypographyTheme {
	fonts: Record<IFont, FontNameWeightMap>;
	text: TextSizesTheme;
	heading: HeadingSizesTheme;
	fontWeights: Record<IFontWeight, string>;
}
