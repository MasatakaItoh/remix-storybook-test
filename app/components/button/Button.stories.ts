import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

const meta = {
  component: Button,
  // https://storybook.js.org/docs/essentials/actions#via-storybooktest-fn-spy-function
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    size: "lg",
  },
};

export const Icon: Story = {
  args: {
    children: "i",
    size: "icon",
  },
};
