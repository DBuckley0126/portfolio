import { render } from '@testing-library/react'
import ToggleTest from './ToggleTest'

describe('ToggleTest', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<ToggleTest />)
		expect(baseElement).toBeTruthy()
	})
})
