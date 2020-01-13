let playerID = document.getElementById("player");
let winnerWinner = document.getElementById("chickenDinner");
let replayBtn = document.querySelector(".replay");
let turn = "X"

function switchTurns() {
  return turn === "X" ? turn = "O" : turn = "X";
}

function nextMove() {
  let locked = [];
  
  return function(index){
    locked.push(index);
    let square = document.getElementById(index);
    if (square.innerText === "") {
      !checkWinner(turn) ? square.innerText = turn : null;
      if (checkWinner(turn)) return winner(turn);
      switchTurns();
      if (locked.length === 9 ) winnerWinner.innerText = "Draw!";
      if (locked.length === 9 ) replayBtn.classList.remove("hidden");
      if (locked.length === 9 ) return;
      playerID.innerText = turn;
    }
  }
}

function winner(player) {
  winnerWinner.innerText = `Player ${player} wins!`;
}

function checkWinner(player) {
  let result = false;
  if (checkRow(0, 1, 2, player) ||
    checkRow(3, 4, 5, player) ||
    checkRow(6, 7, 8, player) ||
    checkRow(0, 3, 6, player) ||
    checkRow(1, 4, 7, player) ||
    checkRow(2, 5, 8, player) ||
    checkRow(0, 4, 8, player) ||
    checkRow(2, 4, 6, player)
  )  {
    result = true;
    replayBtn.classList.remove("hidden");
  }
  
  return result;
}

function checkRow(a, b, c, player) {
  let result = false;
  
  if (getSquare(a) === player && getSquare(b) === player && getSquare(c) === player) {
    document.getElementById(a).style.color = "red";
    document.getElementById(b).style.color = "red";
    document.getElementById(c).style.color = "red";
    result = true;
  }
  
  return result
}

function getSquare(box) {
  return document.getElementById(box).innerText;
}

let play = nextMove();

replayBtn.addEventListener("click", () => window.location.reload());