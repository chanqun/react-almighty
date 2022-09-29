import React from "react";
import {StudyButton, SampleButton} from './index';
import {Meta, Story} from "@storybook/react";

export default {
    title: 'ATOMS/Buttons',
    argTypes: {}
} as Meta;

const StudyButtonSB: Story<StudyButton> = (args) => {
    return <StudyButton {...args} />;
}

export const Study_Button = StudyButtonSB.bind({});
Study_Button.args = {};
