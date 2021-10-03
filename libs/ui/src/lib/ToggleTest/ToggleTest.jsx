import PropTypes from 'prop-types'
import Switch from '@mui/material/Switch'

const label = { inputProps: { 'aria-label': 'Switch demo' } }

const ToggleTest = ({ bg, name, onClick, number }) => (
	<>
		<Switch sx={{ m: 1 }} {...label} defaultChecked color="secondary" />
	</>
)

ToggleTest.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	bg: PropTypes.string,
	number: PropTypes.number
}

ToggleTest.defaultProps = {
	number: 5,
	bg: 'red',
	onClick: null
}

export default ToggleTest
