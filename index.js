//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

// const showMeBtnEl = document.querySelector("#alertButton");
// const inputFieldEl = document.querySelector("#alertInput");

// showMeBtnEl.addEventListener("click", getInputValue);

// function getInputValue() {
//   console.log(inputFieldEl.value);
// }

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

const swapMeEl = document.querySelector("#swapButton");
const leftSwapInputEl = document.querySelector("#leftSwapInput");
const rightSwapInput = document.querySelector("#rightSwapInput");

swapMeEl.addEventListener("click", getInputReverse);

function getInputReverse() {
  const left = leftSwapInputEl.value;
  const right = rightSwapInput.value;
  leftSwapInputEl.value = right;
  rightSwapInput.value = left;
}
//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
const inputEl = document.querySelector("#passwordInput");
const butonEl = document.querySelector("#passwordButton");
butonEl.addEventListener("click", hideValue);

function hideValue() {
  if (inputEl.type === "password") {
    inputEl.type = "text";
    butonEl.textContent = "Приховати";
    return;
  }

  inputEl.type = "password";
  butonEl.textContent = "Розкрити";
}

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/
const boxEl = document.querySelector("#box");
const squareSizeEl = document.querySelector("#js-event");

squareSizeEl.addEventListener("click", changeSize);

function changeSize(event) {
  const widthSquare = parseInt(getComputedStyle(boxEl).width);
  if (event.target.textContent === "Уменьшить") {
    boxEl.style.width = `${widthSquare - 10}px`;
    boxEl.style.height = `${widthSquare - 10}px`;
  }
  if (event.target.textContent === "Увеличить") {
    boxEl.style.width = `${widthSquare + 10}px`;
    boxEl.style.height = `${widthSquare + 10}px`;
  }
}

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
