// @ts-ignore
import * as Variables from '@freud-ds/tokens/style/react-native/variables';
import { ColorsTokens } from '@theme/tokens/tokens';

export const Tokens = Variables as Record<string, string>;

export const baseThemeColors: ColorsTokens = {
	brand: {
		pure: Tokens.brandColorPure,
		100: Tokens.brandColor01,
		200: Tokens.brandColor02,
		300: Tokens.brandColor03,
		400: Tokens.brandColor04,
		500: Tokens.brandColor05,
		600: Tokens.brandColor06,
	},
	complementary: {
		funny: {
			pure: Tokens.complementaryColorFunnyPure,
			100: Tokens.complementaryColorFunny01,
			200: Tokens.complementaryColorFunny02,
			300: Tokens.complementaryColorFunny03,
			400: Tokens.complementaryColorFunny04,
			500: Tokens.complementaryColorFunny05,
			600: Tokens.complementaryColorFunny06,
		},
		colorLike: {
			pure: Tokens.complementaryColorFunnyPure,
			100: Tokens.complementaryColorLike01,
			200: Tokens.complementaryColorLike02,
			300: Tokens.complementaryColorLike03,
			400: Tokens.complementaryColorLike04,
			500: Tokens.complementaryColorLike05,
			600: Tokens.complementaryColorLike06,
		},
	},
	feedback: {
		neutral: {
			pure: Tokens.feedbackColorNeutralPure,
			100: Tokens.feedbackColorNeutral01,
			200: Tokens.feedbackColorNeutral02,
			300: Tokens.feedbackColorNeutral03,
			400: Tokens.feedbackColorNeutral04,
			500: Tokens.feedbackColorNeutral05,
			600: Tokens.feedbackColorNeutral06,
		},
		positive: {
			pure: Tokens.feedbackColorPositivePure,
			100: Tokens.feedbackColorPositive01,
			200: Tokens.feedbackColorPositive02,
			300: Tokens.feedbackColorPositive03,
			400: Tokens.feedbackColorPositive04,
			500: Tokens.feedbackColorPositive05,
			600: Tokens.feedbackColorPositive06,
		},
		warning: {
			pure: Tokens.feedbackColorWarningPure,
			100: Tokens.feedbackColorWarning01,
			200: Tokens.feedbackColorWarning02,
			300: Tokens.feedbackColorWarning03,
			400: Tokens.feedbackColorWarning04,
			500: Tokens.feedbackColorWarning05,
			600: Tokens.feedbackColorWarning06,
		},
		alert: {
			pure: Tokens.feedbackColorAlertPure,
			100: Tokens.feedbackColorAlert01,
			200: Tokens.feedbackColorAlert02,
			300: Tokens.feedbackColorAlert03,
			400: Tokens.feedbackColorAlert04,
			500: Tokens.feedbackColorAlert05,
			600: Tokens.feedbackColorAlert06,
		},
		negative: {
			pure: Tokens.feedbackColorNegativePure,
			100: Tokens.feedbackColorNegative01,
			200: Tokens.feedbackColorNegative02,
			300: Tokens.feedbackColorNegative03,
			400: Tokens.feedbackColorNegative04,
			500: Tokens.feedbackColorNegative05,
			600: Tokens.feedbackColorNegative06,
		},
	},
	neutral: {
		hidden: 'transparent',
		white: Tokens.neutralColorWhite,
		black: Tokens.neutralColorBlack,
		dark: {
			100: Tokens.neutralColorDark01,
			200: Tokens.neutralColorDark02,
			300: Tokens.neutralColorDark03,
			400: Tokens.neutralColorDark04,
		},
		light: {
			100: Tokens.neutralColorLight01,
			200: Tokens.neutralColorLight02,
			300: Tokens.neutralColorLight03,
			400: Tokens.neutralColorLight04,
		},
	},
};
