import { DeepPartial } from '@helpers/deep-partial.interface';
import { PopOverComponentTheme } from '@theme/tokens/components';

export const basePopoverTheme: PopOverComponentTheme = {
	backgroundColor: 'color.neutral.dark.300',
	border: {
		radius: 'radii.md',
	},
	padding: {
		vertical: 'spacing.quark',
		horizontal: 12,
	},
	shadow: 'shadow.300',
	spaceToStartAnimation: 'spacing.quark',
	backdropColor: 'transparent',
	arrow: {
		width: 10,
		height: 10,
	},
	text: {
		textSize: 'text.sm',
	},
	animation: {
		duration: 'animation.durations.fast',
		easing: 'animation.easing.standard',
	},
};

export const basePopoverDarkTheme: DeepPartial<PopOverComponentTheme> = {};
