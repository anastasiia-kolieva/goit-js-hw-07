"use strict";

const categoriesRef = document.querySelector("#categories").children;
console.log(`В списке ${categoriesRef.length} категории`);

const titleListRef = Array.from(document.querySelectorAll("h2"));
titleListRef.forEach((title) => console.log(`Категория:`, title.textContent));

const mainListRef = document.querySelectorAll("li.item > ul");
mainListRef.forEach((list) => {
  const listRef = Array.from(list.querySelectorAll("li"));
  console.log(`Количество элементов:`, listRef.length);
});
