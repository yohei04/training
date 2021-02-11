import { convert } from '../../utils/currency'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
)

beforeEach(() => {
  fetch.mockClear()
})

test('finds exchange', async () => {
  const rate = await convert('USD', 'CAD')

  expect(rate).toEqual(1.42)
  expect(fetch).toHaveBeenCalledTimes(1)
})

test('returns null when exception', async () => {
  fetch.mockImplementationOnce(() => Promise.reject('API is down'))

  const rate = await convert('USD', 'CAD')

  expect(rate).toEqual(null)
  expect(fetch).toHaveBeenCalledWith('https://api.exchangeratesapi.io/latest?base=USD')
})
