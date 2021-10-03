import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import RoutesProvider from './RoutesProvider'
import flattenRoutes from './lib/flattenRoutes'

/**
 * Renders provided routes using React Router's Switch & Route components.
 * @param {Routes} routes A list of routes to be used within an app. See
 * the README for this module for more guidance on what to provide.
 */
const AllRoutes = ({ routes, children }) => {
	const [flattenedRoutes] = useState(flattenRoutes(routes))

	return (
		<RoutesProvider routes={routes}>
			<Switch>
				{flattenedRoutes.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						component={route.component}
						exact
					/>
				))}
				{!children && <Route component={() => <p>404</p>} />}
				{children}
			</Switch>
		</RoutesProvider>
	)
}

export default AllRoutes
