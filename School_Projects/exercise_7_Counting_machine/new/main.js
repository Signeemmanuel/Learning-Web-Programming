const h1El = document.querySelector("h1")
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");

let counterValue = 0
h1El.innerHTML = counterValue;

function subtract() {89
    h1El.innerHTML = --counterValue;
}

function addition() {
    h1El.innerHTML = ++counterValue;
}

const ref = setInterval(addition, 1000);

setTimeout(function (){
    clearInterval(ref);
}, 10000)