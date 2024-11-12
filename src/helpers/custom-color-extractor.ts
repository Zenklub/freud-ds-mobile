import { ColorsPathOrHardCoded, HardCodedColor, TokenLeaves } from '@theme';
import { isHardCodedColor } from './is-hard-coded-color';

export function customColorExtractor(
	leaves: TokenLeaves,
	color: ColorsPathOrHardCoded
): HardCodedColor | undefined {
	if (isHardCodedColor(color)) {
		return color;
	}

	if (typeof color === 'string') {
		return leaves[`color.${color}` as keyof TokenLeaves] as HardCodedColor;
	}

	return undefined;
}
