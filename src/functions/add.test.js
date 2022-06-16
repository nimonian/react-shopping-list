const add = require('./add')

describe('The add function', () => {
  test('add 2 and 3 to make 5', () => {
    expect(add(2,3)).toBe(5)
  })
})
