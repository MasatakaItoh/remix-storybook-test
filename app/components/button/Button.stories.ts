import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

const meta = {
  component: Button,
  // https://storybook.js.org/docs/essentials/actions#via-storybooktest-fn-spy-function
  args: { onClick: fn() },
  // https://storybook.js.org/docs/essentials/controls#choosing-the-control-type
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: { type: "radio" },
      options: ["default", "sm", "lg", "icon"],
    },
  },
  parameters: {
    a11y: {
      config: {
        // デザイン都合なので許容する
        rules: [{ id: "color-contrast", enabled: false }],
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Color: Story = {
  args: {
    children: "Button",
    variant: "destructive",
  },
};

export const Size: Story = {
  args: {
    children: "Button",
    size: "sm",
  },
};
