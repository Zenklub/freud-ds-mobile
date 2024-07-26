export function conditionalFirstMatch<T extends string>(
	item: Record<T, boolean | null | undefined>
): T | undefined {
	return Object.keys(item).find((key) => item[key as T]) as T | undefined;
}
