import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from '@cypress/react'
import * as stories from '../../../../../libs/ui/src/lib/TestComponent/TestComponent.stories'

// compile the "Primary" story with the library
const { Primary } = composeStories(stories)

it('Should empty the field when clicking the cross', () => {
	// and mount the story using @cypress/react library
	mount(<Primary />)

	// then run our tests
	cy.get('svgghk').click()
	cy.get('input').then((i) => expect(i.val()).to.be.empty)
})
