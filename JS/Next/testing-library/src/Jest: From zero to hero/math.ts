export const numbers = {
  add: (a: number, b: number) => a + b,
  subtract: (a: number, b: number) => a - b,
  multi: (a: number, b: number) => a * b,
  calc: (a: number, b: number) => numbers.add(a, b) + numbers.subtract(a, b),
}

export const add = (a: number, b: number) => a + b
export const subtract = (a: number, b: number) => b - a
export const multiply = (a: number, b: number) => a * b
export const divide = (a: number, b: number) => b / a

// export const add = jest.fn()
// export const subtract = jest.fn()
// export const multiply = jest.fn()
// export const divide = jest.fn()
