import { expect } from '@storybook/jest';
import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryObj,
} from '@storybook/react';
import {
  fireEvent,
  userEvent,
  waitFor,
  within,
} from '@storybook/testing-library';

import { CreateTour } from './';

export default {
  // title: 'Example/Button',
  component: CreateTour,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof CreateTour>;

type Story = ComponentStoryObj<typeof CreateTour>;

export const Default: Story = {
  args: {
    // primary: true,
  },
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const EmptyName: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole('button');
    await sleep(0);
    userEvent.click(button);
    const errorMessage = await canvas.findByText('入力してください');
    expect(errorMessage).toBeInTheDocument();
  },
};
