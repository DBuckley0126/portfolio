import styled from 'styled-components'
import { TestComponent } from '@portfolio/ui'
import { Route, Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../assets/logo.svg'
import star from '../assets/star.svg'

import routes from './routes'
import AllRoutes from './routing/AllRoutes'

const StyledAppContainer = styled.div`
	font-family: sans-serif;
`

const App = () => {
	return (
		<StyledAppContainer>
			<AllRoutes routes={routes} />
		</StyledAppContainer>
	)
}
export default App
