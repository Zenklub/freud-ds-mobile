import { customColorExtractor } from '@helpers/custom-color-extractor';
import { ColorTokensPath, ColorsPathOrHardCoded } from '@theme';
import { useCallback, useMemo } from 'react';
import { useTokensLeaves } from './use-theme';

export function useColors<T extends ColorTokensPath>(...tokens: T[]) {
	const colorExtractor = useCustomColorExtractor();
	const colors = useMemo(() => tokens.map(colorExtractor), [tokens]);

	return colors;
}

export function useColorTokenOrHardCoded(
	colorOrToken: ColorsPathOrHardCoded,
	fallback: ColorTokensPath
) {
	const colorExtractor = useCustomColorExtractor();

	const color = useMemo(() => {
		return colorExtractor(colorOrToken) || colorExtractor(fallback);
	}, [colorOrToken, fallback, colorExtractor]);

	return color;
}

export function useCustomColorExtractor() {
	const leaves = useTokensLeaves();

	const extractor = useCallback(
		(color: ColorsPathOrHardCoded) => customColorExtractor(leaves, color),
		[leaves]
	);

	return extractor;
}
