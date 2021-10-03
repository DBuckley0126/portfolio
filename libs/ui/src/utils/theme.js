import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const unResponsiveTheme = createTheme({
	typography: {
		fontFamily: 'Source Sans Pro, Arial'
	},
	palette: {
		mode: 'light',
		primary: {
			main: '#e0e0e0',
			light: '#ffffff',
			dark: '#aeaeae'
		},
		secondary: {
			main: '#c41e3a',
			light: '#fd5964',
			dark: '#8c0015'
		}
	},
	breakpoints: {
		values: {
			mobile: 0,
			tablet: 640,
			laptop: 1024,
			desktop: 1200
		}
	}
})

const theme = responsiveFontSizes(unResponsiveTheme, {
	breakpoints: ['mobile', 'tablet', 'laptop', 'desktop']
})

export default theme
