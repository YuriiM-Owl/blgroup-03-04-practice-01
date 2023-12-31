/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

/* const userAnswer = prompt("Яка офіційна назва JavaScript?");

const userAnswerToLowerCase = userAnswer.toLocaleLowerCase().trim();

if (userAnswerToLowerCase === "ecmascript") {
    alert("Вірно!");
} else {
    alert("Не знаєте? ECMAScript!");
}
 */

/**

Напишіть програму, яка отримає від користувача
 число (кількість хвилин) та виведе в консоль
 рядок у форматі годин та хвилин
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 70 === 01:10
 */

/* ------------------- Task-02------------------ */

/*  const userUnswer = Number(prompt('Введіть число'));
 const hours = String(Math.floor(userUnswer / 60)).padStart(2,0);
 const minutes = String(userUnswer % 60).padStart(2,0);
 console.log(`${hours}:${minutes}`); */

/* ------------------- Task-03------------------ */
// // /**
// //  *? Напишіть цикл, який виводить у консоль
// //  *? всі парні числа  від max до min  за спаданням
// //  */

// const max = 50;
// const min = 23;
// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
/* ------------------- Task-04------------------ */
/**
 *? При завантаженні сторінки користувачеві пропонується
 *? в prompt ввести число. Введення додається до значення
 *? змінної total.
 *? Операція введення числа триває до того часу,
 *? поки користувач не натисне кнопку Cancel у prompt.
 *? Після того як користувач припинив введення, натиснувши на
 *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
 *! Робити перевірку, що користувач ввів саме число,
 *! а не довільний набір символів не потрібно.
 */
/* let total = 0;
let userAnswer;
do {
    userAnswer = prompt("Введіть число - ");
    total += Number(userAnswer);
} while (userAnswer !== null);
alert(`Загальна сума введених чисел дорівнює ${total}.`); */

/* ------------------- Task-05------------------ */
/**
 *? Напишіть цикл, який пропонує ввести
 *? число більше 100 через prompt.
 *? Якщо відвідувач ввів інше число – попросити
 *? ввести ще раз і таке інше.
 *? Цикл повинен питати число, поки відвідувач не
 *? введе число більше 100 або не натисне кнопку
 *? Скасування в prompt
 */

/*  let setNumber = prompt('введіть число, що більше 100');
 while (
    setNumber <= 100 && setNumber !== null
 ) {
    setNumber = prompt('введіть, всеж таки, потрібне число')
 }; */

/* ------------------- Task-06------------------ */
/**
 *? Записати масив, const arr = ['BEST', 'the', 'foo', 'is', 'JS' ]
 *? розвернути масив,
 *? вирізати foo,
 *? перевести його в рядок розділений пробілами
 *? Очікуваний результат "JS is the BEST"
 */

/* массив arr не має мутуватися */

// const arr = ["BEST", "the", "foo", "is", "JS"];
// const arr2 = arr.slice();
// arr2.reverse();
// console.log(arr2);
// arr2.splice(arr2.indexOf("foo"), 1);
// const string = arr2.join(" ");
// console.log(string);

// arr.slice(0, arr.indexOf("foo"))
//     .concat(arr.slice(arr.indexOf("foo") + 1))
//     .reverse()
//     .join(" ");

/*? ------------------- Task-02-01 ------------------ */

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tennis",
//     premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const userKeys = Object.keys(user);

// for (const userKey of userKeys) {
//     console.log(`${userKey}: ${user[userKey]}`);
// }

/*? ------------------- Task-02-02 ------------------ */

/* Напишіть функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників. */

/* const someObj = {
  worker1: 360,
  worker2: 750,
  worker3: 240,
};

const totalSum = (obj) => {
    const values = Object.values(obj);
   return values.reduce((acc, element) => {
    console.log(acc)
       return acc += element;
   }, 0);
}

console.log(totalSum(someObj)); */

/*? ------------------- Task-02-03 ------------------ */
/**
 *? Напишіть ф-цію calcTotalPrice(someStones, stonesName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція рахує та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */

