import { DeepPartial } from '@helpers/deep-partial.interface';

import {
	ContainerThemeAggregate,
	IconThemeAggregator,
	TextThemeAggregator,
} from '@theme/theming.interface';

export type InputState =
	| 'normal'
	| 'focused'
	| 'entered'
	| 'disabled'
	| 'error';

export interface BaseInputStateTheme extends ContainerThemeAggregate {
	icon: IconThemeAggregator;
	label: TextThemeAggregator;
	helperText: TextThemeAggregator;
	errorText: TextThemeAggregator;
	input: ContainerThemeAggregate;
	iconContainer: ContainerThemeAggregate;
	inputContainer: ContainerThemeAggregate;
}

export interface BaseInputComponentTheme<
	T extends BaseInputStateTheme = BaseInputStateTheme
> {
	base: T;
	normal: DeepPartial<T>;
	focused: DeepPartial<T>;
	entered: DeepPartial<T>;
	disabled: DeepPartial<T>;
	error: DeepPartial<T>;
}
