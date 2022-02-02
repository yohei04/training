import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import userEvent from '@testing-library/user-event'
import { BASE_ENDPOINT } from '../../../constant/endpoint'
import { BlogTemplate } from '..'

const server = setupServer(
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
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('ブログリスト', async () => {
  it('データの表示', async () => {
    render(<BlogTemplate />)

    const loading = await screen.getByText('Loading...')
    await waitFor(() => screen.getByText('test1'))
    const element = await screen.getByText('test1')

    expect(loading).toBeInTheDocument()
    expect(element).toBeInTheDocument()

    // screen.debug()
  })
})
