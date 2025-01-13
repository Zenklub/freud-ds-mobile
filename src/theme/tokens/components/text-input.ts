import { ColorsLeaves } from '@theme/types';
import { HardCodedColor } from '../tokens';
import {
	BaseInputComponentTheme,
	BaseInputStateTheme,
} from './input-base-theme';

export interface TextInputStateTheme extends BaseInputStateTheme {
	placeholderColor: ColorsLeaves | HardCodedColor;
}

export type TextInputComponentTheme =
	BaseInputComponentTheme<TextInputStateTheme>;
