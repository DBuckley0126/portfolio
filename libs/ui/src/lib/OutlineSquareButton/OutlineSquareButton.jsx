import { useState, useEffect } from 'react'
import { Button, Box } from '@mui/material'
import { motion, useSpring } from 'framer-motion'
import { css } from '@emotion/react'
import { useTheme } from '@material-ui/core/styles'
import styled from '@emotion/styled'

const MotionFlex = styled(motion.div)`
	display: flex;
	width: auto;
	height: 100px;
	justify-content: center;
	align-items: center;
`

const OutlineSquareButton = () => {
	const theme = useTheme()

	const colorSpring = useSpring(theme?.palette?.gradient?.first)
	const [backgroundColor, setBackgroundColor] = useState(
		theme?.palette?.gradient?.first
	)
	useEffect(
		() =>
			colorSpring.onChange((latest) => {
				setBackgroundColor(latest)
			}),
		[]
	)

	return (
		<Button onClick={() => console.log('red')}>
			<MotionFlex
				onHoverStart={() =>
					colorSpring.set(theme?.palette?.gradient?.second)
				}
				onHoverEnd={() =>
					colorSpring.set(theme?.palette?.gradient?.first)
				}
				style={{ background: backgroundColor }}
			>
				<Box
					display="flex"
					px={15}
					width="calc(100% - 10px)"
					height="calc(100% - 10px)"
					sx={{ backgroundColor: theme?.palette?.primary?.main }}
				>
					<h4
						css={css`
							background: ${backgroundColor};
							background-clip: text;
							-webkit-background-clip: text;
							-webkit-text-fill-color: transparent;
						`}
					>
						This is a button
					</h4>
				</Box>
			</MotionFlex>
		</Button>
	)
}

export default OutlineSquareButton
