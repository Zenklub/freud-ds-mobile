export type OpacityLevel =
	| 'none'
	| '100'
	| '200'
	| '300'
	| '400'
	| '500'
	| '600'
	| '700'
	| '800'
	| 'full';

export type OpacityTokens = Record<OpacityLevel, number>;
