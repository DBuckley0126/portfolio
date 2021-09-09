import TestComponent from './TestComponent';

export default {
  component: TestComponent,
  title: 'TestComponent',
  argTypes: { onClick: { action: 'clicked' } }
};

const Template = (args) => <TestComponent {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  bg: 'red',
  name: 'Hello world',
};

export const Secondary = Template.bind({});

Secondary.args = {
  ...Primary.args,
  bg: 'blue',
  onClick: (e) => {
    console.log(e)
    return e
  },
};
