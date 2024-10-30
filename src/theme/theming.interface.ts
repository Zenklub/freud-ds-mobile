import { ViewStyle } from 'react-native';

import {
	AnimationEasingFunction,
	FontWeightValue,
	HardCodedColor,
} from './tokens/tokens';
import {
	AnimationDurationsLeaves,
	AnimationEasingLeaves,
	BorderSizesLeaves,
	ColorsLeaves,
	IconNamesLeaves,
	IconSizesLeaves,
	OpacityLeaves,
	RadiusLeaves,
	ShadowObjectLeaves,
	SpacingLeaves,
	TextSizesLeaves,
	TypographyFontFamilyLeaves,
	TypographyFontSizeLeaves,
	TypographyFontWeightLeaves,
	TypographyLineHeightLeaves,
} from './types';

export type PaddingThemeValue =
	| number
	| SpacingLeaves
	| {
			top?: SpacingLeaves | number;
			right?: SpacingLeaves | number;
			bottom?: SpacingLeaves | number;
			left?: SpacingLeaves | number;
	  }
	| {
			vertical?: SpacingLeaves | number;
			horizontal?: SpacingLeaves | number;
	  };

export type MarginThemeValue =
	| number
	| SpacingLeaves
	| {
			top?: SpacingLeaves | number;
			right?: SpacingLeaves | number;
			bottom?: SpacingLeaves | number;
			left?: SpacingLeaves | number;
	  }
	| {
			vertical?: SpacingLeaves | number;
			horizontal?: SpacingLeaves | number;
	  };

export type BorderRadiusThemeValue =
	| number
	| RadiusLeaves
	| {
			topRight?: RadiusLeaves | number;
			topLeft?: RadiusLeaves | number;
			bottomRight?: RadiusLeaves | number;
			bottomLeft?: RadiusLeaves | number;
	  };

export type BorderWidthThemeValue =
	| number
	| BorderSizesLeaves
	| {
			top?: BorderSizesLeaves | number;
			bottom?: BorderSizesLeaves | number;
			right?: BorderSizesLeaves | number;
			left?: BorderSizesLeaves | number;
	  };

export type BorderColorThemeValue =
	| ColorsLeaves
	| HardCodedColor
	| {
			top?: ColorsLeaves | HardCodedColor;
			right?: ColorsLeaves | HardCodedColor;
			bottom?: ColorsLeaves | HardCodedColor;
			left?: ColorsLeaves | HardCodedColor;
	  };

export type BorderThemeValue = {
	color?: BorderColorThemeValue;
	width?: BorderWidthThemeValue;
	radius?: BorderRadiusThemeValue;
	style?: ViewStyle['borderStyle'];
};

export type ShadowThemeValue =
	| ShadowObjectLeaves
	| {
			color?: ColorsLeaves | HardCodedColor;
			offset?:
				| SpacingLeaves
				| number
				| {
						width?: SpacingLeaves | number;
						height?: SpacingLeaves | number;
				  };
			opacity?: OpacityLeaves | number;
			radius?: RadiusLeaves | number;
			elevation?: number;
	  };

// Theme Aggregators
export type ContainerThemeAggregate = {
	border?: BorderThemeValue;
	opacity?: OpacityLeaves | number;
	padding?: PaddingThemeValue;
	margin?: MarginThemeValue;
	backgroundColor?: ColorsLeaves | HardCodedColor;
	shadow?: ShadowThemeValue;
	height?: SpacingLeaves | number;
	width?: SpacingLeaves | number;
	maxWidth?: SpacingLeaves | number;
	maxHeight?: SpacingLeaves | number;
	position?: ViewStyle['position'];
	transform?: ViewStyle['transform'];
};

export type IconThemeAggregator = ContainerThemeAggregate & {
	name?: IconNamesLeaves;
	color?: ColorsLeaves | HardCodedColor;
	size?: IconSizesLeaves | number;
};

export interface TypographyThemeAggregator {
	color?: ColorsLeaves | HardCodedColor;
	fontFamily?: TypographyFontFamilyLeaves | (string & {});
	fontSize?: TypographyFontSizeLeaves | number;
	fontWeight?: TypographyFontWeightLeaves | FontWeightValue;
	lineHeight?: TypographyLineHeightLeaves | number;
}

export type TextThemeAggregator = ContainerThemeAggregate &
	TypographyThemeAggregator & {
		textSize: TextSizesLeaves;
	};

export interface AnimationAggregator {
	duration: AnimationDurationsLeaves | number;
	easing: AnimationEasingLeaves | AnimationEasingFunction;
}

export type StylingKeys =
	| 'border'
	| 'opacity'
	| 'padding'
	| 'margin'
	| 'backgroundColor'
	| 'fontFamily'
	| 'shadow'
	| 'height'
	| 'width'
	| 'color'
	| 'top'
	| 'right'
	| 'bottom'
	| 'left'
	| 'textSize'
	| 'fontSize'
	| 'fontWeight'
	| 'transform'
	| 'position'
	| 'maxWidth'
	| 'maxHeight'
	| 'lineHeight';

export interface TypographyValues {
	fontFamily: string;
	fontSize: number;
	fontWeight?: FontWeightValue;
	lineHeight: number;
}
