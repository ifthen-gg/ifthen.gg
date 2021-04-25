import React from "react";
import { Story, Meta } from "@storybook/react";
import Sidebar, { SidebarProps } from "./Sidebar";

export default {
  title: "Common/Sidebar",
  component: Sidebar,
  excludeStories: /.*Args$/,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: Story<SidebarProps> = (args) => (
  <main style={{ height: "100vh" }}>
    <Sidebar {...args} />
  </main>
);

export const Home = Template.bind({});
export const homeArgs: SidebarProps = {
  activeLink: "home",
};
Home.args = homeArgs;

export const New = Template.bind({});
export const newArgs: SidebarProps = {
  activeLink: "add",
};
New.args = newArgs;

export const Settings = Template.bind({});
export const settingsArgs: SidebarProps = {
  activeLink: "home",
  showSettings: true,
};
Settings.args = settingsArgs;
