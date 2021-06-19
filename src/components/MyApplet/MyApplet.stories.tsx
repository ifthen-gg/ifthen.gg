import React from "react";
import { Story, Meta } from "@storybook/react";
import MyApplet, { MyAppletProps } from "./MyApplet";

export default {
  title: "Common/MyApplet",
  component: MyApplet,
  excludeStories: /.*Args$/,
} as Meta;

type MyAppletPropsWithoutEvents = Omit<MyAppletProps, "onActiveChange">;
const Template: Story<MyAppletProps> = (args) => <MyApplet {...args} />;

export const Active = Template.bind({});
export const activeArgs: MyAppletPropsWithoutEvents = {
  active: true,
  color: "#2D89A1",
  text: "If CPU usage is high, then close Chrome.",
};
Active.args = activeArgs;

export const Inactive = Template.bind({});
export const inactiveArgs: MyAppletPropsWithoutEvents = {
  active: false,
  color: "#2D89A1",
  text: "If CPU usage is high, then close Chrome.",
};
Inactive.args = inactiveArgs;

export const DifferentColor = Template.bind({});
export const differentColorArgs: MyAppletPropsWithoutEvents = {
  active: true,
  color: "#784A8D",
  text: 'If League of Legends game is starting, then set Status on Slack to "In a Meeting".',
};
DifferentColor.args = differentColorArgs;
