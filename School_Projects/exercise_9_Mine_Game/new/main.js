const gameBoardElement = document.querySelector("#game-board");
const scoreElement = document.getElementById("score");
const messageElement = document.getElementById("message");



let checkNum = Math.floor(Math.random() * 16) + 1;
let score = 0;
console.log(checkNum, "hello");
gameBoardElement.innerHTML = "";
for (let i = 1; i <= 16; i++) {
    gameBoardElement.innerHTML += `<button id="box${i}" onclick="checkmine(event, ${i})">${i}</button>`;
}

function endGame() {
    for (let i = 1; i <= 16; i++) {
        document.getElementById(`box${i}`).setAttribute("disabled", "true");
    }
    messageElement.innerHTML += `<button id="replay" onclick="replay()">Replay</button>`
    messageElement.style.display = "flex";
}

function replay() {
    window.location.reload();
}

function checkmine(e, num) {
    const selectBoxElement = document.getElementById(`box${num}`);
    if(num != checkNum) {
        selectBoxElement.style.backgroundColor = "green";
        score++;
        scoreElement.innerHTML = score;
        
        if(score == 15) {
            messageElement.innerHTML = "<p>Congratulations,</p><p>You Won!!</p>";
            endGame();
        }
    }
    else {
        selectBoxElement.style.backgroundColor = "red";
        messageElement.innerHTML = `<p>Sorry You losed</p><p>Score: ${score}</p>`;
        endGame();
        
    }
}