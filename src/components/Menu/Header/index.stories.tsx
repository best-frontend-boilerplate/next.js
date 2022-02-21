import React from "react";
import { Header as HeaderComponent } from ".";

export default {
  title: "Components/Header",
  component: HeaderComponent,
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
const Template = () => <HeaderComponent />;
export const Header = Template.bind({});
