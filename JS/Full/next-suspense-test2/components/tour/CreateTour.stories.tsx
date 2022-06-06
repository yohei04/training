import { rest } from 'msw';

import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { CreateTour } from './';

export default {
  // title: 'Example/Button',
  component: CreateTour,
} as ComponentMeta<typeof CreateTour>;

type Story = ComponentStoryObj<typeof CreateTour>;

export const Default: Story = {};

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

const mockedErrorMessage = '重複していますよおお';
export const DuplicatedName: Story = {
  name: '重複した時',
  parameters: {
    msw: {
      handlers: [
        rest.post('http://localhost:4000/tours', (_, res, ctx) =>
          res(
            ctx.status(400),
            ctx.json({
              errors: [
                {
                  property: 'name',
                  constraints: {
                    isUnique: mockedErrorMessage,
                  },
                },
              ],
            })
          )
        ),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const name = canvas.getByLabelText('ツアー名：');
    const button = canvas.getByRole('button');

    await userEvent.type(name, 'test', { delay: 50 });
    userEvent.click(button);
    const errorMessage = await canvas.findByText(mockedErrorMessage);
    expect(errorMessage).toBeInTheDocument();
  },
};

export const LongName: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const name = canvas.getByLabelText('ツアー名：');
    const button = canvas.getByRole('button');

    await userEvent.type(name, 'a'.repeat(11), { delay: 50 });
    userEvent.click(button);
    waitFor(() => expect(name).toHaveErrorMessage('10文字以下で入力してください'));
  },
};
