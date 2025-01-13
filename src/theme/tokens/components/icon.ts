import { DeepPartial } from '@helpers/deep-partial.interface';
import {
	ContainerThemeAggregate,
	TypographyThemeAggregator,
} from '@theme/theming.interface';

export interface IconComponentTheme extends ContainerThemeAggregate {
	sizes: {
		base: TypographyThemeAggregator;
		xs: DeepPartial<TypographyThemeAggregator>;
		sm: DeepPartial<TypographyThemeAggregator>;
		md: DeepPartial<TypographyThemeAggregator>;
		lg: DeepPartial<TypographyThemeAggregator>;
	};
}
