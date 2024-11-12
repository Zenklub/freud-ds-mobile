import { DeepPartial } from '@helpers/deep-partial.interface';
import { TextInputComponentTheme } from '@theme/tokens/tokens';
import { baseInputDarkTheme, baseInputTheme } from './base-input-theme';

export const baseTextInputTheme: TextInputComponentTheme = {
	...baseInputTheme,
	base: {
		...baseInputTheme.base,
		placeholderColor: 'color.neutral.dark.200',
	},
};

export const baseTextInputDarkTheme: DeepPartial<TextInputComponentTheme> =
	baseInputDarkTheme;
