import { useContext } from 'react'

import { RoutesContext } from '../RoutesProvider'
import extractPaths from '../lib/extractPaths'

/**
 * Returns all of the route paths within an app.
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
 */
const usePaths = () => {
	const paths = useContext(RoutesContext)
	return extractPaths(paths)
}

export default usePaths
