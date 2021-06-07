import React from "react";
import { Story, Meta } from "@storybook/react";
import UserMenu, { UserMenuProps } from "./UserMenu";

export default {
  title: "Common/UserMenu",
  component: UserMenu,
  excludeStories: /.*Args$/,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: Story<UserMenuProps> = (args) => (
  <main style={{ height: "100vh" }}>
    <UserMenu {...args} />
  </main>
);

const defaultApplets = [
  {
    active: false,
    color: "#2D89A1",
    text: "If CPU usage is high, then close Chrome.",
    onActiveChange: console.log,
  },
  {
    active: true,
    color: "#2D89A1",
    text: "If CPU usage is high, then close Chrome.",
    onActiveChange: console.log,
  },
];

export const Default = Template.bind({});
export const defaultArgs: UserMenuProps = {
  username: "phlgr",
  applets: defaultApplets,
};
Default.args = defaultArgs;

const manyApplets = [
  {
    active: false,
    color: "#2D89A1",
    text: "If CPU usage is high, then close Chrome.",
    onActiveChange: console.log,
  },
  {
    active: true,
    color: "#2D89A1",
    text: "If CPU usage is high, then close Chrome.",
    onActiveChange: console.log,
  },
  {
    active: false,
    color: "#2D89A1",
    text: "If CPU usage is high, then close Chrome.",
    onActiveChange: console.log,
  },
  {
    active: true,
    color: "#2D89A1",
    text: "If CPU usage is high, then close Chrome.",
    onActiveChange: console.log,
  },
  {
    active: false,
    color: "#2D89A1",
    text: "If CPU usage is high, then close Chrome.",
    onActiveChange: console.log,
  },
  {
    active: true,
    color: "#2D89A1",
    text: "If CPU usage is high, then close Chrome.",
    onActiveChange: console.log,
  },
  {
    active: false,
    color: "#2D89A1",
    text: "If CPU usage is high, then close Chrome.",
    onActiveChange: console.log,
  },
  {
    active: true,
    color: "#2D89A1",
    text: "If CPU usage is high, then close Chrome.",
    onActiveChange: console.log,
  },
];

export const ManyApplets = Template.bind({});
export const manyAppletsArgs: UserMenuProps = {
  username: "phlgr",
  applets: manyApplets,
};
ManyApplets.args = manyAppletsArgs;

export const NoApplets = Template.bind({});
export const NoAppletsArgs: UserMenuProps = {
  username: "sirlunchalot619",
  applets: [],
};
NoApplets.args = NoAppletsArgs;
