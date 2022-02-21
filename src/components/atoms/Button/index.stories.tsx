import React from "react";
import { action } from "@storybook/addon-actions";
import Button from ".";

export default {
  title: "Components/Atoms",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "A simple button component",
      },
    },
  },
  args: {
    type: "primary",
  },
  argTypes: {
    color: {
      description: "Color of the text",
      control: "color",
    },
  },
};
const Template = () => <Button onClick={action("onClickAction")}>Hello</Button>;
export const ButtonComponet = Template.bind({});
