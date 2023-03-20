module.exports = {
	roots: ['<rootDir>'],

	globals: {
		__TEST__: true,
		window: {
			__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: '',
		},
	},
	modulePathIgnorePatterns: [
		'<rootDir>/lib/',
		'<rootDir>/ios/',
		'<rootDir>/android/',
		'<rootDir>/playground/',
	],

	setupFilesAfterEnv: [
		'./node_modules/react-native-gesture-handler/jestSetup.js',
	],

	moduleNameMapper: {
		'\\.svg': '<rootDir>/__mocks__/svg-mock.js',
	},

	automock: false,
	transformIgnorePatterns: ['node_modules/?!(@sentry/types)'],

	preset: 'react-native',

	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testPathIgnorePatterns: ['/node_modules', '.history', '/playground'],
};
