import { isHardCodedColor } from '@helpers/is-hard-coded-color';
import { ColorTokensPath, ColorsPathOrHardCoded } from '@theme/tokens/colors';
import { useMemo } from 'react';
import { findValueWithPath } from '../helpers/value-with-path';
import { useTheme } from './use-theme';

export function useColors<T extends ColorTokensPath>(...tokens: T[]) {
	const colorsTheme = useTheme('color');

	const colors = useMemo(() => {
		const list: string[] = [];

		for (const token of tokens) {
			const color = findValueWithPath(colorsTheme, token);

			list.push(color);
		}

		return list;
	}, [colorsTheme, tokens]);

	return colors;
}

export function useColorTokenOrHardCoded(
	colorOrToken: ColorsPathOrHardCoded,
	fallback: ColorTokensPath
) {
	const colorsTheme = useTheme('color');

	const color = useMemo(() => {
		if (isHardCodedColor(colorOrToken)) {
			return colorOrToken;
		}

		const userColor = findValueWithPath(
			colorsTheme,
			colorOrToken as ColorTokensPath
		);

		return userColor || findValueWithPath(colorsTheme, fallback);
	}, [colorsTheme, colorOrToken, fallback]);

	return color;
}
