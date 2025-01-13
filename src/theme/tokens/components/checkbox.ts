import { DeepPartial } from '@helpers/deep-partial.interface';
import {
	ContainerThemeAggregate,
	IconThemeAggregator,
	TextThemeAggregator,
} from '@theme/theming.interface';

export interface CheckBoxStatusTheme extends ContainerThemeAggregate {
	box: ContainerThemeAggregate;
	label: TextThemeAggregator;
	check: IconThemeAggregator;
}

export interface CheckBoxComponentTheme {
	base: CheckBoxStatusTheme;
	normal: DeepPartial<CheckBoxStatusTheme>;
	checked: DeepPartial<CheckBoxStatusTheme>;
	disabled: DeepPartial<CheckBoxStatusTheme>;
	disabledChecked: DeepPartial<CheckBoxStatusTheme>;
	focused: DeepPartial<CheckBoxStatusTheme>;
	focusedChecked: DeepPartial<CheckBoxStatusTheme>;
}
