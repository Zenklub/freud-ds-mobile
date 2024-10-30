import { DeepPartial } from '@helpers/deep-partial.interface';
import {
	ContainerThemeAggregate,
	TextThemeAggregator,
} from '@theme/theming.interface';

export interface RadioStatusTheme extends ContainerThemeAggregate {
	outer: ContainerThemeAggregate;
	box: ContainerThemeAggregate;
	label: TextThemeAggregator;
	indicator: ContainerThemeAggregate;
}

export interface RadioComponentTheme {
	base: RadioStatusTheme;
	normal: DeepPartial<RadioStatusTheme>;
	selected: DeepPartial<RadioStatusTheme>;
	disabled: DeepPartial<RadioStatusTheme>;
	focused: DeepPartial<RadioStatusTheme>;
	disabledSelected: DeepPartial<RadioStatusTheme>;
	focusedSelected: DeepPartial<RadioStatusTheme>;
}
