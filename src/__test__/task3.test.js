import { code } from './prepareTestEnvironment.js'

eval(code)

describe('Task #3: Math object usage', () => {
  // Перевірка константи Pi
  test('myPi is defined and equals Math.PI', () => {
    expect(global.myPi).toBe(Math.PI)
  })
  // Перевірка на використання Math.PI
  test('Code uses Math.PI', () => {
    expect(code).toMatch(/Math\.PI/)
  })

  // Перевірка округлення числа 89.279
  test('myRound is defined and correctly rounds 89.279', () => {
    expect(global.myRound).toBe(Math.round(89.279))
  })
  // Перевірка на використання Math.round
  test('Code uses Math.round', () => {
    expect(code).toMatch(/Math\.round\(/)
  })

  // Перевірка на генерацію випадкового числа
  test('myRandom is defined and is within the expected range 0 to 10', () => {
    expect(global.myRandom).toBeGreaterThanOrEqual(0)
    expect(global.myRandom).toBeLessThan(10)
  })
  // Перевірка на використання Math.random
  test('Code uses Math.random', () => {
    expect(code).toMatch(/Math\.random\(\)/)
  })

  // Перевірка піднесення числа 3 до степеня 5
  test('myPow is defined and correctly calculates 3 to the power of 5', () => {
    expect(global.myPow).toBe(Math.pow(3, 5))
  })
})
