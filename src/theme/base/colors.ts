// import type { ITheme } from '..';
import type { Leaves } from './types';
// @ts-ignore
import * as Tokens from '@freud-ds/tokens/style/react-native/variables';

export interface IColorHues {
	50: string;
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
	800: string;
	900: string;
}

const colors = {
	brand: {
		pure: Tokens.brandColorPure,
		brandColor01: Tokens.brandColor01,
		brandColor02: Tokens.brandColor02,
		brandColor03: Tokens.brandColor03,
		brandColor04: Tokens.brandColor04,
		brandColor05: Tokens.brandColor05,
		brandColor06: Tokens.brandColor06,
	},
	complementary: {
		funny: {
			funnyPure: Tokens.complementaryColorFunnyPure,
			funny01: Tokens.complementaryColorFunny01,
			funny02: Tokens.complementaryColorFunny02,
			funny03: Tokens.complementaryColorFunny03,
			funny04: Tokens.complementaryColorFunny04,
			funny05: Tokens.complementaryColorFunny05,
			funny06: Tokens.complementaryColorFunny06,
		},
		colorLike: {
			pure: Tokens.complementaryColorFunnyPure,
			like01: Tokens.complementaryColorLike01,
			like02: Tokens.complementaryColorLike02,
			like03: Tokens.complementaryColorLike03,
			like04: Tokens.complementaryColorLike04,
			like05: Tokens.complementaryColorLike05,
			like06: Tokens.complementaryColorLike06,
		},
	},
	feedback: {
		neutral: {
			neutralPure: Tokens.feedbackColorNeutralPure,
			neutral01: Tokens.feedbackColorNeutral01,
			neutral02: Tokens.feedbackColorNeutral02,
			neutral03: Tokens.feedbackColorNeutral03,
			neutral04: Tokens.feedbackColorNeutral04,
			neutral05: Tokens.feedbackColorNeutral05,
			neutral06: Tokens.feedbackColorNeutral06,
		},
		positive: {
			pure: Tokens.feedbackColorPositivePure,
			positive01: Tokens.feedbackColorPositive01,
			positive02: Tokens.feedbackColorPositive02,
			positive03: Tokens.feedbackColorPositive03,
			positive04: Tokens.feedbackColorPositive04,
			positive05: Tokens.feedbackColorPositive05,
			positive06: Tokens.feedbackColorPositive06,
		},
		warning: {
			pure: Tokens.feedbackColorWarningPure,
			warning01: Tokens.feedbackColorWarning01,
			warning02: Tokens.feedbackColorWarning02,
			warning03: Tokens.feedbackColorWarning03,
			warning04: Tokens.feedbackColorWarning04,
			warning05: Tokens.feedbackColorWarning05,
			warning06: Tokens.feedbackColorWarning06,
		},
		alert: {
			pure: Tokens.feedbackColorAlertPure,
			alert01: Tokens.feedbackColorAlert01,
			alert02: Tokens.feedbackColorAlert02,
			alert03: Tokens.feedbackColorAlert03,
			alert04: Tokens.feedbackColorAlert04,
			alert05: Tokens.feedbackColorAlert05,
			alert06: Tokens.feedbackColorAlert06,
		},
		negative: {
			pure: Tokens.feedbackColorNegativePure,
			negative01: Tokens.feedbackColorNegative01,
			negative02: Tokens.feedbackColorNegative02,
			negative03: Tokens.feedbackColorNegative03,
			negative04: Tokens.feedbackColorNegative04,
			negative05: Tokens.feedbackColorNegative05,
			negative06: Tokens.feedbackColorNegative06,
		},
	},
	neutral: {
		white: Tokens.neutralColorWhite,
		black: Tokens.neutralColorBlack,
		dark: {
			dark01: Tokens.neutralColorDark01,
			dark02: Tokens.neutralColorDark02,
			dark03: Tokens.neutralColorDark03,
			dark04: Tokens.neutralColorDark04,
		},
		light: {
			light01: Tokens.neutralColorLight01,
			light02: Tokens.neutralColorLight02,
			light03: Tokens.neutralColorLight03,
			light04: Tokens.neutralColorLight04,
		},
	},
};

export default colors;
// export type IColors = Leaves<ITheme['colors']>;
export type IColors = Leaves<typeof colors>;
