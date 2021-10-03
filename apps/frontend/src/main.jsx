/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { StrictMode } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { easTheme } from '@portfolio/ui'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import store from './store'
import '@fontsource/source-sans-pro'

ReactDOM.render(
	<Provider store={store}>
		<StrictMode>
			<ThemeProvider theme={easTheme}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ThemeProvider>
		</StrictMode>
	</Provider>,
	document.getElementById('root')
)
