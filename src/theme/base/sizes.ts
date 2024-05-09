import { spacing } from './space';
import type { Leaves } from './types';

const container = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
} as const;

const sizes = {
	'3xs': 224,
	'2xs': 256,
	xs: 320,
	sm: 384,
	md: 448,
	lg: 512,
	xl: 576,
	'2xl': 672,
	spacing,
	container,
} as const;

export type ISizesObject = typeof sizes;
export type ISizes = Leaves<typeof sizes>;
export default sizes;
