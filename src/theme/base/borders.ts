// @ts-ignore
import * as Tokens from '@freud-ds/tokens/style/react-native/variables';

const borderWidths = {
	none: Tokens.borderWidthNone,
	sm: Tokens.borderWidthSm,
	md: Tokens.borderWidthMd,
	lg: Tokens.borderWidthLg,
	xl: Tokens.borderWidthXl,
	xxl: Tokens.borderWidthXxl,
} as const;

export type IBorderWidth = keyof typeof borderWidths;

export default borderWidths;
export type IBorders = IBorderWidth;
