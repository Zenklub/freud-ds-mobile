const config = require('./jest.config');

const coverageConfig = {
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{ts,tsx}'],
	coveragePathIgnorePatterns: [
		'node_modules',

		// Ignore all interfaces declarations
		'interfaces',
		'interface',
		'.interfaces.ts',
		'.interface.ts',
		'.d.ts',
		'types.ts',
		'type.ts',

		// ignore all mocks
		'mocks',
		'mock',
		'.mocks.ts',
		'.mock.ts',

		// Ignore routes declarations
		'routes.ts',
		'route.ts',

		// Ignore storybook
		'.story.ts',
		'.story.tsx',
		'.stories.ts',
		'.stories.tsx',

		// Ignore action tracker declarations
		'.at.ts',
	],
};

module.exports = Object.assign({}, config, coverageConfig);
