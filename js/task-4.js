"use strict";

let counterValue = 0;

const btnIncrementRef = document.querySelector('[data-action="increment"]');
const btnDecrementRef = document.querySelector('[data-action="decrement"]');

const increment = () => {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
  return counterValue;
};

const decrement = () => {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
  return counterValue;
};

btnIncrementRef.addEventListener("click", increment);
btnDecrementRef.addEventListener("click", decrement);
