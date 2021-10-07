import { render } from '@testing-library/react'
import BackButton from './BackButton'

describe('BackButton', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<BackButton />)
		expect(baseElement).toBeTruthy()
	})
})
