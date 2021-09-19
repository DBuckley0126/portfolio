import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const StyledFlex = styled.div`
	display: flex;
	height: 100px;
	width: 100px;
	background-color: ${({ bg }) => bg};
`

const TestComponent = ({ bg = 'red', name, onClick, number }) => {
	return (
		<StyledFlex bg={bg} onClick={onClick}>
			{name}
		</StyledFlex>
	)
}

TestComponent.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	bg: PropTypes.string,
	number: PropTypes.number,
}

TestComponent.defaultProps = {
	name: 'Stranger',
	number: 5,
}

export default TestComponent
