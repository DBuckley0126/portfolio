/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { StrictMode } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { theme } from '@portfolio/ui'
import { BrowserRouter } from 'react-router-dom'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/work-sans/variable.css'
import '@fontsource/work-sans/800.css'
import '@fontsource/work-sans/500.css'

import store from './store'
import routes from './app/routing/routes'
import AllRoutes from './app/routing/AllRoutes'
import RootLayout from './app/layouts/RootLayout'

ReactDOM.render(
	<Provider store={store}>
		<StrictMode>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<RootLayout>
						<AllRoutes routes={routes} />
					</RootLayout>
				</BrowserRouter>
			</ThemeProvider>
		</StrictMode>
	</Provider>,
	document.getElementById('root')
)