/*  const stones = [
    { name: "Изумруд", price: 1300, quantity: 4 },
    { name: "Бриллиант", price: 2700, quantity: 6 },
    { name: "Сапфир", price: 400, quantity: 7 },
    { name: "Щебень", price: 150, quantity: 100 },
  ];
  function calcTotalPrice(someStones, stonesName) {
    const myObject = someStones.find(({name})=>name === stonesName);
    if (!myObject) {
        return "Object is not found";
    }
    return myObject.price * myObject.quantity;
  }

  console.log(calcTotalPrice(stones, "Изумруд"))
  console.log(calcTotalPrice(stones, "Сапфир"))
  console.log(calcTotalPrice(stones, "цеглина")) */

/*? ------------------- Task-02-04 ------------------ */

///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

//   const fruits = [
//     { name: "apple", price: 200 },
//     { name: "orange", price: 300 },
//     { name: "grapes", price: 750 },
//   ];

//   function updateFruit(arr) {
//     return arr.map((fruit, index) => {
//         return {
//             ...fruit,
//             price: fruit.price * 0.8,
//             id: index + 1,
//         }

//     })
//   }
//   console.log(updateFruit(fruits));

/* ------------------- Task-02-05 ------------------ */
//TODO:==============================================
/**
*? Поверніть об'єкт, в якому вказано кількість тегів.
*? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

 */
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// function getObject(arr) {
//   const newArray = arr.flatMap(elem => elem.tags);

//   return newArray.reduce((acc, elem) => {

//     return { ...acc, [elem]: acc[elem]? acc[elem] +1 : 1};
//   } , {}
// )

// }
// console.log(getObject(tweets));

// ?------------------- Task-03-01 ----------------------
//TODO:=============================================

/**
 *? Напиши функцію конструктор User для
 *? створення користувача з такими властивостями:
 *? a. userName - ім'я, рядок
 *? b. age - вік, число
 *? c. numbersOfPost - кількість постів, число
 *? d. функція очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
 *? Додай метод getInfo(), який повертає рядок:
 *? `Користувачеві ${ім'я} ${вік} років і в нього ${кількістьПублікацій} публікацій.`
 */

// const User = function ({userName,age,numbersOfPost}) {
//   this.userName = userName;
//   this.age = age;
//   this.numbersOfPost = numbersOfPost;

//   this.getInfo = function(){
//     console.log(`Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`)
//   }
// }

// const user = new User({
//   userName: 'Michael',
//   age: 35,
//   numbersOfPost: 4578
// })

// console.log(user);

// ?------------------- Task-03-02 ----------------------
/**
 *? Напиши клас Client який створює об'єкт
 *? з ​​властивостями login email
 *? Оголоси приватні властивості #login #email,
 *? доступ до яких зроби через геттер та сеттер login email
 *
 */
// class Client {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
// }

// const user = new Client({
//   login: "german",
//   email: "lskdkjf@gmail.com",
// });

// user.email = "11111111";
// console.log(user.email);

// ?------------------- Task-03-03 ----------------------
/**
 *? Напиши клас Notes який управляє колекцією нотаток у
 *? властивості items.
 *? Нотатка - це об'єкт із властивостями text і priority.
 *? Додай класу статичний метод Priopity,
 *? який буде повертати об'єкт із пріоритетами.
 *? Додай методи addNote(note), removeNote(text)
 *? updatePriority(text, newPriority)
 */

// static Priority() {
//   return {
//     HIGHT: "hight",
//     LOW: "low",
//   };
// }

// class Notes {
//   static Priority() {
//     return {
//       HIGHT: "hight",
//       LOW: "low",
//     };
//   }
//   constructor() {
//     this.items = [];
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(id) {
//     const index = this.items.findIndex((item) => item.id === id)
//     console.log(index)
//     if (index === -1) {
//       return;
//     }
//     this.items.splice(index, 1);
//   }

//   updatePriority(id, newPriority) {
//  const index = this.items.findIndex((item) => item.id === id)

//     if (index === -1) {
//       return;
//     }

//     this.items[index].priority = newPriority;
//   }

// }

// const note = new Notes();
// // console.log(note);
// note.addNote({ id: 1, text: "Note1", priority: Notes.Priority().LOW });
// // console.log(note);

// note.removeNote(10)

// // note.updatePriority(1, 'high')
// console.log(note)

// ?------------------- HW ----------------------
/*Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)
  і перевіряє правильність закриття дужок () {} []
  Якщо рядок містить коректний код функція повертає true.
  В іншому випадку повертає false
*/

// const someFn = `function foo() {
//   const arr = [1, 2, 3];
//   console.log(arr);
// }`;

// console.log(checkBrackets(someFn));
