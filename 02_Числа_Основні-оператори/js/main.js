console.log("========== Числа. Основні оператори =========");

//6 ================= Математичні оператори ===========
// const x = 12;
// const y = 5;

// // Додавання
// console.log(x + y); // 17

// // Віднімання
// console.log(x - y); // 7

// // Множення
// console.log(x * y); // 60

// // Ділення
// console.log(x / y); // 2.4

// // Остача від ділення
// console.log(x % y); // 0

// // Додавання із заміною (також є для всіх інших операторів)
// let value = 5;

// // Аналогічно запису value = value + 10;
// value = value + 10;
// value += 10;
// console.log(value); // 15

//6 ================= Оператори порівняння ===========

// a > b і a < b - більше / менше
// a >= b і a <= b - більше / менше або дорівнює
// a == b - рівність
// a != b - нерівність
// a === b - сувора рівність
// a !== b - сувора нерівність

// console.log("GoIteets" !== "Goiteets");

// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false

//6 ================= Приведення до числа ===========

// const value = "5";

// console.log(value);
// console.log(Number(value));

// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"

//6 ================= Методи Number.parseInt() і Number.parseFloat() ===========
//8 Перетворюють рядок символ за символом, доки це можливо. У разі виникнення помилки повертається підсумкове число.

// console.log(Number("48px")); // NaN
// console.log(Number.parseInt("48.15px5")); //48
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseFloat("48.15.15px5")); //48.15
// console.log(Number.parseFloat("qwerty")); //NaN

//6 ================= Перевірка на число ===========
//8 Для перевірки на число можна використовувати метод Number.isNaN(val). Він перевіряє, чи вказане значення є NaN. Метод відповідає на запитання "Це Not A Number?" і повертає:

const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

//6 ================= Додавання чисел з плаваючою точкою ===========

// console.log(0.1 + 0.2 === 0.3); //false
// console.log((0.1 * 10 + 0.2 * 10) / 10);

// console.log(2 ** 2); //4;

//6 =================Об'єкт Math  ===========

//8 Math.floor(num) - повертає найменше ціле число,
//8 менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(1.999)); // 1

// Math.ceil(num) - повертає найбільше ціле число,
// більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.001)); // 2

// // Math.round(num) - повертає значення числа,
// // округленого до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(2, 4)); // 16
// console.log(2 ** 4); // 16

// Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 і 1
// console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

// const randomBetween1And100 = Math.floor(Math.random() * 100) + 1;
// console.log(randomBetween1And100);

//8 Створення діапазонів: Щоб отримати випадкове число в межах конкретного діапазону, наприклад від 5 до 15, користуйтеся таким підходом:
console.log(Math.floor(Math.random() * (10 - 1) + 1)); // псевдовипадкове число від 1 до 10

const min = 5;
const max = 10;
const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log("randomInRange :>> ", randomInRange);

const num = 5;
const num1 = 10;
const num2 = 57;
const num3 = 105;

let total = num + num1;
console.log("total :>> ", total);
total = total + num2;
// total += num2;
console.log("total :>> ", total);
total += num3;
console.log("total :>> ", total);
