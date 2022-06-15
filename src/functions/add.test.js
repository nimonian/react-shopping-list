const add = require('./add')

describe('The add function', () => {
  test('adds 2 + 3 to make 5', () => {
    expect(add(2,3)).toBe(5)
  })

  test('adds -1 and -2 to make -3', () => {
    expect(add(-1,-2)).toBe(-3)
  })
})