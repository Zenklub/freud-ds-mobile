import { DeepPartial } from '@helpers/deep-partial.interface';
import { SelectComponentTheme } from '@theme/tokens/components/select';
import { baseInputDarkTheme, baseInputTheme } from './base-input-theme';

export const baseSelectTheme: SelectComponentTheme = {
	...baseInputTheme,
	base: {
		...baseInputTheme.base,
		placeholderColor: 'color.neutral.dark.200',

		input: {
			...baseInputTheme.base.input,
			padding: {
				horizontal: 12,
				vertical: 6,
			},
		},
	},
};

export const baseSelectDarkTheme: DeepPartial<SelectComponentTheme> =
	baseInputDarkTheme;
