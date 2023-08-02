module.exports = {
	branches: [
		'main',
		{
			name: 'beta',
			prerelease: true,
		},
	],
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/github',
		'@semantic-release/changelog',
		'@semantic-release/npm',
		[
			'@semantic-release/git',
			{
				assets: ['CHANGELOG.md', 'package.json', 'yarn.lock'],
				message:
					'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
			},
		],
		[
			'semantic-release-slack-bot',
			{
				notifyOnSuccess: false,
				notifyOnFail: false,
				markdownReleaseNotes: true,
				packageName: '@freud-ds/react-native',
				markdownReleaseNotesFields: ['commit', 'subject'],
				markdownReleaseNotesFormat: 'table',
				markdownReleaseNotesShowAuthor: true,
				markdownReleaseNotesShowCommit: true,
				markdownReleaseNotesShowSubject: true,
				markdownReleaseNotesShowTypes: true,
				markdownReleaseNotesTypes: {
					feat: 'Features',
					fix: 'Bug Fixes',
					perf: 'Performance Improvements',
					revert: 'Reverts',
					docs: 'Documentation',
					style: 'Styles',
					refactor: 'Code Refactoring',
					test: 'Tests',
					build: 'Build System',

					// Custom types
					chore: 'Chores',
					ci: 'Continuous Integration',
					deps: 'Dependencies',
					BREAKING: 'Breaking Changes',
				},
				branchesConfig: [
					{
						pattern: 'beta',
						notifyOnFail: true,
					},
					{
						pattern: 'main',
						notifyOnSuccess: true,
						notifyOnFail: true,
					},
				],
			},
		],
	],
};
