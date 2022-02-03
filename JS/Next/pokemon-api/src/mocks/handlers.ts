import { rest } from 'msw'
import { BASE_ENDPOINT } from '../constant/endpoint'

export const handlers = [
  rest.get(`${BASE_ENDPOINT}/blogs`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: 'test1',
          body: 'test1',
          author: 'test1',
        },
      ])
    )
  }),
  
  rest.post(`${BASE_ENDPOINT}/blogs`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          // id: 100,
          title: 'post1',
          body: 'post1',
          author: 'post1',
        },
      ])
    )
  }),
]
