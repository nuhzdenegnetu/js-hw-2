import { code } from './prepareTestEnvironment.js'

eval(code)

describe('Task #2: Check for assignment operators', () => {
  // Перевірка на використання оператора +=
  test('Check for += operator', () => {
    expect(code).toMatch(/myTest \+=/)
  })

  // Перевірка на використання оператора -=
  test('Check for -= operator', () => {
    expect(code).toMatch(/myTest -=/)
  })

  // Перевірка на використання оператора *=
  test('Check for *= operator', () => {
    expect(code).toMatch(/myTest \*=/)
  })

  // Перевірка на використання оператора /=
  test('Check for /= operator', () => {
    expect(code).toMatch(/myTest \/=/)
  })

  // Перевірка на використання оператора %=
  test('Check for %= operator', () => {
    expect(code).toMatch(/myTest %=/)
  })
})
