import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { BlogTemplate } from '..'

describe('ブログ', () => {
  it('データ一覧の表示', async () => {
    render(<BlogTemplate />)

    const loading = await screen.findByText('Loading...')
    const element = await screen.findByText('title1')

    expect(loading).toBeInTheDocument()
    expect(element).toBeInTheDocument()
  })

  it('データの作成', async () => {
    render(<BlogTemplate />)

    const input = await screen.findByLabelText('ブログタイトル')
    const button = await screen.findByText('ブログ追加')
    const text = 'title4'
    userEvent.type(input, text)
    userEvent.click(button)

    const element = await screen.findByText(text)
    expect(element).toBeInTheDocument()
  })

  it('データの削除', async () => {
    render(<BlogTemplate />)

    const deleteButtons = await screen.findAllByText('X')
    userEvent.click(deleteButtons[0])
    const element = screen.queryByText('title1')
    await waitFor(() => expect(expect(element).not.toBeInTheDocument()))

    screen.debug()
  })
})
