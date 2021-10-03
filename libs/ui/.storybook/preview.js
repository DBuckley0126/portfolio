import { ThemeProvider } from '@material-ui/core/styles'
import easTheme from '../src/utils/theme'

export const decorators = [
	(Story) => (
		<ThemeProvider theme={easTheme}>
			<Story />
		</ThemeProvider>
	)
]
