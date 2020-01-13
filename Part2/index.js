let getID = document.querySelector("#grabID");
let assignStyle = document.querySelector("#assignStyle");
let resetBtn = document.getElementById("resetBtn");

function setCard(id) {
  let card = document.getElementById(getID.value)
  card.style.color = assignStyle.value;
}

resetBtn.addEventListener("click", () => window.location.reload());