import { greetByName } from '../greetByName'

describe('greet function', () => {
  test('should return correct greeting', () => {
    expect(greetByName('Hi', 'John')).toBe('Hi, John')
    expect(greetByName('Hey', 'Bob')).toBe('Hey, Bob')
    expect(greetByName('Hello', 'Mary')).toBe('Hello, Mary')
  })
})
