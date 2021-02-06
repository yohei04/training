import pizzas from '../data.json'

// very basic test to notify the user if our pizza data has changed
test('the pizza data is correct', () => {
  expect(pizzas).toMatchSnapshot()
  expect(pizzas).toHaveLength(4)
  expect(pizzas.map((pizza) => pizza.name)).toEqual([
    'Chicago Pizza',
    'Neapolitan Pizza',
    'New York Pizza',
    'Sicilian Pizza',
  ])
})

test('mock implementation of a basic function', () => {
  const mock = jest.fn(() => 'I am a mock function')
  expect(mock()).toBe('I am a mock function')
  expect(mock).toHaveBeenCalledTimes(1)
})
