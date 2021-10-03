/**
 * Flattens (reduces to one array) a tree of routes.
 * @param {array} routes A tree of route objects to flatten.
 * @package
 */
const flattenRoutes = (routes) =>
	routes
		.map((route) =>
			route.children
				? [route].concat(flattenRoutes(route.children))
				: route
		)
		.reduce(
			(acc, cur) =>
				Array.isArray(cur) ? [...acc, ...cur] : [...acc, cur],
			[]
		)

export default flattenRoutes
