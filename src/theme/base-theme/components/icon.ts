// @ts-ignore
import { DeepPartial } from '@helpers/deep-partial.interface';
import { IconComponentTheme } from '@theme/tokens/components/icon';

export const baseIconTheme: IconComponentTheme = {
	sizes: {
		base: {
			fontFamily: 'freud-icon',
			color: 'color.neutral.dark.400',
			lineHeight: 'typography.lineHeights.xs', // 1
		},
		xs: {
			fontSize: 'typography.fontSizes.2xs', // 14
		},
		sm: {
			fontSize: 'typography.fontSizes.xs', // 16
		},
		md: {
			fontSize: 'typography.fontSizes.lg', // 24
		},
		lg: {
			fontSize: 'typography.fontSizes.xl', // 32
		},
	},
};

export const baseIconDarkTheme: DeepPartial<IconComponentTheme> = {
	sizes: {
		base: {
			color: 'color.neutral.white',
		},
	},
};
