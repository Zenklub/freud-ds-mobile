import { IBorders } from '@theme/base/borders';
import { IColors } from '@theme/base/colors';
import { IOpacity } from '@theme/base/opacity';
import { IRadii } from '@theme/base/radius';
import { IShadow, IShadowValue } from '@theme/base/shadows';
import { ISizes } from '@theme/base/sizes';
import { useTheme } from 'native-base';
import { useMemo } from 'react';

type ColorsLeaves = `colors.${IColors}`;
type Borders = `borders.${IBorders}`;
type Sizes = `sizes.${ISizes}`;
type Opacity = `opacity.${IOpacity}`;
type Radius = `radii.${IRadii}`;
type Shadow = `shadows.${IShadow}`;

type TokenLeaves = Record<ColorsLeaves, string> &
	Record<Borders, string> &
	Record<Sizes, number> &
	Record<Opacity, number> &
	Record<Radius, number> &
	Record<Shadow, IShadowValue>;

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

export const useTokens = <T extends Tokens>(...tokens: T[]): TokenVal<T> => {
	const theme = useTheme();

	const values = useMemo(() => {
		const listOfValues: any[] = [];
		for (const token of tokens) {
			let val = theme as any;
			const split = token.split('.');
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
