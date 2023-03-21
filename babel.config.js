module.exports = function (api) {
	api.cache(true);

	const isProduction =
		process.env.NODE_ENV === 'production' ||
		process.env.BABEL_ENV === 'production';

	const isTesting =
		process.env.NODE_ENV === 'test' || process.env.BABEL_ENV === 'test';

	let presets = ['module:metro-react-native-babel-preset'];
	let plugins = [
		[
			require.resolve('babel-plugin-module-resolver'),
			{
				alias: {
					'@components': './src/components',
				},
			},
		],
	];

	if (isProduction || isTesting) {
		// plugins.push('transform-remove-console');
	}

	return {
		presets,
		plugins,
	};
};
