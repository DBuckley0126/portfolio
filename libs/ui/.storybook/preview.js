import { ThemeProvider } from '@material-ui/core/styles'
import easTheme from '../src/utils/easTheme'

export const decorators = [
	(Story) => (
		<ThemeProvider theme={easTheme}>
			<Story />
		</ThemeProvider>
	)
]
