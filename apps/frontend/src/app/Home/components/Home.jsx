import { Typography } from '@mui/material'
import { ToggleTest } from '@portfolio/ui'
import { DeleteOutlined, ThreeDRotation } from '@mui/icons-material'
import { ReactComponent as Logo } from '../../../assets/logo.svg'

const Home = () => {
	return (
		<div>
			<ToggleTest />
			<ThreeDRotation color="secondary" />
			<DeleteOutlined />
			<Typography variant="h3">Responsive h3</Typography>
			<Logo />
		</div>
	)
}
export default Home
