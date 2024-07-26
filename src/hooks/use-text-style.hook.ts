import { conditionalFirstMatch } from '@helpers/conditional-first-match';
import {
	IFontWeight,
	HeadingFontSizes,
	TextFontSizes,
} from '@theme/types/typography';
import { useMemo } from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import { BaseTypographyStyleProps } from '@components/typography/typography.types';
import { ColorsPath } from '@theme/types/colors';
import { useContainerPropsStyle } from './use-container-style.hook';
import { useTheme } from './use-theme';
import { useTypographySizeTheme } from './use-typography-size-theme';
import { useColorTokenOrHardCoded } from './use-colors.hook';
import { calculateLineHeight } from '../helpers/calculate-line-height';

interface UseTypographyStyle<T extends BaseTypographyStyleProps> {
	style: TextStyle;
	rest: Exclude<T, keyof BaseTypographyStyleProps>;
}

export function useTypographyStyle<
	Type extends 'heading',
	Props extends BaseTypographyStyleProps
>(type: Type, size: HeadingFontSizes, props: Props): UseTypographyStyle<Props>;
export function useTypographyStyle<
	T extends 'text',
	Props extends BaseTypographyStyleProps
>(type: T, size: TextFontSizes, props: Props): UseTypographyStyle<Props>;
export function useTypographyStyle<
	T extends 'text' | 'heading',
	K extends TextFontSizes | HeadingFontSizes,
	Props extends BaseTypographyStyleProps
>(type: T, size: K, allProps: Props): UseTypographyStyle<Props> {
	const { style: containerStyle, rest: props } =
		useContainerPropsStyle(allProps);

	const {
		color: colorProp,
		fontFamily: fontFamilyProp,
		fontSize: fontSizeProp,
		lineHeight: lineHeightProp,
		overflow: overflowProp,
		style: styleProp,
		inverted,
		font,
		textAlign,
		italic,
		underline,
		strikeThrough,
		isTruncated,
		ellipsis,
		noWrap,
		fontWeight,
		thin,
		light,
		regular,
		medium,
		semibold,
		bold,
		extrabold,
		black,
		...rest
	} = props;

	const fallbackColor: ColorsPath = inverted
		? 'neutral.light.400'
		: 'neutral.dark.400';

	const color = useColorTokenOrHardCoded(
		colorProp ?? fallbackColor,
		fallbackColor
	);
	const baseStyle = useTypographySizeTheme(type as any, size);

	const typography = useTheme('typography');

	const fontWeightName = useMemo(() => {
		const first = conditionalFirstMatch<IFontWeight>({
			thin: thin,
			light: light,
			regular: regular,
			medium: medium,
			semibold: semibold,
			bold: bold,
			extrabold: extrabold,
			black: black,
		});

		if (first) {
			return first;
		}

		return fontWeight ?? baseStyle.fontWeight;
	}, [
		baseStyle.fontWeight,
		fontWeight,
		thin,
		light,
		regular,
		medium,
		semibold,
		bold,
		extrabold,
		black,
	]);

	const fontFamily = useMemo(() => {
		if (fontFamilyProp) {
			return fontFamilyProp;
		}

		const fontName = font ?? baseStyle.fontFamily ?? 'body';

		return typography.fonts[fontName][fontWeightName];
	}, [baseStyle.fontFamily, fontFamilyProp, font, typography.fonts]);

	const style: TextStyle = useMemo(() => {
		const fontSize = fontSizeProp ?? baseStyle.fontSize;
		const lineHeight = calculateLineHeight(
			lineHeightProp ?? baseStyle.lineHeight,
			fontSize
		);

		const fontWeight = typography.fontWeights[fontWeightName];

		let textDecorationLine: TextStyle['textDecorationLine'] = 'none';
		if (underline && strikeThrough) {
			textDecorationLine = 'underline line-through';
		} else if (underline) {
			textDecorationLine = 'underline';
		} else if (strikeThrough) {
			textDecorationLine = 'line-through';
		}

		const overflow = overflowProp ?? isTruncated ? 'hidden' : undefined;

		return StyleSheet.flatten([
			<TextStyle>{
				fontSize,
				lineHeight,
				fontWeight,
				fontFamily,
				textDecorationLine,
				overflow,
				color,
				textAlign: textAlign,
				fontStyle: italic ? 'italic' : 'normal',
				...containerStyle,
			},
			containerStyle,
			styleProp,
		]) as TextStyle;
	}, [
		baseStyle.fontSize,
		baseStyle.lineHeight,
		color,
		containerStyle,
		fontFamily,
		fontSizeProp,
		lineHeightProp,
		isTruncated,
		overflowProp,
		textAlign,
		italic,
		underline,
		strikeThrough,
		styleProp,
		fontWeight,
	]);

	return {
		style,
		rest: rest as Exclude<Props, keyof BaseTypographyStyleProps>,
	};
}
