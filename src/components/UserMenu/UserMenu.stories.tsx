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

const Template: Story<UserMenuProps> = (args) => <UserMenu {...args} />;

export const Default = Template.bind({});
export const defaultArgs: UserMenuProps = {
  username: "Philipp",
};
Default.args = defaultArgs;
