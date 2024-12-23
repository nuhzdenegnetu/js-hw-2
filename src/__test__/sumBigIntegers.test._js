import { sumBigIntegers } from '../sumBigIntegers'

describe('sumBigIntegers function', () => {
  test('should return the correct sum of two BigIntegers', () => {
    const testCases = [
      {
        numStr1: '33',
        numStr2: '22',
        expected: BigInt('55')
      },
      {
        numStr1: '9007199254740991',
        numStr2: '9007199254740991',
        expected: BigInt('18014398509481982')
      },
      {
        numStr1: '10000000000000000',
        numStr2: '10000000000000000', expected: BigInt('20000000000000000')
      },
      {
        numStr1: '999999999999999999',
        numStr2: '1', expected: BigInt('1000000000000000000')
      },
      {
        numStr1: '123456789012345678901234567890',
        numStr2: '987654321098765432109876543210',
        expected: BigInt('1111111110111111111011111111100')
      },
      {
        numStr1: '1234567890123456789012345678901234567890',
        numStr2: '9876543210987654321098765432098765432100',
        expected: BigInt('11111111101111111110111111110999999999990')
      }
    ]

    for (const { numStr1, numStr2, expected } of testCases) {
      const result = sumBigIntegers(numStr1, numStr2)
      expect(result).toEqual(expected)
    }
  })
})
