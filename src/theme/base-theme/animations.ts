import { AnimationTokens } from '@theme/tokens/tokens';
import { Easing } from 'react-native-reanimated';

export const baseThemeAnimation: AnimationTokens = {
	durations: {
		fast: 200,
		medium: 400,
		slow: 600,
	},
	easing: {
		standard: Easing.bezier(0.62, 0.01, 0.05, 1),
		decelerated: Easing.bezier(0.3, 0.75, 0.52, 1),
		accelerated: Easing.bezier(1, 0.01, 0.75, 1),
		sharp: Easing.bezier(0.4, 0.0, 0.6, 1),
	},
};
