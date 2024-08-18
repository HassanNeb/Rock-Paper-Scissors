//Step 1: Write the logic to get the computer choice

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
    let choice = prompt(
        "Hey! Are you ready to play? (Rock, Paper, or Scissors)"
    )
        .trim()
        .toLowerCase();

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
        humanChoice = prompt(
            "Hey! Are you ready to play? (Rock, Paper, or Scissors)"
        )
            .trim()
            .toLowerCase();
    }

    return choice;
}

console.log(getHumanChoice());

// Step 5: Write the logic to play the entire game 5 times

function playGame() {
    // Step 3: Declare the players score variables

    let humanScore = 0;
    let computerScore = 0;

    // Step 4: Write the logic to play a single round

    function playRound(humanChoice, computerChoice) {
        // If both choices are the same, it's a tie
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            return;
        }

        // Win conditions for human player
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            console.log("Congratulations, You Won!");
            humanScore++;
        } else {
            // If none of the win conditions are met, the computer wins
            console.log("You Lost, Try Again.");
            computerScore++;
        }
    }
    for (i = 1; i <= 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Round ${i}:`);
        playRound(humanChoice, computerChoice);
    }
    console.log(
        `Final Score - Human: ${humanScore}, Computer: ${computerScore}`
    );
}
// start the game
playGame();
