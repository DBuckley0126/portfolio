import OutlineSquareButton from './OutlineSquareButton'

export default {
	component: OutlineSquareButton,
	title: 'OutlineSquareButton'
}

const Template = (args) => <OutlineSquareButton {...args} />

export const Primary = Template.bind({})

Primary.args = {
	bg: 'red',
	name: 'Hello world'
}
