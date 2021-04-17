import React from "react";
import { Story, Meta } from "@storybook/react";
import MyApplet, { MyAppletProps } from "./MyApplet";

export default {
  title: "Common/MyApplet",
  component: MyApplet,
} as Meta;

const Template: Story<MyAppletProps> = (args) => <MyApplet {...args} />;

export const Active = Template.bind({});
Active.args = {
  active: true,
  color: "#2D89A1",
  text: "If CPU usage is high, then close Chrome.",
};

export const InActive = Template.bind({});
InActive.args = {
  active: false,
  color: "#2D89A1",
  text: "If CPU usage is high, then close Chrome.",
};

export const DifferentColor = Template.bind({});
DifferentColor.args = {
  active: true,
  color: "#784A8D",
  text:
    'If League of Legends game is starting, then set Status on Slack to "In a Meeting".',
};
