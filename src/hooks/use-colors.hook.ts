import { ColorsPath, ColorsPathOrHardCoded } from '@theme/types/colors';
import { useMemo } from 'react';
import { findValueWithPath } from '../helpers/value-with-path';
import { useTheme } from './use-theme';
import { isHardCodedColor } from '@helpers/is-hard-coded-color';

export function useColors<T extends ColorsPath>(...tokens: T[]) {
	const colorsTheme = useTheme('colors');

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
	pathOrColor: ColorsPathOrHardCoded,
	fallback: ColorsPath
) {
	const colorsTheme = useTheme('colors');

	const color = useMemo(() => {
		if (isHardCodedColor(pathOrColor)) {
			return pathOrColor;
		}

		const userColor = findValueWithPath(colorsTheme, pathOrColor as ColorsPath);

		return userColor || findValueWithPath(colorsTheme, fallback);
	}, [colorsTheme, pathOrColor, fallback]);

	return color;
}
