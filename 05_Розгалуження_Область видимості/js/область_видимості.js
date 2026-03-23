console.log("=========== veriable scope ===============");

//6 Область видимості змінних (variable scope) — доступність змінних в певному
//6 місці коду. Є кілька областей видимості: глобальна, блокова, eval і функції.

//!  1. Глобальна область видимості (Global Scope)
//6 Змінна є глобальною, якщо вона оголошена поза будь-якою функцією або блоком {}. Вона доступна з будь-якого місця в коді.
// const value = 5;

const value = 10;

if (true) {
  const valueBlock = 45;
  console.log("Block scope: ", value); // 5
  console.log("Block scope: ", valueBlock); // 10
}

// console.log("Block scope :>> ", valueBlock); // Uncaught ReferenceError: valueBlock is not defined

// console.log("Global scope: ", value); // 5
// console.log("Global scope: ", valueBlock); // Uncaught ReferenceError: valueBlock is not defined

//!  2. Блокова область видимості (Block Scope)
//6 Будь-яка конструкція, яка використовує фігурні дужки {} (умови, цикли, функції тощо), створює нову локальну область видимості, і змінні, оголошені в цій області видимості, з використанням let або const, - недоступні за межами цього блоку.

function test() {
  const functionScope = "qwert";
  // console.log("functionScope :>> ", functionScope);
}
// console.log("test() :>> ", test());

// console.log("functionScope :>> ", functionScope);

// =================================================================================

const global = "global str";

if (true) {
  const blockA = "block A";

  // Бачимо глобальну + локальну A
  console.log(global); // global
  console.log(blockA); // blockA

  // Змінні blockB і blockC не знайдені в доступних областях видимості.
  // Буде помилка звернення до змінної.
  console.log(blockB); // error not defind
  console.log(blockC); // error not defind

  if (true) {
    const blockB = "block B";

    // Бачимо глобальну + зовнішню A + локальну B
    console.log(global); // global
    console.log(blockA); // block A
    console.log(blockB); // block B
  }
  // Змінна blockC не знайдена в доступних областях видимості.
  // Буде помилка звернення до змінної.
  console.log(blockC); // error not defind
}

if (true) {
  const blockC = "block C";

  // Бачимо глобальну + локальну C
  console.log(global); // global
  console.log(blockC); // block B

  // Змінні blockA і blockB не знайдені в доступних областях видимості.
  // Буде помилка звернення до змінної.
  console.log(blockA); // error not defind
  console.log(blockB); // error not defind
}

// Бачимо лише глобальну
console.log(global); // global str

// Змінні blockA, blockB і blockC не знайдені в доступних областях видимості.
// Буде помилка звернення до змінної.
console.log(blockA); // error not defind
console.log(blockB); // error not defind
console.log(blockC); // error not defind
