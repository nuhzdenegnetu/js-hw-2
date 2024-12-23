import { getRandomInt } from '../getRandomInt.js'

describe('getRandomInt function', () => {
  test('should return a number within the specified range', () => {
    const testCases = [
      { min: 1, max: 10 },
      { min: 20, max: 30 },
      { min: 100, max: 200 },
      { min: -50, max: 50 },
      { min: 0, max: 1000 }
    ]

    for (const { min, max } of testCases) {
      const result = getRandomInt(min, max)
      expect(result).toBeGreaterThanOrEqual(min)
      expect(result).toBeLessThanOrEqual(max)
    }
  })
})
