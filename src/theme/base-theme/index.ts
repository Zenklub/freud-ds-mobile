import { Theme } from '@theme/types';
import { baseBordersTheme } from './borders';
import { baseThemeColors } from './colors';
import { baseButtonTheme } from './components/buttons';
import { baseIconButtonTheme } from './components/icon-buttons';
import { baseTextInputTheme } from './components/text-input';
import { baseThemeOpacity } from './opacity';
import { baseThemeRadii } from './radius';
import { baseShadowTheme } from './shadows';
import { baseSizesTheme } from './sizes';
import { baseSpacingTheme } from './space';
import { baseThemeTypography } from './typography';

export const baseTheme: Theme = {
	color: baseThemeColors,
	opacity: baseThemeOpacity,
	radii: baseThemeRadii,
	size: baseSizesTheme,
	border: baseBordersTheme,
	spacing: baseSpacingTheme,
	shadow: baseShadowTheme,
	typography: baseThemeTypography,
	components: {
		Button: baseButtonTheme,
		IconButton: baseIconButtonTheme,
		TextInput: baseTextInputTheme,
	},
};
