/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { StrictMode } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { theme } from '@portfolio/ui'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import routes from './app/routes'
import AllRoutes from './app/routing/AllRoutes'
import '@fontsource/source-sans-pro'

ReactDOM.render(
	<Provider store={store}>
		<StrictMode>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<AllRoutes routes={routes} />
				</BrowserRouter>
			</ThemeProvider>
		</StrictMode>
	</Provider>,
	document.getElementById('root')
)
