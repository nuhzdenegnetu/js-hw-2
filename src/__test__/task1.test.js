import { code } from './prepareTestEnvironment.js'

eval(code)

describe('Task #1: Check for prefix and postfix increments/decrements', () => {
  // Перевірка на префіксний інкремент
  test('Check for prefix increment', () => {
    expect(code).toMatch(/\+\+i/)
  })

  // Перевірка на постфіксний інкремент
  test('Check for postfix increment', () => {
    expect(code).toMatch(/i\+\+/)
  })

  // Перевірка на префіксний декремент
  test('Check for prefix decrement', () => {
    expect(code).toMatch(/--i/)
  })

  // Перевірка на постфіксний декремент
  test('Check for postfix decrement', () => {
    expect(code).toMatch(/i--/)
  })
})
