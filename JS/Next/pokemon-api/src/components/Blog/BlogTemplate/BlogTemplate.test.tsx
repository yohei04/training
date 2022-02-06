import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { BlogTemplate } from '..'
import { rest } from 'msw'
import { server } from '../../../mocks/server'
import { BASE_ENDPOINT } from '../../../constant/endpoint'
import { BlogType } from '../../../types/blog'

describe('ブログ', () => {
  it('データ一覧の表示', async () => {
    render(<BlogTemplate />)

    const loading = await screen.findByText('Loading...')
    const element = await screen.findByText('title1')

    expect(loading).toBeInTheDocument()
    expect(element).toBeInTheDocument()
  })

  it('データの作成', async () => {
    // const mockFn = jest.fn()
    // server.use(
    //   rest.post(`/blogs`, (req, res, ctx) => {
    //     mockFn((req?.body as BlogType).title)
    //     return res(ctx.status(200), ctx.delay(500))
    //   })
    // )

    render(<BlogTemplate />)

    const input = await screen.findByLabelText('ブログタイトル')
    const button = await screen.findByText('ブログ追加')
    const text = 'title4'
    userEvent.type(input, text)
    userEvent.click(button)

    const element = await screen.findByText(text)
    expect(element).toBeInTheDocument()
    // await waitFor(() => expect(mockFn).toBeCalledWith(text))

    screen.debug()
  })
})
