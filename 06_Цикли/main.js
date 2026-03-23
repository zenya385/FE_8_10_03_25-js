console.log("================= cicle ================");

//6 ===================== Цикл while ======================
//7 Цикл з передумовою — цикл, який виконується, доки правдива якась умова, зазначена до його початку. Ця умова перевіряється до виконання тіла циклу, тому тіло може не виконатися жодного разу, якщо умова від самого початку - хибна.

//8 while (condition) {
//8   // код, тіло циклу (statement)
//8 }

// let counter = 0;

// while (false) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

//6 ===================== Цикл do...while ======================

//7 Цикл з постумовою — цикл, в якому умова перевіряється після виконання тіла циклу. Звідси випливає, що тіло завжди виконується хоча б один раз.

//8 do {
//8   // statement
//8 } while (condition);

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

//6 ===================== Цикл for ======================
//8 for (; ; ){}

// for (let counter = 0; counter < 10; counter += 1) {
//   console.log("counter :>> ", counter);
// }

// for (let i = 0; i < 10; i += 1) {
//   console.log("i :>> ", i);
// }

const string = "Java Script";

// console.table(string);

// console.log("index[0] :>> ", string[0]);
// console.log("index[1] :>> ", string[1]);
// console.log("index[2] :>> ", string[2]);
// console.log("index[3] :>> ", string[3]);
// console.log("index[4] :>> ", string[4]);
// console.log("index[5] :>> ", string[5]);
// console.log("index[6] :>> ", string[6]);
// console.log("index[7] :>> ", string[7]);
// console.log("index[8] :>> ", string[8]);
// console.log("index[9] :>> ", string[9]);
// console.log("index[10] :>> ", string[10]);

for (let i = 0; i < string.length; i += 1) {
  const element = string[i];
  console.log(`${i + 1}   :>> `, element);
}

const max = 15;

for (let i = 1; i <= max; i += 1) {
  console.log(i);
}

for (let i = string.length - 1; i >= 0; i -= 1) {
  const element = string[i];
  console.log(element);
}
