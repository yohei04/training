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

test('mock return value of a function one time', () => {
  const mock = jest.fn()

  mock.mockReturnValueOnce('Hello').mockReturnValueOnce('there')

  expect(mock()).toBe('Hello')
  expect(mock()).toBe('there')
  expect(mock).toHaveBeenCalledTimes(2)

  mock('Hello', 'there', 'Steve')
  expect(mock).toHaveBeenCalledWith('Hello', 'there', 'Steve')
})

test('mock implementation of a function', () => {
  const mock = jest.fn().mockImplementation((hoge) => `United Kingdom ${hoge}`)
  expect(mock('is the Best')).toBe('United Kingdom is the Best')
})

test('spying using original implementation', () => {
  const pizza = {
    name: (n: string) => `Pizza name: ${n}`,
  }

  const spy = jest.spyOn(pizza, 'name')
  expect(pizza.name('Cheese')).toBe('Pizza name: Cheese')
  expect(spy).toHaveBeenCalledWith('Cheese')
})

test('another spy', () => {
  const hoge = {
    myMethod: () => 33,
  }

  const spy_myMethod = jest.spyOn(hoge, 'myMethod').mockImplementation(() => 25)
  const result = hoge.myMethod()
  expect(result).toBe(25)
  expect(spy_myMethod).toHaveBeenCalledTimes(1)

  spy_myMethod.mockRestore()
  const originalResult = hoge.myMethod()
  expect(originalResult).toBe(33)
})

// test('a method will be called from another method', () => {
//   expect(numbers.calc(2, 3)).toBe(4)

//   const spyAdd = spyOn(numbers, 'add')
//   const spyMulti = spyOn(numbers, 'multi')
//   numbers.calc(1, 3)
//   expect(spyAdd).toHaveBeenCalled
//   expect(spyMulti).toHaveBeenCalledTimes(0)

//   expect(numbers.add).toHaveBeenCalledTimes(1)
// })

test('expect a promise to resolve', async () => {
  const user = {
    getFullName: jest.fn((name: string) => Promise.resolve(name)),
  }
  await expect(user.getFullName('Karl Hadwen')).resolves.toBe('Karl Hadwen')
})

test('expect a promise to reject', async () => {
  const user = {
    getFullName: jest.fn(() => Promise.reject(new Error('Something went wrong'))),
  }

  await expect(user.getFullName()).rejects.toThrowError('Something went wrong')
})

import * as app from '../app'
import * as math from '../math'

test('calls math.add', () => {
  const addMock = jest.spyOn(math, 'add')

  // calls the original implementation
  expect(app.doAdd(1, 2)).toEqual(3)

  // and the spy stores the calls to add
  expect(addMock).toHaveBeenCalledWith(1, 2)
  expect(math.add).toHaveBeenCalledTimes(1)
})

test('calls math.add2', () => {
  const addMock: jest.SpyInstance = jest.spyOn(math, 'add')

  // override the implementation
  addMock.mockImplementation(() => 'mock')
  expect(app.doAdd(1, 2)).toEqual('mock')

  // restore the original implementation
  addMock.mockRestore()
  expect(app.doAdd(1, 2)).toEqual(3)
})
