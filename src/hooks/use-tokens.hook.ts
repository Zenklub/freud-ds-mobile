import { IShadowValue } from '@theme/base/shadows';
import {
	BordersSizes,
	ColorTokensPath,
	OpacityLevel,
	RadiiSize,
	ShadowSizes,
	Sizes,
	SpacingSizes,
} from '@theme/tokens';
import { useMemo } from 'react';
import { useTheme } from './use-theme';

type ColorsLeaves = `color.${ColorTokensPath}`;
type BordersLeaves = `border.${BordersSizes}`;
type SizesLeaves = `size.${Sizes}`;
type OpacityLeaves = `opacity.${OpacityLevel}`;
type SpacingLeaves = `spacing.${SpacingSizes}`;
type RadiusLeaves = `radii.${RadiiSize}`;
type ShadowLeaves = `shadow.${ShadowSizes}`;

type TokenLeaves = Record<ColorsLeaves, string> &
	Record<BordersLeaves, number> &
	Record<SizesLeaves, number> &
	Record<OpacityLeaves, number> &
	Record<RadiusLeaves, number> &
	Record<SpacingLeaves, number> &
	Record<ShadowLeaves, IShadowValue>;

export type Tokens = keyof TokenLeaves;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
	k: infer I
) => void
	? I
	: never;
type LastOf<T> = UnionToIntersection<
	T extends any ? () => T : never
> extends () => infer R
	? R
	: never;

type Push<T extends any[], V> = [...T, V];
type TuplifyUnion<
	T,
	L = LastOf<T>,
	N = [T] extends [never] ? true : false
> = true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>;
type ObjValueTuple<
	T,
	KS extends any[] = TuplifyUnion<keyof T>,
	R extends any[] = []
> = KS extends [infer K, ...infer KT]
	? ObjValueTuple<T, KT, [...R, T[K & keyof T]]>
	: R;

type TokenVal<T extends Tokens> = ObjValueTuple<{
	[K in T]: TokenLeaves[K];
}>;

const allowedTokens = [
	'color',
	'border',
	'size',
	'opacity',
	'spacing',
	'radii',
	'shadow',
] as const;

export const useTokens = <T extends Tokens>(...tokens: T[]): TokenVal<T> => {
	const theme = useTheme();

	const values = useMemo(() => {
		const listOfValues: any[] = [];
		for (const token of tokens) {
			let val = theme as any;
			const split = token.split('.');

			const [first] = split;
			if (!allowedTokens.includes(first as any)) {
				throw new Error(`Token ${first} not allowed`);
			}

			for (const element of split) {
				if (element in val) {
					val = val[element];
				} else {
					throw new Error(`Token ${token} not found in theme`);
				}
			}

			listOfValues.push(val);
		}
		return listOfValues as TokenVal<T>;
	}, [theme, tokens]);

	return values;
};
