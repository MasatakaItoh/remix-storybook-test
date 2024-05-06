import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

import { Input } from "./Input";

const mockFn = fn();

const meta = {
  component: Input,
  // https://storybook.js.org/docs/essentials/actions#via-storybooktest-fn-spy-function
  args: { onChange: mockFn },
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
    const value = "typed";
    await userEvent.type(input, value);
    // https://storybook.js.org/docs/writing-tests/test-runner
    await expect(input).toHaveValue(value);
    await expect(mockFn).toHaveBeenCalledTimes(value.length);
  },
};
