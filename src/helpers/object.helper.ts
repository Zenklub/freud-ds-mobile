export function isObject(value: any): value is Record<string, any> {
	return value !== null && typeof value === 'object';
}

export function deepMerge<T>(target: T, source: T): T {
	if (typeof source === 'undefined') return target;
	if (typeof target === 'undefined') return source;

	if (!isObject(source)) {
		return source as T;
	}

	let targetCopy = JSON.parse(JSON.stringify(target));

	for (const key in source) {
		const val = deepMerge((target as any)[key], source[key]);
		targetCopy[key] = val;
	}

	return targetCopy;
}

export function removeNullable<T>(obj: T): NonNullable<T> {
	if (!isObject(obj)) {
		return obj as NonNullable<T>;
	}

	const result = {} as NonNullable<T>;

	for (const key in obj) {
		if (obj[key] === null || obj[key] === undefined) continue;

		if (Array.isArray(obj[key])) {
			const array = obj[key] as any[];

			(result as any)[key] = array.filter(
				(item) => item !== null && item !== undefined
			);
			continue;
		}

		(result as any)[key] = removeNullable(obj[key]);
	}

	return result;
}
