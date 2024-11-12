import { DeepPartial } from '@helpers/deep-partial.interface';
import {
	ContainerThemeAggregate,
	IconThemeAggregator,
	TextThemeAggregator,
} from '@theme/theming.interface';

export type AlertStatus = 'success' | 'info' | 'warning' | 'danger';

export interface AlertThemeData extends ContainerThemeAggregate {
	icon: IconThemeAggregator;
	title: TextThemeAggregator;
	body: TextThemeAggregator;
	close: IconThemeAggregator;
}

export interface AlertStatusTheme {
	base: AlertThemeData;
	info: DeepPartial<AlertThemeData>;
	success: DeepPartial<AlertThemeData>;
	warning: DeepPartial<AlertThemeData>;
	danger: DeepPartial<AlertThemeData>;
}

export interface AlertComponentTheme {
	base: AlertStatusTheme;
	full: DeepPartial<AlertStatusTheme>;
	titleOnly: DeepPartial<AlertStatusTheme>;
}
