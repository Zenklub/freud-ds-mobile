module.exports = {
	branches: [
		'main',
		{
			name: 'beta',
			prerelease: true,
		},
	],
	plugins: [
		[
			'@semantic-release/commit-analyzer',
			{
				preset: 'angular',
				parserOpts: {
					noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
				},
			},
		],
		[
			'@semantic-release/release-notes-generator',
			{
				preset: 'angular',
				parserOpts: {
					noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
				},
				writerOpts: {
					commitsSort: ['subject', 'scope'],
				},
			},
		],
		[
			'@semantic-release/changelog',
			{
				changelogFile: 'docs/CHANGELOG.md',
			},
		],
		'@semantic-release/npm',
		'@semantic-release/github',
		[
			'@semantic-release/git',
			{
				assets: ['CHANGELOG.md', 'dist/**', 'package.json'],
				message:
					'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
			},
		],
	],
};
