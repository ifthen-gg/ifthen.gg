import React from "react";
import { Story, Meta } from "@storybook/react";
import SelectTrigger, { SelectTriggerProps } from "./SelectTrigger";

export default {
  title: "Common/SelectTrigger",
  component: SelectTrigger,
  excludeStories: /.*Args$/,
} as Meta;

const Template: Story<SelectTriggerProps> = (args) => (
  <SelectTrigger {...args} />
);

export const Selection = Template.bind({});
export const selectionArgs: SelectTriggerProps = {
  title: "Game Event",
  description: "Start the Action when something happens in a game",
};
Selection.args = selectionArgs;
