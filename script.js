var wins = 0;
var losses = 0;
var ties = 0;

var options = ["R", "P", "S"];
function playGame() {
  var userChoice = window.prompt("Enter R, P, or S:");

  if (!userChoice) {
    console.log("Game ended.");
    return;
  }

  userChoice = userChoice.toUpperCase();
  var computerChoice = options[Math.floor(Math.random() * options.length)];

  window.alert("The computer chose " + computerChoice);
}

playGame();
