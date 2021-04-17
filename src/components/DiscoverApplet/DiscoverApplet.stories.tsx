import React from "react";
import { Story, Meta } from "@storybook/react";
import DiscoverApplet, { DiscoverAppletProps } from "./DiscoverApplet";

export default {
  title: "Common/DiscoverApplet",
  component: DiscoverApplet,
  excludeStories: /.*Args$/,
} as Meta;

const Template: Story<DiscoverAppletProps> = (args) => (
  <DiscoverApplet {...args} />
);

export const League = Template.bind({});
export const leagueArgs: DiscoverAppletProps = {
  color: "#2C9A5D",
  text:
    'If League of Legends game is starting, then set Status on Slack to "In a Meeting".',
  href: "#",
};
League.args = leagueArgs;

export const Valorant = Template.bind({});
export const valorantArgs: DiscoverAppletProps = {
  color: "#AD4138",
  text: "If CPU usage is high, then close Chrome.",
  href: "#",
};
Valorant.args = valorantArgs;

export const TooMuchText = Template.bind({});
export const tooMuchTextArgs = {
  color: "#AD4138",
  text:
    "If CPU usage is high, then close Chrome.If CPU usage is high, then close Chrome.If CPU usage is high, then close Chrome.If CPU usage is high, then close Chrome.If CPU usage is high, then close Chrome.",
  href: "#",
};
TooMuchText.args = tooMuchTextArgs;
