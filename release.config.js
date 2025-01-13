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
				assets: ['CHANGELOG.md'],
				message:
					'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
			},
		],
	],
};
