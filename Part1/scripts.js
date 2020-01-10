let player = document.getElementById("player");
let winnerWinner = document.getElementById("chickenDinner");

function helper() {
  let locked = []

  return function(index) {
    let element = document.getElementById(`${index}`);

    if (locked.includes(index)) return;
    player.innerText === "X" ?
      (player.innerText = "O") && (element.innerHTML = "𝕏") :
      (player.innerText = "X") && (element.innerHTML = "𝕆")
    locked.push(index);

    locked.length === 9 ? winnerWinner.innerHTML = "Draw!" : null;
  }
}

let play = helper();