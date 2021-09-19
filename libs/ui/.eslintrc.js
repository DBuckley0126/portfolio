module.exports = {
	extends: ['../../.eslintrc.js'],
	ignorePatterns: ['!**/*'],
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
			rules: {
				'import/no-extraneous-dependencies': 'off',
			},
		},
		{
			files: ['*.ts', '*.tsx'],
			rules: {},
		},
		{
			files: ['*.js', '*.jsx'],
			rules: {},
		},
	],
}
