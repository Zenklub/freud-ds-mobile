import { PressableProps } from '@components/touchable';
import { useAccessibilityProps } from '@hooks/use-accessibility-props';
import { useExtractProps } from '@hooks/use-extract-props';

export function usePressableProps<T, P extends PressableProps<T>>(
	obj: P
): PressableProps<T> {
	const accessibilityProps = useAccessibilityProps(obj);

	const [props] = useExtractProps(obj, [
		'delayLongPress',
		'delayPressIn',
		'delayPressOut',
		'disabled',
		'hitSlop',
		'onBlur',
		'onFocus',
		'onLayout',
		'onLongPress',
		'onPress',
		'onPressIn',
		'onPressOut',
		'pressRetentionOffset',
		'touchSoundDisabled',
	]);

	return {
		...accessibilityProps,
		...props,
	};
}
