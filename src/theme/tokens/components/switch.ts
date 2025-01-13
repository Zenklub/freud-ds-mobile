import { ColorsLeaves, OpacityLeaves } from '@theme/types';
import { HardCodedColor } from '../tokens';

export interface SwitchStateTheme {
	backgroundColor: ColorsLeaves | HardCodedColor;
	color: ColorsLeaves | HardCodedColor;
	opacity: OpacityLeaves | number;
	active: {
		backgroundColor: ColorsLeaves | HardCodedColor;
		color: ColorsLeaves | HardCodedColor;
		opacity: OpacityLeaves | number;
	};
}

export interface SwitchComponentTheme {
	enabled: SwitchStateTheme;
	disabled: SwitchStateTheme;
}
