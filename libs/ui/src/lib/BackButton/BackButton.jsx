import { useState } from 'react'
import { ButtonBase, Box } from '@mui/material'
import { visuallyHidden } from '@mui/utils'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import ArrowIcon from './ArrowIcon'

const BackButton = ({ sx, ...props }) => {
	const [hovered, setHovered] = useState(false)
	const [keyboardFocused, setKeyboardFocus] = useState(false)

	return (
		<ButtonBase
			onHoverStart={() => setHovered(true)}
			onHoverEnd={() => setHovered(false)}
			onFocusVisible={() => {
				setHovered(true)
				setKeyboardFocus(true)
			}}
			onBlur={() => {
				setHovered(false)
				setKeyboardFocus(false)
			}}
			sx={{
				display: 'flex',
				width: '56px',
				height: '56px',
				justifyContent: 'center',
				alignItems: 'center',
				borderStyle: 'solid',
				borderColor: keyboardFocused
					? 'accessibility.main'
					: 'secondary.main',
				borderWidth: 6,
				clipPath: 'inset(0px 0px)',
				...sx
			}}
			component={motion.div}
			{...props}
		>
			<Box
				sx={{
					position: 'absolute',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
				position="absolute"
				component={motion.div}
				initial={{ x: 0 }}
				animate={hovered ? { x: -60 } : { x: 0 }}
			>
				<ArrowIcon />
			</Box>
			<Box
				sx={{
					position: 'absolute',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
				component={motion.div}
				initial={{ x: 100 }}
				animate={hovered ? { x: 0 } : { x: 60 }}
			>
				<ArrowIcon />
			</Box>
			<Box sx={visuallyHidden}>back button</Box>
		</ButtonBase>
	)
}

BackButton.propTypes = {
	sx: PropTypes.object
}

BackButton.defaultProps = {
	sx: {}
}

export default BackButton
