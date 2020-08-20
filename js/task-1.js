"use strict";

const categoriesRef = document.querySelector("#categories").children;
console.log(`В списке ${categoriesRef.length} категории`);

const titleListRef = Array.from(document.querySelectorAll("h2"));
titleListRef.forEach((item) => console.log(`Категория: ${item}`));
// Не срабатывает вывод шаблонной строки

const mainListRef = document.querySelectorAll("li.item ul");
console.log(mainListRef);
// Достучалась до нижнего ul
const listRef =document.body.querySelectorAll("li");
console.log(listRef);
// пытаюсь добраться до массива нижних лишек

// отображается длинна массива всех li в документе
