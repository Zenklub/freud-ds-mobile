// @ts-ignore
import * as Variables from '@freud-ds/tokens/style/react-native/variables';
import { SpacingTokens } from '@theme/tokens/tokens';

const Tokens = Variables as Record<string, number | string>;

export const baseSpacingTheme: SpacingTokens = {
	minimum: Tokens.spacingSizeMinimum, // 2
	quark: Tokens.spacingSizeQuark, // 4
	nano: Tokens.spacingSizeNano, // 8
	xxxs: Tokens.spacingSizeXxxs, // 16
	xxs: Tokens.spacingSizeXxs, // 24
	xs: Tokens.spacingSizeXs, // 32
	sm: Tokens.spacingSizeSm, // 40
	md: Tokens.spacingSizeMd, // 48
	lg: Tokens.spacingSizeLg, // 56
	xl: Tokens.spacingSizeXl, // 64
	xxl: Tokens.spacingSizeXxl, // 80
	xxxl: Tokens.spacingSizeXxxl, // 88
	big: Tokens.spacingSizeBig, // 120
	huge: Tokens.spacingSizeHuge, // 160
	giant: Tokens.spacingSizeGiant, // 200
	'1/10': '10%',
	'1/5': '20%',
	'1/4': '25%',
	'1/3': '33.333%',
	'2/5': '40%',
	'2/4': '50%',
	'3/5': '60%',
	'3/4': '75%',
	'4/5': '80%',
	full: '100%',
};
