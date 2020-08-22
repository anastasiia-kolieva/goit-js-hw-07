"use strict";

const categoriesRef = document.querySelector("#categories").children;
console.log(`В списке ${categoriesRef.length} категории`);

const titleListRef = Array.from(document.querySelectorAll("h2"));
titleListRef.forEach((item) => console.log(`Категория: ${item}`));
// // Не срабатывает вывод шаблонной строки, не указывается вместо item значение h2

const mainListRef = Array.from(document.querySelectorAll("li.item ul"));
mainListRef.forEach(() => {
  const listRef = mainListRef.querySelectorAll("li").length;
  console.log(`Количество элементов: ${listRef}`);
});

// const mainListRef = document.querySelector("li.item ul");
// const listRef = mainListRef.querySelectorAll("li").length;
// console.log(`Количество элементов: ${listRef}`);
// Удалось вывести количество пунктов только одного первого списка
