import { calculateLineHeight } from '@helpers/calculate-line-height';
import { removeNullable } from '@helpers/object.helper';
import { useContainerPropsStyle, useCustomColorExtractor } from '@hooks';
import {
	useColorMode,
	useComponentTheme,
	useTokensLeaves,
} from '@hooks/use-theme';
import React, { useMemo } from 'react';
import {
	TextProps as RNTextProps,
	StyleProp,
	StyleSheet,
	Text,
	TextStyle,
} from 'react-native';
import {
	BaseTypographyProps,
	HeadingProps,
	TextProps,
} from './typography.types';

type TypographyComponentProps =
	| ({ family: 'body' } & TextProps)
	| ({ family: 'heading' } & HeadingProps);

export const TypographyComponent: React.FC<TypographyComponentProps> = ({
	testID,
	children,
	...props
}) => {
	const typographyProps = useTypographyProps(props);
	return (
		<Text {...typographyProps} testID={testID}>
			{children}
		</Text>
	);
};

const FONT_SIZE_FALLBACK = 16;

function useTypographyProps(props: TypographyComponentProps): RNTextProps {
	const { inverted, family = 'body', size = 'md' } = props;
	const colorMode = useColorMode(inverted);

	const componentTheme = useComponentTheme(
		family === 'body' ? 'Text' : 'Heading',
		colorMode
	);
	const [themeStyle, themeProps] = useMemo(() => {
		const { style: baseStyle, props: baseProps, sizes } = componentTheme;
		const { style: sizeStyle, props: sizeProps } = (sizes as any)[
			size
		] as typeof sizes['md'];

		const themeStyle = removeNullable(
			StyleSheet.flatten([
				baseStyle,
				sizeStyle,
				{
					fontSize: sizeStyle?.fontSize ?? FONT_SIZE_FALLBACK,
				},
			])
		);

		const themeProps = {
			...baseProps,
			...sizeProps,
		};

		return [themeStyle, themeProps];
	}, [componentTheme, size]);

	const fontSize = themeStyle.fontSize ?? FONT_SIZE_FALLBACK;

	const { style: styleOverride, ...overrideProps } =
		useTypographyPropsOverrides(props, fontSize);

	const styledProps: RNTextProps = useMemo(() => {
		return {
			...themeProps,
			...overrideProps,
			style: StyleSheet.flatten([themeStyle, styleOverride]),
		};
	}, [themeProps, overrideProps, themeStyle, styleOverride]);

	return styledProps;
}

function useTypographyPropsOverrides(
	props: TypographyComponentProps,
	baseFontSize: number
): RNTextProps {
	const {
		family,
		size = 'md',
		ellipsis,
		isTruncated,
		noWrap,
		numberOfLines: customNumberOfLines,
		fontWeight: customFontWeight,
		fontSize: customFontSize,
		lineHeight: customLineHeight,
		fontFamily: customFontFamily,
		color: customColor,
		style: customStyle,
		thin,
		light,
		regular,
		medium,
		semibold,
		bold,
		extrabold,
		black,
		textAlign,
		italic,
		underline,
		strikeThrough,
		overflow,
		inverted,
		...rest
	} = props;

	const [containerStyle] = useContainerPropsStyle(props);

	const leaves = useTokensLeaves();
	const customColorExtractor = useCustomColorExtractor();

	const textDecorationLine = useMemo(() => {
		if (underline && strikeThrough) return 'underline line-through';
		if (underline) return 'underline';
		if (strikeThrough) return 'line-through';
		return undefined;
	}, [underline, strikeThrough]);

	const numberOfLines = useMemo(() => {
		if (typeof customNumberOfLines !== 'undefined') return customNumberOfLines;
		return isTruncated || ellipsis || noWrap ? 1 : undefined;
	}, [customNumberOfLines, isTruncated, ellipsis, noWrap]);

	const fontWeight = useMemo(() => {
		const fontWeightName = getFontWeight(props);
		return fontWeightName
			? leaves[`typography.fontWeights.${fontWeightName}`]
			: undefined;
	}, [
		customFontWeight,
		thin,
		light,
		regular,
		medium,
		semibold,
		bold,
		extrabold,
		black,
	]);

	const fontSize = useMemo(() => {
		return (
			(typeof customFontSize === 'string'
				? leaves[`typography.fontSizes.${customFontSize}`]
				: customFontSize) ?? baseFontSize
		);
	}, [customFontSize, leaves, baseFontSize]);

	const lineHeight = useMemo(() => {
		let baseLineHeight =
			typeof customLineHeight === 'string'
				? leaves[`typography.lineHeights.${customLineHeight}`]
				: customLineHeight;

		return baseLineHeight
			? calculateLineHeight(baseLineHeight, fontSize)
			: undefined;
	}, [customLineHeight, fontSize, leaves]);

	const color = useMemo(() => {
		return customColor ? customColorExtractor(customColor) : undefined;
	}, [customColor, customColorExtractor]);

	const style = useMemo<StyleProp<TextStyle>>(() => {
		return removeNullable(
			StyleSheet.flatten<TextStyle>([
				containerStyle,
				{
					color,
					textDecorationLine,
					overflow,
					textAlign,
					fontWeight,
					fontSize,
					lineHeight,
					fontFamily: customFontFamily,
					fontStyle: italic ? 'italic' : undefined,
				},
				customStyle,
			])
		);
	}, [
		color,
		textDecorationLine,
		overflow,
		textAlign,
		fontWeight,
		fontSize,
		lineHeight,
		customFontFamily,
		italic,
		containerStyle,
		customStyle,
	]);

	return {
		...rest,
		style,
		numberOfLines,
	};
}

function getFontWeight(props: BaseTypographyProps) {
	if (props.fontWeight) {
		return props.fontWeight;
	}

	if (props.thin) {
		return 'thin';
	}
	if (props.light) {
		return 'light';
	}
	if (props.regular) {
		return 'regular';
	}
	if (props.medium) {
		return 'medium';
	}
	if (props.semibold) {
		return 'semibold';
	}
	if (props.bold) {
		return 'bold';
	}
	if (props.extrabold) {
		return 'extrabold';
	}
	if (props.black) {
		return 'black';
	}

	return undefined;
}
