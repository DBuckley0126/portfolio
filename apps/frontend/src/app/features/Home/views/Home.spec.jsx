import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'

describe('Home', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<BrowserRouter>
				<Home />
			</BrowserRouter>
		)
		expect(baseElement).toBeTruthy()
	})
	it('should have a greeting as the title', () => {
		const { getByText } = render(
			<BrowserRouter>
				<Home />
			</BrowserRouter>
		)
		expect(getByText('Welcome to frontend!')).toBeTruthy()
	})
})
