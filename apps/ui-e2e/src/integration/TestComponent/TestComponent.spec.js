import { getStorybookUrl } from '../../utils/storybookUtils'

it('Should empty the field when clicking the cross', () => {
	cy.visit(
		getStorybookUrl({
			componentName: 'TestComponent',
			storyName: 'primary',
		})
	)
	cy.get('#button').click()
	cy.get('#warning').should('contain.text', 'You need to fill in the form!')
})
