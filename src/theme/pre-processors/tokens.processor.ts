import { ShadowValue } from '@theme/tokens/tokens';
import { TokenLeaves, Tokens } from '@theme/types';

function extractTokenLeave(
	tokens: Record<string, any>,
	key: string,
	accumulated: string
): Record<string, any> {
	const token = tokens[key];

	if (typeof token === 'object') {
		let leaves = {} as TokenLeaves;
		for (const subKey in token) {
			const newKey = `${accumulated}.${subKey}`;
			const leave = extractTokenLeave(token, subKey, newKey);
			leaves = { ...leaves, ...leave };
		}

		return leaves;
	}

	return { [accumulated]: token };
}

function extractShadowsObjects(
	shadows: Tokens['shadow']
): Record<`shadow.${keyof Tokens['shadow']}`, ShadowValue> {
	let leaves = {} as Record<string, ShadowValue>;

	for (const key in shadows) {
		const shadow = shadows[key as keyof Tokens['shadow']];
		leaves[`shadow.${key}`] = shadow;
	}

	return leaves;
}

export function tokensProcessor(tokens: Tokens): TokenLeaves {
	let leaves = {} as TokenLeaves;

	for (const startKey in tokens) {
		if (startKey === 'shadow') {
			const shadow = extractShadowsObjects(tokens.shadow);
			leaves = { ...leaves, ...shadow };
		}
		const leave = extractTokenLeave(tokens, startKey, startKey);
		leaves = { ...leaves, ...leave };
	}

	return leaves;
}
