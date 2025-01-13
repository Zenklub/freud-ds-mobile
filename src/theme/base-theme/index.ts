import { DeepPartial } from '@helpers/deep-partial.interface';
import { Theme, Tokens } from '@theme/types';
import { baseThemeAnimation } from './animations';
import { baseBordersTheme } from './borders';
import { baseThemeColors } from './colors';
import { baseAlertDarkTheme, baseAlertTheme } from './components/alert';
import { baseButtonDarkTheme, baseButtonTheme } from './components/buttons';
import {
	baseCheckBoxDarkTheme,
	baseCheckBoxTheme,
} from './components/checkbox';
import { baseHeadingDarkTheme, baseHeadingTheme } from './components/heading';
import { baseIconDarkTheme, baseIconTheme } from './components/icon';
import {
	baseIconButtonDarkTheme,
	baseIconButtonTheme,
} from './components/icon-buttons';
import { basePopoverDarkTheme, basePopoverTheme } from './components/popover';
import { baseRadioDarkTheme, baseRadioTheme } from './components/radio';
import { baseSelectDarkTheme, baseSelectTheme } from './components/select';
import { baseSpinnerDarkTheme, baseSpinnerTheme } from './components/spinner';
import { baseSwitchDarkTheme, baseSwitchTheme } from './components/switch';
import { baseTextDarkTheme, baseTextTheme } from './components/text';
import {
	baseTextInputDarkTheme,
	baseTextInputTheme,
} from './components/text-input';
import { baseToastDarkTheme, baseToastTheme } from './components/toast';
import { baseThemeOpacity } from './opacity';
import { baseThemeRadii } from './radius';
import { baseShadowTheme } from './shadows';
import { baseSizesTheme } from './sizes';
import { baseSpacingTheme } from './space';
import { baseThemeTypography } from './typography';

export const baseTokens: Tokens = {
	color: baseThemeColors,
	opacity: baseThemeOpacity,
	radii: baseThemeRadii,
	size: baseSizesTheme,
	border: baseBordersTheme,
	spacing: baseSpacingTheme,
	shadow: baseShadowTheme,
	typography: baseThemeTypography,
	animation: baseThemeAnimation,
};

export const baseTheme: Theme = {
	Alert: baseAlertTheme,
	Button: baseButtonTheme,
	IconButton: baseIconButtonTheme,
	TextInput: baseTextInputTheme,
	Text: baseTextTheme,
	Heading: baseHeadingTheme,
	Icon: baseIconTheme,
	Spinner: baseSpinnerTheme,
	Switch: baseSwitchTheme,
	CheckBox: baseCheckBoxTheme,
	Radio: baseRadioTheme,
	Toast: baseToastTheme,
	Popover: basePopoverTheme,
	Select: baseSelectTheme,
};

export const baseDarkTheme: DeepPartial<Theme> = {
	Alert: baseAlertDarkTheme,
	Button: baseButtonDarkTheme,
	IconButton: baseIconButtonDarkTheme,
	TextInput: baseTextInputDarkTheme,
	Text: baseTextDarkTheme,
	Heading: baseHeadingDarkTheme,
	Icon: baseIconDarkTheme,
	Spinner: baseSpinnerDarkTheme,
	Switch: baseSwitchDarkTheme,
	CheckBox: baseCheckBoxDarkTheme,
	Radio: baseRadioDarkTheme,
	Toast: baseToastDarkTheme,
	Popover: basePopoverDarkTheme,
	Select: baseSelectDarkTheme,
};
