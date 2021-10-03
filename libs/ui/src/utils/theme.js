import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const colorTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#FFFFFF'
		},
		secondary: {
			main: '#000000'
		},
		gradient: {
			first: 'linear-gradient(90deg, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 0%, 1) 50%, hsla(0, 0%, 0%, 1) 100%)',
			second: 'linear-gradient(90deg, hsla(154, 100%, 76%, 1) 0%, hsla(234, 100%, 83%, 1) 50%, hsla(288, 100%, 81%, 1) 100%)'
		}
	}
})

const unResponsiveTheme = createTheme(colorTheme, {
	typography: {
		h1: {
			fontFamily: 'Work SansVariable, Work Sans, Arial, Sans-Serif',
			fontWeight: 800,
			fontSize: '4.2rem',
			fontColor: 'secondary.main'
		},
		subtitle1: {
			fontFamily: 'Roboto, Arial, Sans-Serif',
			fontWeight: 500,
			fontSize: '1.5rem'
		},
		body1: {
			fontFamily: 'Roboto, Arial, Sans-Serif'
		},
		button: {
			fontFamily: 'Work SansVariable, Work Sans, Arial, Sans-Serif',
			fontWeight: 800,
			fontSize: '1.4rem'
		},
		fontFamily: 'Roboto, Arial, Sans-Serif'
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
