"use strict";

const categoriesRef = document.querySelector("#categories").children;
console.log(`В списке ${categoriesRef.length} категории`);

const titleListRef = Array.from(document.querySelectorAll("h2"));
titleListRef.forEach((item) => console.log(`Категория: ${item}`));
// // Не срабатывает вывод шаблонной строки, не указывается вместо item значение h2


// Попыталась написать функцию для вывода количества лишек
const itemListRef = Array.from(document.querySelectorAll(".item"));

const getAmountOflist = (item) => {
  const mainListRef = document.querySelector("li.item ul");
  const listRef = Array.from(mainListRef.querySelectorAll("li"));
  return console.log(`Количество элементов: ${listRef.length}`);
};

itemListRef.forEach((item) => getAmountOflist(itemListRef));

// Выводит три одинаковых сообщение о количестве лишек первого списка