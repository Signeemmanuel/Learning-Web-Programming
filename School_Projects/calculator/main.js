const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const resultEl = document.querySelector(".result");

let num1;
let num2;

document.getElementById("add").addEventListener("click", function(){
    num1 = parseFloat(num1El.value);
    num2 = parseFloat(num2El.value);
    resultEl.innerHTML =  addNums(num1, num2);
});

document.getElementById("sub").addEventListener("click", function() {
    num1 = parseFloat(num1El.value);
    num2 = parseFloat(num2El.value);
    resultEl.innerHTML = subtractNums(num1, num2);
});

document.getElementById("mul").addEventListener("click", function() {
    num1 = parseFloat(num1El.value);
    num2 = parseFloat(num2El.value);
    resultEl.innerHTML = multiplyNums(num1, num2);
});

document.getElementById("div").addEventListener("click", function()    {
    num1 = parseFloat(num1El.value);
    num2 = parseFloat(num2El.value);
    resultEl.innerHTML = divideNums(num1, num2);
});

function addNums(num1, num2){
    return num1 + num2;
}

function subtractNums(num1, num2) {
    return num1 - num2;
}

function multiplyNums(num1, num2) {
    return num1 * num2;
}

function divideNums(num1, num2) {
    if (num2 == 0) {
        return "Division By Zero";
    }
    return num1 / num2;
}
