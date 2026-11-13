const MOVES = {
  rock: { label: "ROCK", hand: "✊" },
  paper: { label: "PAPER", hand: "✋" },
  scissors: { label: "SCISSORS", hand: "✌️" }
};

const playerHand = document.querySelector("#player-hand");
const computerHand = document.querySelector("#computer-hand");
const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const tieScoreDisplay = document.querySelector("#tie-score");
const roundDisplay = document.querySelector("#round-number");
const message = document.querySelector("#round-message");
const panel = document.querySelector(".game-panel");
const choiceButtons = [...document.querySelectorAll(".choice")];
const resetButton = document.querySelector("#reset-game");

let scores = { player: 0, computer: 0, ties: 0, rounds: 0 };
let roundTimer = null;
let isRoundComplete = false;

function getResult(player, computer) {
  if (player === computer) return "tie";
  const playerWins =
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper");
  return playerWins ? "win" : "loss";
}

function updateScoreboard() {
  playerScoreDisplay.textContent = String(scores.player);
  computerScoreDisplay.textContent = String(scores.computer);
  tieScoreDisplay.textContent = String(scores.ties);
  roundDisplay.textContent = String(scores.rounds + 1).padStart(2, "0");
}

function setChoicesDisabled(disabled) {
  choiceButtons.forEach((button) => { button.disabled = disabled; });
}

function playRound(playerMove) {
  if (isRoundComplete) return;
  window.clearTimeout(roundTimer);
  setChoicesDisabled(true);
  panel.classList.remove("is-win", "is-loss");

  const computerMove = Object.keys(MOVES)[Math.floor(Math.random() * 3)];
  const result = getResult(playerMove, computerMove);
  scores.rounds += 1;

  playerHand.textContent = MOVES[playerMove].hand;
  computerHand.textContent = MOVES[computerMove].hand;
  playerChoice.textContent = MOVES[playerMove].label;
  computerChoice.textContent = MOVES[computerMove].label;
  playerHand.classList.remove("is-reveal");
  computerHand.classList.remove("is-reveal");
  void playerHand.offsetWidth;
  playerHand.classList.add("is-reveal");
  computerHand.classList.add("is-reveal");

  if (result === "win") {
    scores.player += 1;
    panel.classList.add("is-win");
    message.textContent = "You win this round!";
  } else if (result === "loss") {
    scores.computer += 1;
    panel.classList.add("is-loss");
    message.textContent = "Computer wins this round.";
  } else {
    scores.ties += 1;
    message.textContent = "It’s a tie. Try again!";
  }

  updateScoreboard();
  if (scores.player === 3 || scores.computer === 3) {
    isRoundComplete = true;
    message.textContent = scores.player === 3
      ? "Match won! You took the bragging rights."
      : "Match lost. The computer takes this one.";
    return;
  }

  roundTimer = window.setTimeout(() => {
    playerHand.textContent = "?";
    computerHand.textContent = "?";
    playerChoice.textContent = "YOUR MOVE";
    computerChoice.textContent = "WAITING";
    playerHand.classList.remove("is-reveal");
    computerHand.classList.remove("is-reveal");
    panel.classList.remove("is-win", "is-loss");
    message.textContent = "Pick a hand to play the next round.";
    setChoicesDisabled(false);
    choiceButtons[0].focus();
  }, 1050);
}

function resetGame() {
  window.clearTimeout(roundTimer);
  scores = { player: 0, computer: 0, ties: 0, rounds: 0 };
  isRoundComplete = false;
  playerHand.textContent = "?";
  computerHand.textContent = "?";
  playerChoice.textContent = "YOUR MOVE";
  computerChoice.textContent = "WAITING";
  playerHand.classList.remove("is-reveal");
  computerHand.classList.remove("is-reveal");
  panel.classList.remove("is-win", "is-loss");
  message.textContent = "Pick a hand to start the round.";
  setChoicesDisabled(false);
  updateScoreboard();
}

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => playRound(button.dataset.choice));
});
resetButton.addEventListener("click", resetGame);
updateScoreboard();
