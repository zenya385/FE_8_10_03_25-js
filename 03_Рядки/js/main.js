console.log("========== Stirng ===================");
//6 Рядок — це індексований набір з нуля або більше символів, укладених в одинарні або подвійні лапки.
//6 const name = 'Mango';
//6 Важливо пам'ятати що індексація елементів рядка починається з нуля. Наприклад, в рядку 'JavaScript' буква 'J' стоїть на позиції з індексом 0, а 't' йде під індексом 9

// const string = "Mango";
// const string1 = "Mango";
// const string2 = `Mango`;

// console.log("string :>> ", string);
// console.log("string1 :>> ", string1);
// console.log("string2 :>> ", string2);

// console.log("string[2] :>> ", string[2]);
// console.log("string[0] :>> ", string[0]);

// console.log("string.length :>> ", string.length);
// console.log("string.length :>> ", typeof string.length);

//8 ========================= Конкатенація рядків =================================

// const concatinationSrting = "Mango" + " " + "Pango";

// console.log("concatinationSrting :>> ", concatinationSrting);

// let result;

// console.log("result :>> ", result);

// result = 5 + "5" + 5;
// console.log("result :>> ", result);
// result = +"5";
// console.log("result :>> ", result);
// result = 5 + 5 + "5";
// console.log("result :>> ", result);

//8 ========================= Властивості та методи рядків =================================

//6 length - властивість, зберігає довжину рядка
//6 toLowerCase() і toUpperCase() - повернуть новий рядок у відповідному регістрі, не змінюють оригінальний рядок
//6 indexOf() - поверне позицію (індекс) на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено
//6 includes() - один з найбільш часто використовуваних методів, в більшості випадків замінює indexOf, перевіряє чи входить підрядок в рядок, повертає true або false
//6 str.startsWith() та str.endsWith() перевіряють, чи починається і чи закінчується рядок певним підрядком.
//6 trim() – видаляє (“обрізає”) пробіли з початку та кінця рядка.
//6 padStart() і padEnd()доповнює поточний рядок іншим рядком (кілька разів, якщо потрібно), доки отриманий рядок не досягне заданої довжини. Відступ застосовується з кінця/початку поточного рядка.

// const str = "    Hello Java script    ";
// console.log("str.length :>> ", str.length);

// console.log("str.toLowerCase() :>> ", str.toLowerCase());
// console.log("str.toUpperCase() :>> ", str.toUpperCase());

// const normaliseStr = str.toUpperCase();
// console.log("normaliseStr :>> ", normaliseStr);

// console.log("str.indexOf() :>> ", str.indexOf("j"));
// const normaliseString = str.toUpperCase().includes("JAVA");
// console.log("normaliseString :>> ", normaliseString);

// console.log("str.includes() :>> ", str.includes("java"));

// console.log("str.startsWith() :>> ", str.startsWith("Hello"));

// console.log("str.endsWith :>> ", str.endsWith("script"));

// console.log("str :>> ", str);
// console.log(str.trim());

// console.log("str.padStart() :>> ", str.padStart(30, "="));

// console.log("str.padEnd() :>> ", str.padEnd(35, "!"));

//8 ============================ Шаблонні рядки та інтерполяція ===========================

const name = "Mango";
const age = 2;
const mood = "happy";

const msg =
  "My name is" +
  " " +
  name +
  "," +
  " " +
  "I'am " +
  age +
  " " +
  "years old and" +
  " " +
  mood +
  ".";
// console.log("msg :>> ", msg);

const newMsg = `My name is  ${name}, I'am  ${age} years old and ${mood}.`;

// console.log("newMsg :>> ", newMsg);

const browserType = "Mosilla";

browserType[browserType.length - 1];
// browserType[6];

console.log(browserType); // "Mosilla"
console.log(browserType.length); // 7
console.log(browserType.length - 1); // 6
console.log(browserType[6]);

console.log(browserType[browserType.length - 3]); // a
