// @ts-ignore
import * as Variables from '@freud-ds/tokens/style/react-native/variables';
import { SpacingTokens } from '@theme/tokens';

const Tokens = Variables as Record<string, number | string>;

export const baseSpacingTheme: SpacingTokens = {
	minimum: Tokens.spacingSizeMinimum,
	quark: Tokens.spacingSizeQuark,
	nano: Tokens.spacingSizeNano,
	xxxs: Tokens.spacingSizeXxxs,
	xxs: Tokens.spacingSizeXxs,
	xs: Tokens.spacingSizeXs,
	sm: Tokens.spacingSizeSm,
	md: Tokens.spacingSizeMd,
	lg: Tokens.spacingSizeLg,
	xl: Tokens.spacingSizeXl,
	xxl: Tokens.spacingSizeXxl,
	xxxl: Tokens.spacingSizeXxxl,
	big: Tokens.spacingSizeBig,
	huge: Tokens.spacingSizeHuge,
	giant: Tokens.spacingSizeGiant,
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
