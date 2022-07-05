import { rest } from 'msw';
import { Toaster } from 'react-hot-toast';

import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { TourList } from '../';

export default {
  component: TourList,
  decorators: [
    (Story) => (
      <>
        <Toaster />
        <Story />
      </>
    ),
  ],
} as ComponentMeta<typeof TourList>;

type Story = ComponentStoryObj<typeof TourList>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get('http://localhost:4000/tours', (_, res, ctx) =>
          res(
            ctx.status(200),
            ctx.json([
              {
                id: 1,
                name: 'test1',
                tourType: 'test1',
                timeType: 'test1',
                country: 'test1',
                participantsNumber: 1,
                description: 'test1',
              },
              {
                id: 2,
                name: 'test2',
                tourType: 'test2',
                timeType: 'test2',
                country: 'test2',
                participantsNumber: 2,
                description: 'test2',
              },
            ])
          )
        ),
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
      ],
    },
  },
};
