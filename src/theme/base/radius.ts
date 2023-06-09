// @ts-ignore
import * as Tokens from '@freud-ds/tokens/style/react-native/variables';

const radii = {
	none: Tokens.borderRadiusNone,
	sm: Tokens.borderRadiusSm,
	md: Tokens.borderRadiusMd,
	lg: Tokens.borderRadiusLg,
	xl: Tokens.borderRadiusXl,
	pill: Tokens.borderRadiusPill,
	circular: Tokens.borderRadiusCircular,
};

export type IRadii = keyof typeof radii;

export default radii;
