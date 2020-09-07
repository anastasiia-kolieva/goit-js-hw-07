"use strict";

let counterValue = 0;

const btnIncrementRef = document.querySelector('[data-action="increment"]');
const btnDecrementRef = document.querySelector('[data-action="decrement"]');
let value = document.querySelector("#value");

const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

btnIncrementRef.addEventListener("click", increment);
btnDecrementRef.addEventListener("click", decrement);
