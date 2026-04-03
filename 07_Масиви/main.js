console.log("=============== Масиви array ================");

const array = [];
// console.log("array", array);

const names = ["Mango", "Poly", "Ajax", "Stepan", "Ivan"];

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];

// console.log("names", names);
// console.log("numbers", numbers);

// Зазначаючи в дужках індекс елемента, ми отримуємо його значення

// console.log(names[0]);

// console.log(numbers[5]);
// console.log("last element", numbers[14]); // undefined

// const lengthOfArray = numbers.length - 1; // індекс останбого елементу
// console.log(lengthOfArray);

// names[1] = "Kivi";
// names[4] = "Ivan";
// // console.log("names", names[3]);
// numbers[14] = "Stepan";

// const indexLastElement = numbers.length - 1;
// // const lastElement = numbers[indexLastElement];
// const lastElement = numbers[numbers.length - 1]; // numbers[13]  // false
// const indexLastElementOfNumber = numbers[13]; // false

// console.log(lastElement);
// console.log(indexLastElementOfNumber);
// console.log("numbers", numbers);

//8 ======================= ітерація по масиву ========================

// for (let i = 0; i <= 10; i += 1) {
//   console.log("i =>", i);
// }

// for (let index = 0; index < names.length; index += 1) {
//   const element = names[index];
//   //   console.log(` під індексом ${index} лежить елемент  =>`, element);
//   console.log(`${index + 1}.`, element);
// }

// console.log("element", element); //error
// console.log("names[0]", names[0]);
// console.log("names[1]", names[1]);
// console.log("names[2]", names[2]);
// let total = 0;

// for (const num of numbers) {
//   //   console.log(num);
//   total += num;
// }

// console.log("total", total);

//8 ===================== шукаємо ім'я клієнта =======================

// console.log("=========== шукаємо ім'я клієнта ================");

// const searchClientName = "Stepanio";
// let msg = `Такого клієнта як ${searchClientName}, не існує в базі!`;

// for (let index = 0; index < names.length; index += 1) {
//   const clientName = names[index];
//   //   console.log(` під індексом ${index} лежить елемент  =>`, element);
//   console.log(`${index + 1}.`, clientName);

//   if (searchClientName === clientName) {
//     msg = `Клієнт з іменем ${searchClientName} є в базі даних!`;
//     break;
//   }
// }

// console.log(msg);

//8 console.log("=========== шукаємо число більше якогось значення ================");

const max = 9;

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log("number", number);

  if (number < max) {
    continue;
  }
  console.log(`Число більше ніж ${max} : ${number} `);
}

//8 ====================== Багатовимірні масиви ==================

[[], [], []];

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(matrix[0][0]); //1
// console.log(matrix[1][2]); //6
// console.log(matrix[2][1]); //8
let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log(`Підмасив matrix`, matrix[i]);
//   for (let index = 0; index < matrix[i].length; index += 1) {
//     const element = matrix[i][index];
//     console.log(`Елемент підмасиву matrix`, matrix[i][index]);
//     total += matrix[i][index];
//   }
// }
// console.log(total);

const totalNumsOfMatrix = matrix.flat().reduce((acc, num) => acc + num, 0);
console.log(totalNumsOfMatrix);
