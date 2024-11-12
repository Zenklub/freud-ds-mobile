import { renderHook } from '@testing-library/react-native';
import { useThemeProviderValues } from '../theme-provider-values.hook';

describe('Theme > ThemeProviderValuesHook', () => {
	it('should be defined', () => {
		const { result } = renderHook(() => useThemeProviderValues({}));

		expect(Object.keys(result.current.current)).toStrictEqual([
			'Alert',
			'Button',
			'IconButton',
			'TextInput',
			'Text',
			'Heading',
			'Icon',
			'Spinner',
			'Switch',
			'CheckBox',
			'Radio',
			'Toast',
			'Popover',
			'Select',
		]);
	});
});
