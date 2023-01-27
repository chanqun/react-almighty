import {Meta, Story} from '@storybook/react';
import {Box} from "./Box";

export default {
    component: Box,
    title: 'ATOMS/Box',
} as Meta;

const BoxSB: Story = args => <Box {...args}>hello world</Box>;

export const Box_default = BoxSB.bind({});
Box_default.args = {};
