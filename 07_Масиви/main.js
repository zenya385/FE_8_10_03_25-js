console.log("=============== Масиви array ================");

const array = [];
// console.log("array", array);

const names = ["Mango", "Poly", "Ajax", "Stepan", "Ivan"];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log("names", names);
// console.log("numbers", numbers);

// Зазначаючи в дужках індекс елемента, ми отримуємо його значення

console.log(names[0]);
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
let total = 0;

for (const num of numbers) {
  //   console.log(num);
  total += num;
}

console.log("total", total);
