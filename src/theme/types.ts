import { Leaves } from '@helpers/types';
import { TextStyle, ViewStyle } from 'react-native';
import { ExtractThemeValues } from './theme-value-extractor.type';
import { TypographyValues } from './theming.interface';
import { AlertComponentTheme } from './tokens/components/alert';
import { ButtonComponentTheme } from './tokens/components/button';
import { IconComponentTheme } from './tokens/components/icon';
import { SelectComponentTheme } from './tokens/components/select';
import {
	HeadingComponentTheme,
	HeadingFontSizes,
	TextComponentTheme,
	TextFontSizes,
} from './tokens/components/text-heading';
import { TextInputComponentTheme } from './tokens/components/text-input';
import {
	AnimationDurations,
	AnimationEasing,
	AnimationEasingFunction,
	AnimationTokens,
	BordersSizes,
	BordersTokens,
	CheckBoxComponentTheme,
	ColorsTokens,
	ColorTokensPath,
	FontFamily,
	FontSize,
	FontWeight,
	FontWeightValue,
	IconButtonComponentTheme,
	IconName,
	IconSize,
	LineHeight,
	OpacityLevel,
	OpacityTokens,
	PopOverComponentTheme,
	RadiiSize,
	RadiiTokens,
	RadioComponentTheme,
	ShadowSizes,
	ShadowTokens,
	ShadowValue,
	Sizes,
	SizesTokens,
	SpacingSizes,
	SpacingTokens,
	SpinnerComponentTheme,
	SwitchComponentTheme,
	ToastComponentTheme,
	TypographyTokens,
} from './tokens/tokens';

export type ThemeColorMode = 'light' | 'dark';

export interface ThemeContextValue {
	tokens: Tokens;
	leaves: TokenLeaves;
	current: ThemeValues;
	darkTheme: ThemeValues;
	lightTheme: ThemeValues;
	mode: ThemeColorMode;
	setColorMode: (mode: ThemeColorMode) => void;
}

export interface Tokens {
	color: ColorsTokens;
	opacity: OpacityTokens;
	radii: RadiiTokens;
	size: SizesTokens;
	border: BordersTokens;
	spacing: SpacingTokens;
	shadow: ShadowTokens;
	typography: TypographyTokens;
	animation: AnimationTokens;
}

export interface Theme {
	Alert: AlertComponentTheme;
	Button: ButtonComponentTheme;
	IconButton: IconButtonComponentTheme;
	TextInput: TextInputComponentTheme;
	Text: TextComponentTheme;
	Heading: HeadingComponentTheme;
	Icon: IconComponentTheme;
	Spinner: SpinnerComponentTheme;
	Switch: SwitchComponentTheme;
	CheckBox: CheckBoxComponentTheme;
	Radio: RadioComponentTheme;
	Toast: ToastComponentTheme;
	Popover: PopOverComponentTheme;
	Select: SelectComponentTheme;
}

export type ColorsLeaves = `color.${ColorTokensPath}`;
export type BorderSizesLeaves = `border.${BordersSizes}`;
export type SizesLeaves = `size.${Sizes}`;
export type OpacityLeaves = `opacity.${OpacityLevel}`;
export type SpacingLeaves = `spacing.${SpacingSizes}`;
export type RadiusLeaves = `radii.${RadiiSize}`;
export type ShadowObjectLeaves = `shadow.${ShadowSizes}`;
export type ShadowLeaves = `shadow.${ShadowSizes}.${Leaves<
	Omit<ShadowValue, 'shadowColor'>
>}`;
export type ShadowColors = `shadow.${ShadowSizes}.shadowColor`;
export type TypographyFontFamilyWeightLeaves =
	`typography.families.${FontFamily}.${FontWeight}`;
export type TypographyFontFamilyLeaves = `typography.families.${FontFamily}`;
export type TypographyFontSizeLeaves = `typography.fontSizes.${FontSize}`;
export type TypographyFontWeightLeaves = `typography.fontWeights.${FontWeight}`;
export type TypographyLineHeightLeaves = `typography.lineHeights.${LineHeight}`;

export type TextSizesLeaves =
	| `heading.${HeadingFontSizes}`
	| `text.${TextFontSizes}`;

export type IconSizesLeaves = `icon.sizes.${IconSize}`;
export type IconNamesLeaves = `icon.names.${IconName}`;
export type AnimationDurationsLeaves =
	`animation.durations.${AnimationDurations}`;
export type AnimationEasingLeaves = `animation.easing.${AnimationEasing}`;

export type TokenLeaves = Record<ColorsLeaves, string> &
	Record<BorderSizesLeaves, number> &
	Record<SizesLeaves, number> &
	Record<OpacityLeaves, number> &
	Record<RadiusLeaves, number> &
	Record<SpacingLeaves, number> &
	Record<ShadowObjectLeaves, ShadowValue> &
	Record<ShadowLeaves, number> &
	Record<ShadowColors, string> &
	Record<AnimationDurationsLeaves, number> &
	Record<AnimationEasingLeaves, AnimationEasingFunction> &
	Record<TypographyFontFamilyWeightLeaves, string> &
	Record<TypographyFontSizeLeaves, number> &
	Record<TypographyFontWeightLeaves, FontWeightValue> &
	Record<TypographyLineHeightLeaves, number> &
	Record<TypographyFontFamilyLeaves, 'body' | 'heading'> &
	Record<TextSizesLeaves, TypographyValues> &
	Record<IconSizesLeaves, number> &
	Record<IconNamesLeaves, IconName>;

export type TokensPaths = keyof TokenLeaves;

export type Style = ViewStyle & TextStyle;

export type ThemeValues = ExtractThemeValues<Theme>;
