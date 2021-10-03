/* eslint no-return-assign: "error" */

/**
 * Converts a route description into camel case. This camelcase value is used as
 * the key in a tree of paths.
 * @param {string} pathName The description of the route
 * @package
 */
export const toCamelCase = (pathName) =>
	pathName
		.split(' ')
		.map((nameFragment, index) =>
			index === 0
				? nameFragment.toLowerCase()
				: nameFragment.charAt(0).toUpperCase() + nameFragment.slice(1)
		)
		.join('')

/**
 * Extracts path names from a tree of routes. These path names can then be used
 * within a front-end app as keys, rather than having to use the full URL itself.
 *
 * @example
 * <Link to={paths.services.index}>Services</Link>
 * <Link to={paths.home}>Home</Link>
 *
 * @param {Routes} routes A tree of routes.
 * @returns {Paths} A tree of paths
 *
 * @example
 * {
 * home: "/",
 * aboutUs: "/about-us",
 * services: {
 *  index: "/services",
 *   buy: "/services/buy",
 *  sell: {
 *    index: "/services/sell",
 *    sellItem: "/services/sell/:id"
 *  }
 * }
 * }
 *
 * @package
 */
const extractPaths = (routes) => {
	const pathMap = {}

	routes.forEach((route) => {
		if (route.children) {
			return (pathMap[toCamelCase(route.description)] = {
				index: route.path,
				...extractPaths(route.children),
			})
		}

		return (pathMap[toCamelCase(route.description)] = route.path)
	})

	return pathMap
}

export default extractPaths
