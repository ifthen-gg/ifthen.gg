import React from "react";
import { Story, Meta } from "@storybook/react";
import UserMenu, { Applet, UserMenuProps } from "./UserMenu";

export default {
  title: "Common/UserMenu",
  component: UserMenu,
  excludeStories: /.*Args$/,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

type UserMenuPropsWithoutEvents = Omit<UserMenuProps, "onAppletActiveChange">;

const Template: Story<UserMenuProps> = (args) => (
  <main style={{ height: "100vh" }}>
    <UserMenu {...args} />
  </main>
);

const defaultApplets: Applet[] = [
  {
    active: false,
    color: "#2D89A1",
    text: "If CPU usage is high, then close Chrome.",
  },
  {
    active: true,
    color: "#2D89A1",
    text: "If CPU usage is high, then close Chrome.",
  },
];

export const Default = Template.bind({});
export const defaultArgs: UserMenuPropsWithoutEvents = {
  username: "phlgr",
  applets: defaultApplets,
};
Default.args = defaultArgs;

const manyApplets: Applet[] = [
  {
    active: false,
    color: "#2D89A1",
    text: "If CPU usage is high, then close Chrome.",
  },
  {
    active: true,
    color: "#2D89A1",
    text: "If CPU usage is high, then close Chrome.",
  },
  {
    active: false,
    color: "#2D89A1",
    text: "If CPU usage is high, then close Chrome.",
  },
  {
    active: true,
    color: "#2D89A1",
    text: "If CPU usage is high, then close Chrome.",
  },
  {
    active: false,
    color: "#2D89A1",
    text: "If CPU usage is high, then close Chrome.",
  },
  {
    active: true,
    color: "#2D89A1",
    text: "If CPU usage is high, then close Chrome.",
  },
  {
    active: false,
    color: "#2D89A1",
    text: "If CPU usage is high, then close Chrome.",
  },
  {
    active: true,
    color: "#2D89A1",
    text: "If CPU usage is high, then close Chrome.",
  },
];

export const ManyApplets = Template.bind({});
export const manyAppletsArgs: UserMenuPropsWithoutEvents = {
  username: "phlgr",
  applets: manyApplets,
};
ManyApplets.args = manyAppletsArgs;

export const NoApplets = Template.bind({});
export const NoAppletsArgs: UserMenuPropsWithoutEvents = {
  username: "sirlunchalot619",
  applets: [],
};
NoApplets.args = NoAppletsArgs;
