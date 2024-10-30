import { ColorValue } from 'react-native';
import { StylingKeys } from './theming.interface';
import { IconName } from './tokens/icons';
import { AnimationEasingFunction, IconSize } from './tokens/tokens';
import {
	AnimationDurationsLeaves,
	AnimationEasingLeaves,
	BorderSizesLeaves,
	ColorsLeaves,
	IconNamesLeaves,
	IconSizesLeaves,
	RadiusLeaves,
	SizesLeaves,
	SpacingLeaves,
	Style,
} from './types';

type Required<T> = {
	[P in keyof T]-?: T[P];
};

type KeysOf<T> = Required<T> extends Record<string, any> ? keyof T : never;

type IsTheming<T> = KeysOf<
	Omit<Required<T>, keyof Omit<Required<T>, StylingKeys>>
> extends never
	? false
	: true;

type ExceptStyleProperties<T> = ExtractThemeValues<
	Omit<Required<T>, StylingKeys | 'base'>
>;

type FixLeaves<T> = T extends IconSizesLeaves
	? IconSize
	: T extends IconNamesLeaves
	? IconName
	: T extends
			| SpacingLeaves
			| SizesLeaves
			| BorderSizesLeaves
			| RadiusLeaves
			| AnimationDurationsLeaves
	? number
	: T extends ColorsLeaves
	? ColorValue
	: T extends AnimationEasingLeaves
	? AnimationEasingFunction
	: T;

export type ExtractThemeValues<T> = {
	[K in keyof T]: T[K] extends Function
		? T[K]
		: IsTheming<T[K]> extends true
		? { style: Style; props: Record<string, any> } & ExceptStyleProperties<T[K]>
		: T[K] extends Record<string, any>
		? ExceptStyleProperties<T[K]>
		: FixLeaves<T[K]>;
};
