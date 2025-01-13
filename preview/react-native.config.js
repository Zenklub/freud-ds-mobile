module.exports = {
	dependencies: {
		...(process.env.NO_FLIPPER
			? { 'react-native-flipper': { platforms: { ios: null } } }
			: {}),
	},
	project: {
		ios: {},
		android: {},
	},
	assets: [
		'node_modules/@freud-ds/tokens/assets/fonts',
		'node_modules/@freud-ds/icons/fonts/freud-icon.ttf',
	],
};
