let player = document.getElementById("player");

function helper() {
  let locked = []

  return function(index) {
    let element = document.getElementById(`${index}`);

    if (locked.includes(index)) return;
    player.innerText === "X" ? player.innerText = "O" : player.innerText = "X"
    locked.push(index);
  }
}

let play = helper();