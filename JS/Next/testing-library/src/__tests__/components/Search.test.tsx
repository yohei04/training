import Search from '@/components/Search'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Search', () => {
  test('calls the onChange callback handler with fireEvent', async () => {
    const onChange = jest.fn()

    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    )

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'JavaScript' } })

    expect(onChange).toHaveBeenCalledTimes(1)
  })

  test('calls the onChange callback handler with userEvent', async () => {
    const onChange = jest.fn()

    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    )

    userEvent.type(screen.getByRole('textbox'), 'JavaScript')

    expect(onChange).toHaveBeenCalledTimes(10)
  })
})
