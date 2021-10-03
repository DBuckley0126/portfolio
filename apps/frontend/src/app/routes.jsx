const routes = [
	{
		path: '/',
		description: 'root',
		exact: true,
		component: () => <h1>Log in</h1>,
	},
	{
		path: '/app',
		description: 'app',
		component: () => <h1>App Index</h1>,
		children: [
			{
				path: '/app/page',
				description: 'App page',
				exact: true,
				component: () => <h1>App Page</h1>,
			},
		],
	},
]

export default routes
