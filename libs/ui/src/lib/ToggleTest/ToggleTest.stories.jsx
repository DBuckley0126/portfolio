import ToggleTest from './ToggleTest'

export default {
	component: ToggleTest,
	title: 'ToggleTest',
	argTypes: { onClick: { action: 'clicked' } }
}

const Template = (args) => <ToggleTest {...args} />

export const Primary = Template.bind({})

Primary.args = {
	bg: 'red',
	name: 'Hello world'
}

export const Secondary = Template.bind({})

Secondary.args = {
	...Primary.args,
	bg: 'blue',
	onClick: (e) => {
		console.log(e)
		return e
	}
}
