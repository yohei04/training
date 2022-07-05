import { rest } from 'msw';

import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { TourItem } from '../';

export default {
  component: TourItem,
} as ComponentMeta<typeof TourItem>;

type Story = ComponentStoryObj<typeof TourItem>;

export const Default: Story = {
  args: {
    id: 1,
    name: 'test',
    tourType: 'test',
    timeType: 'test',
    country: 'test',
    participantsNumber: 1,
    description: 'test',
  },
  parameters: {
    msw: {
      handlers: [
        rest.delete('http://localhost:4000/tours/1', (_, res, ctx) =>
          res(
            ctx.status(200),
            ctx.json({
              id: 1,
              name: 'test',
              tourType: 'test',
              timeType: 'test',
              country: 'test',
              participantsNumber: 1,
              description: 'test',
            })
          )
        ),
        rest.get('http://localhost:4000/tours/1', (_, res, ctx) =>
          res(
            ctx.status(200),
            ctx.json({
              id: 1,
              name: 'test',
              tourType: 'test',
              timeType: 'test',
              country: 'test',
              participantsNumber: 1,
              description: 'test',
            })
          )
        ),
      ],
    },
  },
};
