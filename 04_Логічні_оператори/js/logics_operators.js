console.log("========= Логічні оператори ========");

//! Запам'ятайте 6 хибних (falsy) значень, що приводяться до false у логічному перетворенні:
//!  0, NaN, null, undefined, порожній рядок і false.
//! Абсолютно все інше приводиться до true.

("false"); //true
false; // false
0; //false
null; // false
10; //true
(" "); //true
(""); //false
undefined; //false
NaN; //false

//6 Логічне «І»
//8 Оператор && приводить всі операнди до буля і повертає значення одного з них. Лівий операнд - якщо його можна привести до false, і правий - в інших випадках.

// вираз && вираз

//7 "Купити квиток І відпочити" - якщо лівий операнд "Купити квиток" виявиться false, то обчислювати другий немає сенсу.

//8 false && (цей операнд не обчислюється)

// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true

// const age1 = 50;
// console.log(age1 > 10 && age1 < 30); // true && false -> false
// console.log(age1 > 80 && age1 < 120); // false && true -> false

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"

//6 Логічне «АБО»
//8 Оператор || приводить всі операнди до буля і повертає значення одного з них. Лівий операнд - якщо його можна привести до true, і правий - в інших випадках.

//7 "Відпочити АБО зберегти гроші" - якщо лівий операнд "Відпочити" виявиться true, то обчислювати другий немає сенсу.

//8 true || (цей операнд не обчислюється)

// вираз || вираз

// const age = 5;
// console.log(age < 10 || age > 30); // true || false -> true

// const age = 40;
// console.log(age < 10 || age > 30); // false || true -> true

// const age = 20;
// console.log(age < 10 || age > 30); // false || false -> false

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true
// console.log(5 || 9); //5

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

//6 Логічне «НЕ»
// Оператор ! призводить операнд до булю, якщо необхідно, а потім замінює його на протилежний.

// console.log(!true); // false
// console.log(!false); // true
// console.log(!1); // false
// console.log(!0); // true

