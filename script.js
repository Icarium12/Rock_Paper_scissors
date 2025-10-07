let humanScore = 0;
let computerScore = 0;

const rockSelection = document.createElement("button");
rockSelection.textContent = "rock";

const paperSelection = document.createElement("button");
paperSelection.textContent ="paper";

const scissorsSelection = document.createElement("button");
scissorsSelection.textContent = "scissors";

rockSelection.addEventListener("click", () => {
    playGame();
});

paperSelection.addEventListener("click", () => {
    playGame();
});

scissorsSelection.addEventListener("click", () => {
    playGame();
});

const body = document.body;

body.appendChild(rockSelection);
body.appendChild(paperSelection);
body.appendChild(scissorsSelection);

const scoreDiv = document.createElement("div");
body.appendChild(scoreDiv);

function getComputerChoice() {
    const computerChoice = Math.random();
    let choice;
    if (computerChoice < 0.3) {
        choice = "rock"
    }
    else if (computerChoice < 0.6) {
        choice = "paper"
    }
    else {
        choice = "scissors"
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    const roundWinner = document.createElement("h3");

    // rock conditions
    if (humanChoice === "rock"  && computerChoice === "paper") {
        roundWinner.textContent = "You lose! Paper beats rock";
        scoreDiv.appendChild(roundWinner);
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        roundWinner.textContent = "You win! rock beats scissors";
        scoreDiv.appendChild(roundWinner);
        humanScore++;
    }

    else if (humanChoice === computerChoice) {
        roundWinner.textContent = "It's a tie";
        scoreDiv.appendChild(roundWinner);
    }

    // paper conditions
    else if (humanChoice === "paper" && computerChoice === "rock") {
        roundWinner.textContent = "You win! paper beats rock";
        scoreDiv.appendChild(roundWinner);
        humanScore++;
    }

    else if (humanChoice === "paper" && computerChoice === "scissors") {
        roundWinner.textContent ="You lose! scissors beat paper";
        scoreDiv.appendChild(roundWinner);
        computerScore++;
    }

    // scissors conditions
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        roundWinner.textContent ="You lose! rock beats scissors";
        scoreDiv.appendChild(roundWinner);
        computerScore++;
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
        roundWinner.textContent ="You win! scissors beat paper";
        scoreDiv.appendChild(roundWinner);
        humanScore++;
    }
    playerTally = humanScore;
    computerTally = computerScore;
} 


function announceWinner(score1, score2) {
    const winnerText = document.createElement("p");
    if(score1 === 5) {
        winnerText.textContent = "You won! Refresh Page to Play Again";
        scoreDiv.appendChild(winnerText);
    }
    else if(score2 === 5) {
        winnerText.textContent = "Computer won! Refresh Page to Play again";
        scoreDiv.appendChild(winnerText);
    }
}

function playGame() {
    playRound(rockSelection.textContent, getComputerChoice())

    const humanScoreElement = document.createElement("p");
    humanScoreElement.textContent=`Player Score: ${humanScore}`;
    scoreDiv.appendChild(humanScoreElement);

    const computerScoreElement = document.createElement("p");
    computerScoreElement.textContent = `Computer Score: ${computerScore}`
    scoreDiv.appendChild(computerScoreElement);

    announceWinner(humanScore, computerScore);
}