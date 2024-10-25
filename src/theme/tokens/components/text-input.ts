import { IconSize } from '@components';
import { DeepPartial } from '@helpers/deep-partial.interface';
import { BordersSizes } from '../borders';
import { ColorsPathOrHardCoded } from '../colors';
import { OpacityLevel } from '../opacity';
import { RadiiSize } from '../radius';
import { SpacingSizes } from '../spacing';
import { IFontWeight, TextFontSizes } from '../typography';

export type TextInputState =
	| 'default'
	| 'focused'
	| 'entered'
	| 'disabled'
	| 'error';

export interface TextInputStateTheme {
	borderColor: ColorsPathOrHardCoded;
	borderWidth: BordersSizes | number;
	borderRadius: RadiiSize | number;
	backgroundColor: ColorsPathOrHardCoded;
	color: ColorsPathOrHardCoded;
	placeholderColor: ColorsPathOrHardCoded;
	opacity: OpacityLevel | number;
	padding?: SpacingSizes | number;
	paddingHorizontal: SpacingSizes | number;
	paddingVertical: SpacingSizes | number;
	icon: {
		color: ColorsPathOrHardCoded;
		size: IconSize | number;
		spacing: SpacingSizes | number;
		padding: SpacingSizes | number;
		opacity: OpacityLevel | number;
	};
	label: {
		color: ColorsPathOrHardCoded;
		size?: TextFontSizes;
		fontWeight?: IFontWeight;
		lineHeight?: number;
		spacing: SpacingSizes | number;
		padding?: SpacingSizes | number;
		opacity: OpacityLevel | number;
	};
	helperText: {
		color: ColorsPathOrHardCoded;
		size?: TextFontSizes;
		fontWeight?: IFontWeight;
		lineHeight?: number;
		spacing: SpacingSizes | number;
		padding: SpacingSizes | number;
		opacity: OpacityLevel | number;
	};
	errorText: {
		color: ColorsPathOrHardCoded;
		size?: TextFontSizes;
		fontWeight?: IFontWeight;
		lineHeight?: number;
		spacing: SpacingSizes | number;
		padding: SpacingSizes | number;
		opacity: OpacityLevel | number;
	};
}

export interface TextInputTheme {
	variants: {
		default: TextInputStateTheme;
		focused: DeepPartial<TextInputStateTheme>;
		entered: DeepPartial<TextInputStateTheme>;
		disabled: DeepPartial<TextInputStateTheme>;
		error: DeepPartial<TextInputStateTheme>;
	};
	inverted: DeepPartial<{
		default: TextInputStateTheme;
		focused: DeepPartial<TextInputStateTheme>;
		entered: DeepPartial<TextInputStateTheme>;
		disabled: DeepPartial<TextInputStateTheme>;
		error: DeepPartial<TextInputStateTheme>;
	}>;
}
