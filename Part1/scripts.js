let playerID = document.getElementById("player");
let turn = "X"

function play(num) {
  nextMove(document.getElementById(num))
}

function switchTurns() {
  return turn === "X" ? turn = "O" : turn = "X";
}

function nextMove(square) {
  if (square.innerText === "") {
    square.innerText = turn;
    // if (winner(turn)) ;
    switchTurns();
    playerID.innerText = turn;
  }
}

function winner(player) {
  let result = false;
  if (checkRow(0, 1, 2, player) ||
    checkRow(3, 4, 5, player) ||
    checkRow(6, 7, 8, player) ||
    checkRow(0, 3, 6, player) ||
    checkRow(1, 4, 7, player) ||
    checkRow(2, 5, 8, player) ||
    checkRow(0, 4, 8, player) ||
    checkRow(2, 4, 6, player)
  ) result = true;
  
  return result;
}

function checkRow(a, b, c, player) {
  let result = false;
  
  if (getSquare(a) === player && getSquare(b) === player && getSquare(c) === player) {
    result = true;
  }
  
  return result
}

function getSquare(box) {
  return document.getElementById(box).innerText;
}