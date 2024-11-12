import { ColorsLeaves } from '@theme/types';
import { HardCodedColor } from '../tokens';

export type SpinnerSize = number | 'small' | 'large';

export interface SpinnerComponentTheme {
	color: ColorsLeaves | HardCodedColor;
}
