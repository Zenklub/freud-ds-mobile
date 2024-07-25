import { Leaves } from '@theme/base/types';

export function findValueWithPath<
	T extends Record<string, any>,
	Path extends Leaves<T>
>(obj: T, path: Path): any {
	let value = obj;

	const parts = path.split('.');

	for (const part of parts) {
		value = value[part];
	}

	return value;
}
