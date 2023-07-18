var wins = 0;
var losses = 0;
var ties = 0;
var messageEl = document.querySelector("#message");

var options = ["R", "P", "S"];
function playGame() {
  var userChoice = window.prompt("Enter R, P, or S:");

  if (!userChoice) {
    console.log("Game ended.");
    messageEl.textContent = "The game was ended. Have a nice day!";
    return;
  }

  userChoice = userChoice.toUpperCase();
  var computerChoice = options[Math.floor(Math.random() * options.length)];

  window.alert("The computer chose " + computerChoice);

  if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");
  } else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You win!");
  } else {
    losses++;
    window.alert("You lost!");
  }

  window.alert(
    "Stats: Wins: " + wins + " Losses: " + losses + " Ties: " + ties
  );

  var playAgain = window.confirm("Play again?");

  if (playAgain) {
    playGame();
  }

  messageEl.textContent = "Thank you for playing!";
}

playGame();
