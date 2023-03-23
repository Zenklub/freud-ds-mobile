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
		'01': Tokens.brandColor01,
		'02': Tokens.brandColor02,
		'03': Tokens.brandColor03,
		'04': Tokens.brandColor04,
		'05': Tokens.brandColor05,
		'06': Tokens.brandColor06,
	},
	complementary: {
		funny: {
			funnyPure: Tokens.complementaryColorFunnyPure,
			'01': Tokens.complementaryColorFunny01,
			'02': Tokens.complementaryColorFunny02,
			'03': Tokens.complementaryColorFunny03,
			'04': Tokens.complementaryColorFunny04,
			'05': Tokens.complementaryColorFunny05,
			'06': Tokens.complementaryColorFunny06,
		},
		colorLike: {
			pure: Tokens.complementaryColorFunnyPure,
			'01': Tokens.complementaryColorLike01,
			'02': Tokens.complementaryColorLike02,
			'03': Tokens.complementaryColorLike03,
			'04': Tokens.complementaryColorLike04,
			'05': Tokens.complementaryColorLike05,
			'06': Tokens.complementaryColorLike06,
		},
	},
	feedback: {
		neutral: {
			neutralPure: Tokens.feedbackColorNeutralPure,
			'01': Tokens.feedbackColorNeutral01,
			'02': Tokens.feedbackColorNeutral02,
			'03': Tokens.feedbackColorNeutral03,
			'04': Tokens.feedbackColorNeutral04,
			'05': Tokens.feedbackColorNeutral05,
			'06': Tokens.feedbackColorNeutral06,
		},
		positive: {
			pure: Tokens.feedbackColorPositivePure,
			'01': Tokens.feedbackColorPositive01,
			'02': Tokens.feedbackColorPositive02,
			'03': Tokens.feedbackColorPositive03,
			'04': Tokens.feedbackColorPositive04,
			'05': Tokens.feedbackColorPositive05,
			'06': Tokens.feedbackColorPositive06,
		},
		warning: {
			pure: Tokens.feedbackColorWarningPure,
			'01': Tokens.feedbackColorWarning01,
			'02': Tokens.feedbackColorWarning02,
			'03': Tokens.feedbackColorWarning03,
			'04': Tokens.feedbackColorWarning04,
			'05': Tokens.feedbackColorWarning05,
			'06': Tokens.feedbackColorWarning06,
		},
		alert: {
			pure: Tokens.feedbackColorAlertPure,
			'01': Tokens.feedbackColorAlert01,
			'02': Tokens.feedbackColorAlert02,
			'03': Tokens.feedbackColorAlert03,
			'04': Tokens.feedbackColorAlert04,
			'05': Tokens.feedbackColorAlert05,
			'06': Tokens.feedbackColorAlert06,
		},
		negative: {
			pure: Tokens.feedbackColorNegativePure,
			'01': Tokens.feedbackColorNegative01,
			'02': Tokens.feedbackColorNegative02,
			'03': Tokens.feedbackColorNegative03,
			'04': Tokens.feedbackColorNegative04,
			'05': Tokens.feedbackColorNegative05,
			'06': Tokens.feedbackColorNegative06,
		},
	},
	neutral: {
		white: Tokens.neutralColorWhite,
		black: Tokens.neutralColorBlack,
		dark: {
			'01': Tokens.neutralColorDark01,
			'02': Tokens.neutralColorDark02,
			'03': Tokens.neutralColorDark03,
			'04': Tokens.neutralColorDark04,
		},
		light: {
			'01': Tokens.neutralColorLight01,
			'02': Tokens.neutralColorLight02,
			'03': Tokens.neutralColorLight03,
			'04': Tokens.neutralColorLight04,
		},
	},
};

export default colors;
// export type IColors = Leaves<ITheme['colors']>;
export type IColors = Leaves<typeof colors>;
