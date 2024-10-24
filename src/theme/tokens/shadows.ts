export type ShadowSizes =
	| 'none'
	| 'focused'
	| 100
	| 200
	| 300
	| 400
	| 500
	| 600
	| 700
	| 800;

export interface ShadowValue {
	shadowColor: string;
	shadowOffset: {
		width: number;
		height: number;
	};
	shadowOpacity: number;
	shadowRadius: number;
	elevation: number;
}

export type ShadowTokens = Record<ShadowSizes, ShadowValue>;
