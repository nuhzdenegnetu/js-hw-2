import { code } from './prepareTestEnvironment.js'

eval(code)

describe('Task #4: Create and check strObj object', () => {
  // Перевірка, що об'єкт strObj має правильну структуру та значення
  test('strObj is correctly defined with str and length properties', () => {
    // Перевіряємо, що strObj визначено
    expect(global.strObj).toBeDefined()

    // Перевіряємо, що властивість str містить відповідний рядок
    expect(global.strObj.str).toBe('Мама мыла раму, рама мыла маму')

    // Перевіряємо, що властивість length правильно визначено
    expect(global.strObj.length).toBe('Мама мыла раму, рама мыла маму'.length)
  })
})
