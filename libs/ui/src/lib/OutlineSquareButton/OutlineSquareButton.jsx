import { useState } from 'react'
import { ButtonBase, Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const textClipStyling = {
	backgroundClip: 'text',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent'
}

const OutlineSquareButton = ({ sx, children, ...props }) => {
	const theme = useTheme()
	const [hovered, setHovered] = useState(false)

	const outlineVariants = {
		hovered: {
			background: theme?.palette?.gradient?.fullColor
		},
		unHovered: {
			background: theme?.palette?.gradient?.blackOut
		}
	}

	const textVariants = {
		hovered: {
			background: theme?.palette?.gradient?.fullColor,
			...textClipStyling
		},
		unHovered: {
			background: theme?.palette?.gradient?.blackOut,
			...textClipStyling
		}
	}

	return (
		<ButtonBase
			onHoverStart={() => setHovered(true)}
			onHoverEnd={() => setHovered(false)}
			initial="unHovered"
			animate={hovered ? 'hovered' : 'unHovered'}
			variants={outlineVariants}
			onFocus={() => {
				setHovered(true)
			}}
			onBlur={() => setHovered(false)}
			sx={{
				display: 'flex',
				width: 'fit-content',
				height: 'auto',
				justifyContent: 'center',
				alignItems: 'center',
				p: '6px',
				...sx
			}}
			transition={{ type: 'tween', ease: 'easeInOut' }}
			component={motion.div}
			{...props}
		>
			<Box
				sx={{
					backgroundColor: theme?.palette?.primary?.main,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					px: '18px',
					py: '8px',
					width: 'calc(100% - 12px)',
					height: '-webkit-fill-available'
				}}
			>
				<Typography
					component={motion.span}
					variants={textVariants}
					variant="button"
					transition={{ type: 'tween', ease: 'easeInOut' }}
				>
					{children}
				</Typography>
			</Box>
		</ButtonBase>
	)
}

OutlineSquareButton.propTypes = {
	children: PropTypes.string,
	sx: PropTypes.object
}

OutlineSquareButton.defaultProps = {
	children: '',
	sx: {}
}

export default OutlineSquareButton
