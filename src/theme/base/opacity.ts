// @ts-ignore
import * as Tokens from '@freud-ds/tokens/style/react-native/variables';

const opacity = {
	none: 0,
	level1: Tokens.opacityLevel1,
	level2: Tokens.opacityLevel2,
	level3: Tokens.opacityLevel3,
	level4: Tokens.opacityLevel4,
	level5: Tokens.opacityLevel5,
	level6: Tokens.opacityLevel6,
	level7: Tokens.opacityLevel7,
	level8: Tokens.opacityLevel8,
	full: 1,
};
export type IOpacity = keyof typeof opacity;

export default opacity;
