let playerSelection;
let computerSelection;
const moves = ["ROCK", "PAPER", "SCISSORS"];

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    // Handle tie game
    if (playerSelection === computerSelection) {
        return "Tie! Try again."
    }
    // handle player win
    else if (
        (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "ROCK" && computerSelection == "SCISSORS")) {
        return "You win!"
    }
    // handle computer win 
    // TODO: handle bad cases
    else {
        return "Computer wins!"
    }
}


function computerPlay() {
    return moves[Math.floor(Math.random() * 3)]
}

playerSelection = "ROCK";
computerSelection = computerPlay();

// console.log(playerSelection);
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter your move (rock, paper, scissor): ");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}