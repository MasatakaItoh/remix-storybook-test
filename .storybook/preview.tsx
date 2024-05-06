import type { Preview } from "@storybook/react";
import { createRemixStub } from "@remix-run/testing";

import '../app/tailwind.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    tags: ['autodocs'],
  },
  decorators: [
    Story => {
      const Stub = createRemixStub([
        {
          path: '/',
          Component: () => <Story />,
        },
      ])
      return <Stub />
    },
  ],
};

export default preview;
