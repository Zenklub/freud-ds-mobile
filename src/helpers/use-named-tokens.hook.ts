import { useToken } from 'native-base';
import { useMemo } from 'react';

export const useNamedTokens = <T extends Record<string, string>>(
	property: string,
	tokens: T,
	fallback?: Record<keyof T, any>
): Record<keyof T, any> => {
	const keys = useMemo(() => {
		return Object.keys(tokens) as Array<keyof T>;
	}, [tokens]);

	const values = useToken(
		property,
		keys.map((key) => tokens[key])
	);

	return useMemo(() => {
		return keys.reduce((acc, key, index) => {
			acc[key] = values[index] || fallback?.[key] || undefined;
			return acc;
		}, {} as Record<keyof T, any>);
	}, [keys, values]);
};
