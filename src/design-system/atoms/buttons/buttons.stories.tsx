import { Meta, Story } from '@storybook/react';
import { StudyButton } from '.';

export default {
    title: 'ATOMS/Buttons',
    argTypes: {},
} as Meta;

const StudyButtonSB: Story = args => <StudyButton {...args} />;

export const Study_Button = StudyButtonSB.bind({});
Study_Button.args = {};
