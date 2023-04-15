const display = document.querySelector(".display");

let counterValue = 0;

function incrementCounter() {
  counterValue = counterValue + 1;
  display.textContent = `${counterValue}`;
}
function decrementCounter() {
  counterValue = counterValue - 1;
  display.textContent = `${counterValue}`;
}

const subButton = document.getElementById("sub-button");

const addButton = document.getElementById("add-button");

subButton.addEventListener("click", decrementCounter);
addButton.addEventListener("click", incrementCounter);

const ref = setInterval(incrementCounter, 1000);

setTimeout(function () {
  clearInterval(ref);
}, 10000);
