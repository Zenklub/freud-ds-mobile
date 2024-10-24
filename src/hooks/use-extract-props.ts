import { useMemo } from 'react';

export function extractProps<T extends Record<string, any>, K extends keyof T>(
	obj: T,
	props: K[]
): [props: Pick<T, K>, rest: Exclude<T, K>] {
	const extractedProps = {} as any;
	const rest = {} as any;

	const keys = Object.keys(obj) as (keyof T)[];

	for (const key of keys) {
		if (props.includes(key as any)) {
			extractedProps[key] = obj[key];
		} else {
			rest[key] = obj[key];
		}
	}

	return [extractedProps, rest];
}
export function useExtractProps<
	T extends Record<string, any>,
	K extends keyof T
>(obj: T, props: K[]): [props: Pick<T, K>, rest: Exclude<T, K>] {
	return useMemo(() => extractProps(obj, props), [obj]);
}
