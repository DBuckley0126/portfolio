module.exports = {
	extends: [
		'plugin:cypress/recommended',
		'plugin:chai-friendly/recommended',
		'../../.eslintrc.js',
	],
	ignorePatterns: ['!**/*'],
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
			rules: {},
		},
	],
}
