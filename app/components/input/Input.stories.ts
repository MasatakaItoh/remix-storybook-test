import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within } from "@storybook/test";

import { Input } from "./Input";

const meta = {
  component: Input,
  // https://storybook.js.org/docs/essentials/actions#via-storybooktest-fn-spy-function
  args: { onChange: fn() },
  parameters: {
    a11y: {
      config: {
        // Labelコンポーネントと組みあわせて使用するため問題なし
        rules: [{ id: "label", enabled: false }],
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Typed: Story = {
  args: {},
  // https://storybook.js.org/docs/writing-stories/play-function
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.type(input, "typed");
  },
};
