"use strict";

const categoriesRef = document.querySelector("#categories").children;
console.log(`В списке ${categoriesRef.length} категории`);

const titleListRef = Array.from(document.querySelectorAll("h2"));
titleListRef.forEach((title) => console.log(`Категория: ${title.value}`));

// Попыталась написать функцию для вывода количества лишек
// Выводит три одинаковых сообщение о количестве лишек первого списка

const itemListRef = Array.from(document.querySelectorAll(".item"));

const getAmountOflist = () => {
  const mainListRef = document.querySelector("li.item > ul");
  const listRef = Array.from(mainListRef.querySelectorAll("li"));
  return console.log(`Количество элементов: ${listRef.length}`);
};

itemListRef.forEach((item) => getAmountOflist(itemListRef));
