import {
	AnimationAggregator,
	ContainerThemeAggregate,
	TextThemeAggregator,
} from '@theme/theming.interface';
import { ColorsLeaves, SpacingLeaves } from '@theme/types';
import { HardCodedColor } from '../tokens';

export interface PopOverComponentTheme extends ContainerThemeAggregate {
	spaceToStartAnimation: SpacingLeaves | number;
	backdropColor: ColorsLeaves | HardCodedColor;
	arrow: ContainerThemeAggregate;
	text: TextThemeAggregator;
	animation: AnimationAggregator;
}
