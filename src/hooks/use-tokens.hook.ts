import { TokenLeaves } from '@theme';
import { useMemo } from 'react';
import { useTokensLeaves } from './use-theme';

type TupleMapper<
	Source extends Record<string, any>,
	TKeys extends (keyof Source)[]
> = {
	[Index in keyof TKeys]: Source[TKeys[Index]];
};

export function useTokensValues<TKeys extends (keyof TokenLeaves)[]>(
	...tokens: TKeys
): TupleMapper<TokenLeaves, TKeys> {
	const leaves = useTokensLeaves();

	const values = useMemo(() => {
		const values = [];

		for (const key of tokens) {
			values.push(leaves[key]);
		}

		return values as TupleMapper<TokenLeaves, TKeys>;
	}, [leaves, tokens]);

	return values;
}
