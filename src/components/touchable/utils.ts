import { Platform, TouchableNativeFeedback } from 'react-native';
import {
	TOUCHABLE_RIPPLE_COLOR_DARK,
	TOUCHABLE_RIPPLE_COLOR,
} from './constants';
import tinyColor from 'tinycolor2';

export const getBackground = (
	backgroundColor: string,
	borderless: boolean,
	rippleSize: number | undefined
) => {
	if (shouldUseRipple()) {
		const color = tinyColor(backgroundColor).isDark()
			? TOUCHABLE_RIPPLE_COLOR_DARK
			: TOUCHABLE_RIPPLE_COLOR;

		return TouchableNativeFeedback.Ripple(color, borderless, rippleSize);
	}

	return TouchableNativeFeedback.SelectableBackground();
};

export const shouldUseRipple = () =>
	Platform.OS === 'android' && Platform.Version >= 21;
