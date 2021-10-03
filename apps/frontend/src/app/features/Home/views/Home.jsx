import { Box } from '@mui/material'
import { OutlineSquareButton } from '@portfolio/ui'
import { useTheme } from '@material-ui/core/styles'
import Title from '../components/Title'

const Home = () => {
	const theme = useTheme()

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="100%"
		>
			<Title />
			<OutlineSquareButton />
		</Box>
	)
}
export default Home
