//Step 1: Write the logic to get the computer choice

let humanScore = 0;
let computerScore = 0;

const displayResults = document.createElement("div");
displayResults.className = "results";
document.body.appendChild(displayResults);

// Create a div to display the current score
const scoreDisplay = document.createElement("div");
scoreDisplay.className = "score-display";
document.body.appendChild(scoreDisplay);

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    if (x === 0) {
        return rock;
    } else if (x === 1) {
        return paper;
    } else return scissors;
}

console.log(getComputerChoice());

//Step 2: Write the logic to get the human choice

function getHumanChoice() {
    const buttons = document.querySelectorAll(".choices");

    // Add event listener to each button

    buttons.forEach((button) => {
        button.addEventListener("click", function (event) {
            const playerSelection = event.target.textContent;
            console.log(`You selected: ${playerSelection}`);
            playRound(playerSelection);
        });
    });
}

getHumanChoice();

function playRound(playerSelection) {
    let roundResult = "";
    const computerChoice = getComputerChoice();
    if (playerSelection === computerChoice) {
        roundResult = "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerChoice === "scissors") ||
        (playerSelection === "scissors" && computerChoice === "paper") ||
        (playerSelection === "paper" && computerChoice === "rock")
    ) {
        roundResult = "You win this round!";
        humanScore++;
    } else {
        roundResult = "Computer wins this round.";
        computerScore++;
    }

    // Update the result display with the round result
    displayResults.textContent = roundResult;

    // Update the score display
    if (humanScore === 5) {
        scoreDisplay.textContent = `Current score: You ${humanScore} - ${computerScore} Computer. You won the Game!!!`;
    } else if (computerScore === 5) {
        scoreDisplay.textContent = `Current score: You ${humanScore} - ${computerScore} Computer. Computer won the Game.`;
    } else {
        scoreDisplay.textContent = `Current score: You ${humanScore} - ${computerScore} Computer`;
    }
}
