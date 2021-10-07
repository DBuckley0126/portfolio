import { render } from '@testing-library/react'
import OutlineSquareButton from './OutlineSquareButton'

describe('OutlineSquareButton', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<OutlineSquareButton />)
		expect(baseElement).toBeTruthy()
	})
})
