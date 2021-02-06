import { convert } from '../../utils/currency'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
)

it('concerts USD to CAD', async () => {
  const rate = await convert('USD', 'CAD')

  expect(rate).toEqual(1.42)
  expect(fetch).toHaveBeenCalledTimes(1)
})
