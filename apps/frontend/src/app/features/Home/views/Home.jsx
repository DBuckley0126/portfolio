import { Box, Button } from '@mui/material'
import { OutlineSquareButton } from '@portfolio/ui'

import Title from '../components/Title'

const Home = () => {
	return (
		<Box
			sx={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'start',
				width: 'fit-content',
				height: 'auto',
				m: 'auto'
			}}
		>
			<Title />
			<OutlineSquareButton sx={{ mt: 5 }}>
				START MULTIPLAYER
			</OutlineSquareButton>
		</Box>
	)
}
export default Home
