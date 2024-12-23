console.log('JS #2. Домашнє завдання. Від простих до складних обчислень і рядків')

/*
 * #1
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */
let i = 2
console.log(++i)
console.log(--i)
console.log(i++)
console.log(i--)
// i


/*
 * #2
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */
let myNum = 10
let myTest = 20
myTest += 5
myTest -= 5
myTest *= 5
myTest /= 5
myTest %= 5


// myTest
// +=
// –=
// *=
// /=
// %=


/*
 * #3
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */
// константа Pi → myPi
let myPi = Math.PI
// округлене значення числа 89.279 → myRound
let number = 89.279
let myRound = Math.round(number)
console.log(myRound)
// випадкове число між 0..10 (10 не включено) → myRandom
let myRandom = Math.floor(Math.random() * 11)
console.log(myRandom)
// 3 у 5 степені → myPow
let myPow = 3 ** 5
console.log(myPow)


/*
 * #4
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */
let strObj = {
  str: 'Мама мыла раму, рама мыла маму'
}
strObj.length = strObj.str.length
console.log('strObj = ', strObj)
// Мама мыла раму, рама мыла маму
// strObj


/*
 * #5
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.4), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

let isRamaPos = strObj.str.indexOf('рама')
var isRama = strObj.str.includes('рама')

console.log('isRamaPos:', isRamaPos)
console.log('isRama:', isRama)
// isRamaPos
// isRama


/*
 * #6
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.4), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */
let strReplace = strObj.str.replace('мыла', 'моет')
strReplace = strReplace.replace('рама', 'Рама')
strReplace = strReplace.replace('мыла', 'держит')
console.log('strReplace:', strReplace)
// strReplace


/*
 * #7
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

let someStr = 'some STRING'
let upperStr = someStr.toUpperCase()
let lowerStr = someStr.toLowerCase()
console.log(upperStr)
console.log(lowerStr)
