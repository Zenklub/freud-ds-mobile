import { useExtractProps } from '@hooks/use-extract-props';
import { AccessibilityProps } from 'react-native';

export function useAccessibilityProps<P extends AccessibilityProps>(
	obj: P
): AccessibilityProps {
	const [props] = useExtractProps(obj, [
		'accessible',
		'accessibilityActions',
		'accessibilityLabel',
		'accessibilityRole',
		'accessibilityState',
		'accessibilityHint',
		'accessibilityValue',
		'onAccessibilityAction',
		'accessibilityLiveRegion',
		'importantForAccessibility',
		'accessibilityElementsHidden',
		'accessibilityViewIsModal',
		'onAccessibilityEscape',
		'onAccessibilityTap',
		'onMagicTap',
		'accessibilityIgnoresInvertColors',
	]);

	return props;
}
