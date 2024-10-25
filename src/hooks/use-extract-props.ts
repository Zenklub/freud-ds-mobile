import { useMemo } from 'react';

export function extractProps<T extends Record<string, any>, K extends keyof T>(
	props: T,
	keys: K[]
): [props: Pick<T, K>, rest: Exclude<T, K>] {
	const extractedProps = {} as any;
	const rest = {} as any;

	const propsKeys = Object.keys(props) as (keyof T)[];

	for (const key of propsKeys) {
		if (keys.includes(key as any)) {
			extractedProps[key] = props[key];
		} else {
			rest[key] = props[key];
		}
	}

	return [extractedProps, rest];
}

export function useExtractProps<
	T extends Record<string, any>,
	K extends keyof T
>(props: T, keys: K[]): [props: Pick<T, K>, rest: Exclude<T, K>] {
	return useMemo(() => extractProps(props, keys), [props]);
}
