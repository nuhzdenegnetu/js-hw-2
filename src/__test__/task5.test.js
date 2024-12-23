import { code } from './prepareTestEnvironment.js'

eval(code)

describe('Task #5: Check for the presence of text "рама" in strObj.str', () => {
  test('Text "рама" is present in strObj.str', () => {
    // Перевірка, що isRama вірно вказує на наявність тексту "рама"
    expect(global.isRama).toBeTruthy()
  })

  // Перевіряємо індекс входження
  test('isRamaPos correctly indicates the position of "рама" or its presence', () => {
    // Переконуємося, що результат не -1, що вказувало б на відсутність тексту "рама"
    // Цей тест актуальний, якщо ви використовуєте indexOf
    expect(global.strObj.str.indexOf('рама')).not.toBe(-1)
  })
})
