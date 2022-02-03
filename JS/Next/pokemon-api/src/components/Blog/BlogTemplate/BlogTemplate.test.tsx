import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import userEvent from '@testing-library/user-event'
import { BASE_ENDPOINT } from '../../../constant/endpoint'
import { BlogTemplate } from '..'

describe('ブログリスト', () => {
  it('データの表示', async () => {
    render(<BlogTemplate />)

    const loading = screen.getByText('Loading...')
    const element = await screen.findByText('test1')

    expect(loading).toBeInTheDocument()
    expect(element).toBeInTheDocument()

    // screen.debug()
  })
})
