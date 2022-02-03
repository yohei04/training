import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { BlogTemplate } from '..'

describe('ブログリスト', () => {
  it('データの表示', async () => {
    render(<BlogTemplate />)

    const loading = screen.getByText('Loading...')
    const element = await screen.findByText('test1')

    expect(loading).toBeInTheDocument()
    expect(element).toBeInTheDocument()
  })

  it('データの作成', async () => {
    render(<BlogTemplate />)

    const input = screen.getByLabelText('ブログタイトル')
    const button = screen.getByText('ブログ追加')
    userEvent.type(input, 'test2')
    userEvent.click(button)

    const element = await screen.findByText('test2')

    expect(element).toBeInTheDocument()

    screen.debug()
  })
})
