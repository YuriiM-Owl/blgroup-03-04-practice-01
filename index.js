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

const arr = ["BEST", "the", "foo", "is", "JS"];
const arr2 = arr.slice();
arr2.reverse();
console.log(arr2);
arr2.splice(arr2.indexOf("foo"), 1);
const string = arr2.join(" ");
console.log(string);

arr.slice(0, arr.indexOf("foo"))
    .concat(arr.slice(arr.indexOf("foo") + 1))
    .reverse()
    .join(" ");
