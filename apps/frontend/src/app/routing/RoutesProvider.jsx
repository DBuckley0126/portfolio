import { createContext } from 'react'
import PropTypes from 'prop-types'
/**
 * React context for accessing the tree of routes.
 * @package
 */
export const RoutesContext = createContext({
	routes: []
})
RoutesContext.displayName = 'RoutesContext'

/**
 * Provider for the Routes context
 * @param {Routes} routes A list of routes within an app.
 * @param children React children.
 * @package
 */
const RoutesProvider = ({ routes, children }) => (
	<RoutesContext.Provider value={routes}>{children}</RoutesContext.Provider>
)

RoutesProvider.propTypes = {
	routes: PropTypes.array
}

RoutesProvider.defaultProps = {
	routes: []
}

export default RoutesProvider
