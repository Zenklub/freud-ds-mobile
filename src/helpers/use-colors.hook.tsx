import { useMemo } from 'react';
import { useNamedTokens } from './use-named-tokens.hook';

export interface UseColorsTokensArg<T extends Record<string, string>> {
	inverted: T;
	normal: T;
}

export const useColors = <T extends Record<string, string>>(
	tokens: UseColorsTokensArg<T>,
	inverted: boolean
): T => {
	const selectedTokens = useMemo(() => {
		return tokens[inverted ? 'inverted' : 'normal'];
	}, [tokens, inverted]);

	const keys = useNamedTokens('colors', selectedTokens);

	return keys;
};
