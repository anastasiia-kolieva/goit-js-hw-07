"use strict";

let counterValue = 0;

const btnIncrementRef = document.querySelector('[data-action="increment"]');
const btnDecrementRef = document.querySelector('[data-action="decrement"]');
let value = document.querySelector("#value").textContent;

const increment = () => {
  counterValue += 1;
  value = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  value = counterValue;
};

btnIncrementRef.addEventListener("click", increment);
btnDecrementRef.addEventListener("click", decrement);
