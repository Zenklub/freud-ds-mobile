import { DeepPartial } from '@helpers/deep-partial.interface';
import { HeadingComponentTheme } from '@theme/tokens/components/text-heading';

export const baseHeadingTheme: HeadingComponentTheme = {
	color: 'color.neutral.black',
	sizes: {
		xs: {
			fontSize: 'typography.fontSizes.2xs',
			lineHeight: 'typography.lineHeights.md',
			fontWeight: 'typography.fontWeights.bold',
			fontFamily: 'typography.families.heading',
		},
		sm: {
			fontSize: 'typography.fontSizes.xs',
			lineHeight: 'typography.lineHeights.md',
			fontWeight: 'typography.fontWeights.bold',
			fontFamily: 'typography.families.heading',
		},
		md: {
			fontSize: 'typography.fontSizes.md',
			lineHeight: 'typography.lineHeights.md',
			fontWeight: 'typography.fontWeights.bold',
			fontFamily: 'typography.families.heading',
		},
		lg: {
			fontSize: 'typography.fontSizes.lg',
			lineHeight: 'typography.lineHeights.md',
			fontWeight: 'typography.fontWeights.bold',
			fontFamily: 'typography.families.heading',
		},
		xl: {
			fontSize: 'typography.fontSizes.2xl', // 30,
			lineHeight: 'typography.lineHeights.md',
			fontWeight: 'typography.fontWeights.bold',
			fontFamily: 'typography.families.heading',
		},
		'2xl': {
			fontSize: 'typography.fontSizes.2xl', // 36
			lineHeight: 'typography.lineHeights.md',
			fontWeight: 'typography.fontWeights.bold',
			fontFamily: 'typography.families.heading',
		},
		'3xl': {
			fontSize: 'typography.fontSizes.3xl',
			lineHeight: 'typography.lineHeights.md',
			fontWeight: 'typography.fontWeights.bold',
			fontFamily: 'typography.families.heading',
		},
		'4xl': {
			fontSize: 'typography.fontSizes.4xl',
			lineHeight: 'typography.lineHeights.md',
			fontWeight: 'typography.fontWeights.bold',
			fontFamily: 'typography.families.heading',
		},
	},
};

export const baseHeadingDarkTheme: DeepPartial<HeadingComponentTheme> = {
	color: 'color.neutral.white',
};
