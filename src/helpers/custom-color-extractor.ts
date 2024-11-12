import { ColorsPathOrHardCoded, TokenLeaves } from '@theme';
import { ColorValue } from 'react-native';
import { isHardCodedColor } from './is-hard-coded-color';

export function customColorExtractor(
	leaves: TokenLeaves,
	color: ColorsPathOrHardCoded
): ColorValue | undefined {
	if (isHardCodedColor(color)) {
		return color;
	}

	if (typeof color === 'string') {
		return leaves[`color.${color}` as keyof TokenLeaves] as ColorValue;
	}

	return undefined;
}
