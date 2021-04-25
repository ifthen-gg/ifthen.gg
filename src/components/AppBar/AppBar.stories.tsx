import React from "react";
import { Story, Meta } from "@storybook/react";
import AppBar, { AppBarProps } from "./AppBar";

export default {
  title: "Common/AppBar",
  component: AppBar,
  excludeStories: /.*Args$/,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: Story<AppBarProps> = (args) => <AppBar {...args} />;

export const Desktop = Template.bind({});
export const desktopArgs = {
  inGame: false,
};
Desktop.args = desktopArgs;

export const InGame = Template.bind({});
export const inGameArgs = {
  inGame: true,
};
InGame.args = inGameArgs;
