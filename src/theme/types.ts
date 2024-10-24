import { IconButtonTheme } from './tokens';
import { BordersTokens } from './tokens/borders';
import { ColorsTokens } from './tokens/colors';
import { ButtonTheme } from './tokens/components/button';
import { OpacityTokens } from './tokens/opacity';
import { RadiiTokens } from './tokens/radius';
import { ShadowTokens } from './tokens/shadows';
import { SizesTokens } from './tokens/sizes';
import { SpacingTokens } from './tokens/spacing';
import { TypographyTokens } from './tokens/typography';

export interface Theme {
	color: ColorsTokens;
	opacity: OpacityTokens;
	radii: RadiiTokens;
	size: SizesTokens;
	border: BordersTokens;
	spacing: SpacingTokens;
	shadow: ShadowTokens;
	typography: TypographyTokens;
	components: {
		Button: ButtonTheme;
		IconButton: IconButtonTheme;
	};
}
