import {
	FontWeightValue,
	HardCodedColor,
	IconName,
	IconSize,
} from '@theme/tokens/tokens';
import {
	ColorsLeaves,
	IconNamesLeaves,
	IconSizesLeaves,
	TokenLeaves,
	TypographyFontWeightLeaves,
} from '@theme/types';
import { ColorValue } from 'react-native';

export function tokenOrValue(
	leaves: TokenLeaves,
	keyOrValue: undefined
): undefined;
export function tokenOrValue(
	leaves: TokenLeaves,
	color: IconNamesLeaves | undefined
): IconName | undefined;
export function tokenOrValue(
	leaves: TokenLeaves,
	color: IconSizesLeaves | undefined
): IconSize | undefined;
export function tokenOrValue(
	leaves: TokenLeaves,
	color: ColorsLeaves | HardCodedColor | undefined
): ColorValue | undefined;
export function tokenOrValue(
	leaves: TokenLeaves,
	color: TypographyFontWeightLeaves | FontWeightValue | undefined
): FontWeightValue;
export function tokenOrValue<K extends keyof TokenLeaves>(
	leaves: TokenLeaves,
	keyOrValue: K | number | undefined
): TokenLeaves[K];
export function tokenOrValue(leaves: TokenLeaves, keyOrValue: any): any {
	if (typeof keyOrValue !== 'string') {
		return keyOrValue as any;
	}

	if (keyOrValue in leaves) {
		return (leaves as any)[keyOrValue];
	}

	if (
		['typography.families.body', 'typography.families.heading'].includes(
			keyOrValue
		)
	) {
		return keyOrValue.replace('typography.families.', '');
	}

	if (keyOrValue.startsWith('icon.sizes.')) {
		return keyOrValue.replace('icon.sizes.', '');
	}

	if (keyOrValue.startsWith('icon.names.')) {
		return keyOrValue.replace('icon.names.', '');
	}

	return keyOrValue;
}
