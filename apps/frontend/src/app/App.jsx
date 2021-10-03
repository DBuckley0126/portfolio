import { TestComponent } from '@portfolio/ui'
import { Route, Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../assets/logo.svg'
import star from '../assets/star.svg'

import routes from './routes'
import AllRoutes from './routing/AllRoutes'

const App = () => {
	return (
		<div>
			<AllRoutes routes={routes} />
		</div>
	)
}
export default App
