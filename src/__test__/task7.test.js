import { code } from './prepareTestEnvironment.js'

eval(code)

describe('Task #7: Transform text case', () => {
  test('upperStr is correctly transformed to uppercase', () => {
    expect(global.upperStr).toBe('SOME STRING')
  })

  test('Code contains toUpperCase() method', () => {
    expect(code).toMatch(/\.toUpperCase\(\)/)
  })

  test('lowerStr is correctly transformed to lowercase', () => {
    expect(global.lowerStr).toBe('some string')
  })

  test('Code contains toLowerCase() method', () => {
    expect(code).toMatch(/\.toLowerCase\(\)/)
  })
})
