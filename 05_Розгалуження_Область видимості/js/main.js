//6 ========================== Розгалуження ==========================

//8 Розгалуження використовуються для виконання різноманітного коду, залежно від умови. Принцип роботи простий - результат умови приводиться до буля true або false, після чого потік програми спрямовується в ту або іншу гілку.

//6 ========================== інструкція if ==========================
// if (умова) {
//   // тіло  if
// }

if (true) {
  // console.log("Умова виконалась!");
}

// const age = 17;
// console.log("До виконання інструкції if");

// if (age >= 18) {
//   console.log("Ви повнолітній!");
// }
// console.log("Після виконання інструкції if");

// let cost = 0;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// }

// console.log(cost); // 0

//6 ========================== інструкція if else ==========================
if (true) {
  // true
  // console.log("Виконалось тіло if");
} else {
  //false
  console.log("Виконалось тіло else");
}

//6 ========================== інструкція else  if==========================
if (false) {
  // true
  console.log("Виконалось тіло if");
} else if (false) {
  //false
  console.log("Виконалось тіло else 1");
} else if (false) {
  //false
  console.log("Виконалось тіло else 2");
} else {
  //false
  // console.log("Виконалось тіло else, тобто якщо жодна з умов не виконалась!");
}

// let cost;
// const subscription = "premium";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// console.log(!!true);

//6 =========================== Тернарний оператор ===========================
//5 Є конструкція, схожа на if...else, і спрощеним синтаксисом, що називається тернарним оператором (ternary - потрійний)

// (умова) ? {вираз якщо умова правдива} : {вираз якщо умова не правдива}

const age = 19;
let msg; //undefined
// if (age >= 18) {
//   // console.log("Ви повнолітній!");
//   msg = "Ви повнолітній!";
// } else {
//   // console.log("Ви ще дитина!");
//   msg = "Ви ще дитина!";
// }

// console.log("msg :>> ", msg);

msg = age >= 18 ? "Ви повнолітній!" : "Ви ще дитина!";

// console.log("msg :>> ", msg);

// console.log("================ switch case =====================");
//6 Його синтаксис складається із блоку switch(значення) - що потрібно порівняти і набору окремих випадків case значення - з чим потрібно порівняти. Для порівняння використовується оператор строгої рівності ===. Тобто, не можна порівняти більше або менше, лише рівність.

// switch (значення) {
//   case значення:
//     інструкції;
//     break;

//   case значення:
//     інструкції;
//     break;

//   default:
//     інструкції;
// }

let cost;
const subscription = "premvium";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log("Invalid subscription type");
// }

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;
//   case "pro":
//     cost = 100;
//     break;
//   case "premium":
//     cost = 500;
//     break;
//   default:
//     console.log("Така підписка відсутня!");
// }

// console.log(cost);

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const numberOfMonth = 3;

let month;

switch (numberOfMonth) {
  case 1:
    month = "Січень";
    break;
  case 2:
    month = "Лютий";
    break;
  case 3:
    month = "Березень";
    break;
  case 4:
    month = "Квітень";
    break;
  case 5:
    month = "Травень";
    break;
  case 6:
    month = "Червень";
    break;
  case 7:
    month = "Липень";
    break;
  case 8:
    month = "Серпень";
    break;
  case 9:
    month = "Вересень";
    break;
  case 10:
    month = "Жовтень";
    break;
  case 11:
    month = "Листопад";
    break;
  case 12:
    month = "Грудень";
    break;

  default:
    month = "Такий місяць відсутній!";
    break;
}

// console.log("month :>> ", month);

// if (numberOfMonth === 1) {
//   month = "Січень";
// } else if (numberOfMonth === 2) {
//   month = "Лютий";
// } else if (numberOfMonth === 3) {
//   month = "Березень";
// } else {
//   month = "Такий місяць відсутній!";
// }
// console.log("month :>> ", month);
