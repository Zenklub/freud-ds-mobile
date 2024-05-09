const shadow = {
	none: {
		shadowColor: 'transparent',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0,
		shadowRadius: 0,
		elevation: 0,
	},
	shadowFocusedZen: {
		shadowColor: '#E7E0F6',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowRadius: 3,
		shadowOpacity: 1,
		elevation: 1,
	},
	shadowLevel1: {
		shadowColor: 'rgba(31, 41, 55, 0.08)',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 4,
		shadowOpacity: 0.08,
		elevation: 2,
	},
	shadowLevel2: {
		shadowColor: 'rgba(31, 41, 55, 0.12)',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 6,
		shadowOpacity: 0.12,
		elevation: 3,
	},
	shadowLevel3: {
		shadowColor: 'rgba(31, 41, 55, 0.14)',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 8,
		shadowOpacity: 0.14,
		elevation: 4,
	},
	shadowLevel4: {
		shadowColor: 'rgba(31, 41, 55, 0.16)',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowRadius: 8,
		shadowOpacity: 0.16,
		elevation: 5,
	},
	shadowLevel5: {
		shadowColor: 'rgba(31, 41, 55, 0.16)',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowRadius: 16,
		shadowOpacity: 0.16,
		elevation: 6,
	},
	shadowLevel6: {
		shadowColor: 'rgba(31, 41, 55, 0.16)',
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowRadius: 20,
		shadowOpacity: 0.16,
		elevation: 7,
	},
	shadowLevel7: {
		shadowColor: 'rgba(31, 41, 55, 0.16)',
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowRadius: 16,
		shadowOpacity: 0.16,
		elevation: 8,
	},
	shadowLevel8: {
		shadowColor: 'rgba(31, 41, 55, 0.2)',
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowRadius: 24,
		shadowOpacity: 0.2,
		elevation: 9,
	},
};

export type IShadow = keyof typeof shadow;
export default shadow;

export type IShadowValue = typeof shadow[keyof typeof shadow];
