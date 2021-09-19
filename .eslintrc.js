const restrictedGlobals = require('confusing-browser-globals')
module.exports = {
	root: true,
	ignorePatterns: ['**/*'],
	plugins: ['@nrwl/nx', 'prettier'],
	extends: ['airbnb', 'prettier', 'airbnb/hooks'],
	rules: {
		'prettier/prettier': 'error',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
		babelOptions: {
			configFile: './babel.config.json',
		},
	},
	parser: '@babel/eslint-parser',
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
			env: {
				browser: true,
				commonjs: true,
				es6: true,
				jest: true,
				node: true,
			},
			rules: {
				/**
				 * Standard ESLint rule configurations
				 * https://eslint.org/docs/rules
				 */
				'import/no-unresolved': ['off', { paths: ['@portfolio/ui'] }],
				'array-callback-return': 'warn',
				'dot-location': ['warn', 'property'],
				eqeqeq: ['warn', 'smart'],
				'new-parens': 'warn',
				'no-caller': 'warn',
				'no-cond-assign': ['warn', 'except-parens'],
				'no-const-assign': 'warn',
				'no-control-regex': 'warn',
				'no-delete-var': 'warn',
				'no-dupe-args': 'warn',
				'no-dupe-keys': 'warn',
				'no-duplicate-case': 'warn',
				'no-empty-character-class': 'warn',
				'no-empty-pattern': 'warn',
				'no-eval': 'warn',
				'no-ex-assign': 'warn',
				'no-extend-native': 'warn',
				'no-extra-bind': 'warn',
				'no-extra-label': 'warn',
				'no-fallthrough': 'warn',
				'no-func-assign': 'warn',
				'no-implied-eval': 'warn',
				'no-invalid-regexp': 'warn',
				'no-iterator': 'warn',
				'no-label-var': 'warn',
				'no-labels': ['warn', { allowLoop: true, allowSwitch: false }],
				'no-lone-blocks': 'warn',
				'no-loop-func': 'warn',
				'no-mixed-operators': [
					'warn',
					{
						groups: [
							['&', '|', '^', '~', '<<', '>>', '>>>'],
							['==', '!=', '===', '!==', '>', '>=', '<', '<='],
							['&&', '||'],
							['in', 'instanceof'],
						],
						allowSamePrecedence: false,
					},
				],
				'no-multi-str': 'warn',
				'no-native-reassign': 'warn',
				'no-negated-in-lhs': 'warn',
				'no-new-func': 'warn',
				'no-new-object': 'warn',
				'no-new-symbol': 'warn',
				'no-new-wrappers': 'warn',
				'no-obj-calls': 'warn',
				'no-octal': 'warn',
				'no-octal-escape': 'warn',
				'no-redeclare': 'warn',
				'no-regex-spaces': 'warn',
				'no-restricted-syntax': ['warn', 'WithStatement'],
				'no-script-url': 'warn',
				'no-self-assign': 'warn',
				'no-self-compare': 'warn',
				'no-sequences': 'warn',
				'no-shadow-restricted-names': 'warn',
				'no-sparse-arrays': 'warn',
				'no-template-curly-in-string': 'warn',
				'no-this-before-super': 'warn',
				'no-throw-literal': 'warn',
				'no-restricted-globals': ['error'].concat(restrictedGlobals),
				'no-unexpected-multiline': 'warn',
				'no-unreachable': 'warn',
				'no-unused-expressions': 'off',
				'no-unused-labels': 'warn',
				'no-useless-computed-key': 'warn',
				'no-useless-concat': 'warn',
				'no-useless-escape': 'warn',
				'no-useless-rename': [
					'warn',
					{
						ignoreDestructuring: false,
						ignoreImport: false,
						ignoreExport: false,
					},
				],
				'no-with': 'warn',
				'no-whitespace-before-property': 'warn',
				'require-yield': 'warn',
				'rest-spread-spacing': ['warn', 'never'],
				strict: ['warn', 'never'],
				'unicode-bom': ['warn', 'never'],
				'use-isnan': 'warn',
				'valid-typeof': 'warn',
				'no-restricted-properties': [
					'error',
					{
						object: 'require',
						property: 'ensure',
						message:
							'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
					},
					{
						object: 'System',
						property: 'import',
						message:
							'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
					},
				],
				'getter-return': 'warn',
				/**
				 * Import rule configurations
				 * https://github.com/benmosher/eslint-plugin-import
				 */
				'import/first': 'error',
				'import/no-amd': 'error',
				'import/no-webpack-loader-syntax': 'error',
				'@nrwl/nx/enforce-module-boundaries': [
					'error',
					{
						enforceBuildableLibDependency: true,
						allow: [],
						depConstraints: [
							{
								sourceTag: '*',
								onlyDependOnLibsWithTags: ['*'],
							},
						],
					},
				],
			},
		},
		{
			files: ['*.ts', '*.tsx'],
			extends: ['plugin:@nrwl/nx/typescript'],
			rules: {},
		},
		{
			files: ['*.tsx', '*.jsx'],
			extends: ['plugin:@nrwl/nx/javascript'],
			rules: {
				/**
				 * React-specific rule configurations
				 * https://github.com/yannickcr/eslint-plugin-react
				 */
				'react/jsx-props-no-spreading': 'warn',
				'react/forbid-foreign-prop-types': [
					'warn',
					{ allowInPropTypes: true },
				],
				'react/jsx-no-comment-textnodes': 'warn',
				'react/jsx-no-duplicate-props': 'warn',
				'react/jsx-no-target-blank': 'warn',
				'react/jsx-no-undef': 'error',
				'react/jsx-pascal-case': [
					'warn',
					{ allowAllCaps: true, ignore: [] },
				],
				'react/jsx-uses-vars': 'warn',
				'react/no-danger-with-children': 'warn',
				'react/no-direct-mutation-state': 'warn',
				'react/no-is-mounted': 'warn',
				'react/no-typos': 'error',
				'react/jsx-uses-react': 'off',
				'react/react-in-jsx-scope': 'off',
				'react/require-render-return': 'error',
				'react/style-prop-object': 'warn',
				'react/jsx-no-useless-fragment': 'warn',
				/**
				 * JSX Accessibility rule configurations
				 * https://github.com/evcohen/eslint-plugin-jsx-a11y
				 */
				'jsx-a11y/accessible-emoji': 'warn',
				'jsx-a11y/alt-text': 'warn',
				'jsx-a11y/anchor-has-content': 'warn',
				'jsx-a11y/anchor-is-valid': [
					'warn',
					{ aspects: ['noHref', 'invalidHref'] },
				],
				'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
				'jsx-a11y/aria-props': 'warn',
				'jsx-a11y/aria-proptypes': 'warn',
				'jsx-a11y/aria-role': 'warn',
				'jsx-a11y/aria-unsupported-elements': 'warn',
				'jsx-a11y/heading-has-content': 'warn',
				'jsx-a11y/iframe-has-title': 'warn',
				'jsx-a11y/img-redundant-alt': 'warn',
				'jsx-a11y/no-access-key': 'warn',
				'jsx-a11y/no-distracting-elements': 'warn',
				'jsx-a11y/no-redundant-roles': 'warn',
				'jsx-a11y/role-has-required-aria-props': 'warn',
				'jsx-a11y/role-supports-aria-props': 'warn',
				'jsx-a11y/scope': 'warn',
			},
		},
	],
}
