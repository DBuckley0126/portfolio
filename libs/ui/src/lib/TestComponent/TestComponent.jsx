import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledFlex = styled.div`
	display: flex;
	height: 100px;
	width: 100px;
	background-color: ${({ bg }) => bg};
`

const TestComponent = ({ bg, name, onClick, number }) => (
	<StyledFlex bg={bg} onClick={onClick || onClick}>
		{name + number}
	</StyledFlex>
)

TestComponent.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	bg: PropTypes.string,
	number: PropTypes.number,
}

TestComponent.defaultProps = {
	number: 5,
	bg: 'red',
	onClick: null,
}

export default TestComponent
