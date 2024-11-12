import { DeepPartial } from '@helpers/deep-partial.interface';
import { ToastComponentTheme } from '@theme/tokens/components';

export const baseToastTheme: ToastComponentTheme = {
	containerHeight: 'spacing.lg',
	containerMarginTop: 'spacing.xxxs',
	alertContainer: {
		left: 'spacing.xxxs',
		right: 'spacing.xxxs',
	},
	animation: {
		duration: 'animation.durations.medium',
		easing: 'animation.easing.standard',
	},
	displayDuration: 5000,
	spaceBetween: 'spacing.nano',
};
export const baseToastDarkTheme: DeepPartial<ToastComponentTheme> = {};
