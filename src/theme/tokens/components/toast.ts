import { AnimationAggregator } from '@theme/theming.interface';
import { SpacingLeaves } from '@theme/types';

export interface ToastComponentTheme {
	containerHeight: SpacingLeaves | number;
	containerMarginTop: SpacingLeaves | number;
	displayDuration: number;
	spaceBetween: SpacingLeaves | number;
	alertContainer: {
		top?: SpacingLeaves | number;
		left?: SpacingLeaves | number;
		right?: SpacingLeaves | number;
		bottom?: SpacingLeaves | number;
	};
	animation: AnimationAggregator;
}
