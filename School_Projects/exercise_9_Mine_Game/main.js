const scoreEl = document.querySelector("#score");

const gameBoardEl = document.querySelector(".game-board");

const messageElement = document.querySelector(".message");

const minedSquare = Math.floor(Math.random() * 16) + 1;

console.log("Bad square is ==> ", minedSquare);

let score = 0;
let squaresLeft = 16;

function checkMine(e, squareNumber) {
  console.log("Clicked square is ==> ", squareNumber);

  if (squareNumber === minedSquare && squaresLeft === 1) {
    //Player Has won!

    e.target.classList.add("mined");
    messageElement.textContent = "You have Won!!";
    messageElement.style.display = "block";

    //increment score by one
    score += 1;

    scoreEl.textContent = score.toString();
  } else if (squareNumber === minedSquare && squaresLeft > 1) {
    //Player has lost!
    e.target.classList.add("mined");
    messageElement.textContent = "You have Lost!!";
    messageElement.style.display = "block";
  } else {
    //Player has selected a good square
    e.target.classList.add("safe");
  }

  squaresLeft -= 1;
}

for (let i = 1; i <= 16; i++) {
  gameBoardEl.innerHTML += `<button id="square${i}" class="square" onclick="checkMine(event,${i})" >${i}</button>`;
}
