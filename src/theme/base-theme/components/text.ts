import { DeepPartial } from '@helpers/deep-partial.interface';
import { TextComponentTheme } from '@theme/tokens/components/text-heading';

export const baseTextTheme: TextComponentTheme = {
	color: 'color.neutral.black',
	sizes: {
		'2xs': {
			fontSize: 'typography.fontSizes.4xs',
			lineHeight: 'typography.lineHeights.xs',
			fontWeight: 'typography.fontWeights.regular',
			fontFamily: 'typography.families.body',
		},
		xs: {
			fontSize: 'typography.fontSizes.3xs',
			lineHeight: 'typography.lineHeights.xs',
			fontWeight: 'typography.fontWeights.regular',
			fontFamily: 'typography.families.body',
		},
		sm: {
			fontSize: 'typography.fontSizes.2xs',
			lineHeight: 'typography.lineHeights.xs',
			fontWeight: 'typography.fontWeights.regular',
			fontFamily: 'typography.families.body',
		},
		md: {
			fontSize: 'typography.fontSizes.xs',
			lineHeight: 'typography.lineHeights.md',
			fontWeight: 'typography.fontWeights.regular',
			fontFamily: 'typography.families.body',
		},
		lg: {
			fontSize: 'typography.fontSizes.sm',
			lineHeight: 'typography.lineHeights.md',
			fontWeight: 'typography.fontWeights.regular',
			fontFamily: 'typography.families.body',
		},
		xl: {
			fontSize: 'typography.fontSizes.md',
			lineHeight: 'typography.lineHeights.md',
			fontWeight: 'typography.fontWeights.regular',
			fontFamily: 'typography.families.body',
		},
		'2xl': {
			fontSize: 'typography.fontSizes.lg',
			lineHeight: 'typography.lineHeights.md',
			fontWeight: 'typography.fontWeights.regular',
			fontFamily: 'typography.families.body',
		},
		'3xl': {
			fontSize: 'typography.fontSizes.xl',
			lineHeight: 'typography.lineHeights.md',
			fontWeight: 'typography.fontWeights.regular',
			fontFamily: 'typography.families.body',
		},
		'4xl': {
			fontSize: 'typography.fontSizes.2xl',
			lineHeight: 'typography.lineHeights.md',
			fontWeight: 'typography.fontWeights.regular',
			fontFamily: 'typography.families.body',
		},
		'5xl': {
			fontSize: 'typography.fontSizes.3xl',
			lineHeight: 'typography.lineHeights.md',
			fontWeight: 'typography.fontWeights.regular',
			fontFamily: 'typography.families.body',
		},
		'6xl': {
			fontSize: 'typography.fontSizes.4xl',
			lineHeight: 'typography.lineHeights.md',
			fontWeight: 'typography.fontWeights.regular',
			fontFamily: 'typography.families.body',
		},
	},
};

export const baseTextDarkTheme: DeepPartial<TextComponentTheme> = {
	color: 'color.neutral.white',
};
