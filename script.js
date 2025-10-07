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

//  console.log(getComputerChoice());

function getHumanChoice() {
    choice = prompt("Enter your choice (rock paper or scissors)")
    return choice;
}

// console.log(getHumanChoice())


function playRound(humanChoice, computerChoice) {

    // rock conditions
    if (humanChoice === "rock"  && computerChoice === "paper") {
        const roundWinner = document.createElement("h6");
        roundWinner.textContent = "You lose! Paper beats rock";
        scoreDiv.appendChild(roundWinner);
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        const roundWinner = document.createElement("h6");
        roundWinner.textContent = "You win! rock beats scissors";
        scoreDiv.appendChild(roundWinner);
        humanScore++;
    }

    else if (humanChoice === computerChoice) {
        const roundWinner = document.createElement("h6");
        roundWinner.textContent = "It's a tie";
        scoreDiv.appendChild(roundWinner);
    }

    // paper conditions
    else if (humanChoice === "paper" && computerChoice === "rock") {
        const roundWinner = document.createElement("h6");
        roundWinner.textContent = "You win! paper beats rock";
        scoreDiv.appendChild(roundWinner);
        humanScore++;
    }

    else if (humanChoice === "paper" && computerChoice === "scissors") {
        const roundWinner = document.createElement("h6");
        roundWinner.textContent ="You lose! scissors beat paper";
        scoreDiv.appendChild(roundWinner);
        computerScore++;
    }

    // scissors conditions
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        const roundWinner = document.createElement("h6");
        roundWinner.textContent ="You lose! rock beats scissors";
        scoreDiv.appendChild(roundWinner);
        computerScore++;
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
        const roundWinner = document.createElement("h6");
        roundWinner.textContent ="You win! scissors beat paper";
        scoreDiv.appendChild(roundWinner);
        console.log("You win! scissors beat paper")
        humanScore++;
    }
    playerTally = humanScore;
    computerTally = computerScore;
} 

// playRound(getHumanChoice(), getComputerChoice())

// function playGame() {

//     humanScore = 0;
//     computerScore = 0;

//     function playRound(humanChoice, computerChoice) {
//         humanChoice.toLowerCase();

//         // rock conditions
//         if (humanChoice === "rock"  && computerChoice === "paper") {
            
//             console.log("You lose! Paper beats rock");
//             computerScore++;
//         }
//         else if (humanChoice === "rock" && computerChoice === "scissors") {
//             console.log("You win! rock beats scissors");
//             humanScore++;
//         }

//         else if (humanChoice === computerChoice) {
//             console.log("It's a tie");
//         }

//         // paper conditions
//         else if (humanChoice === "paper" && computerChoice === "rock") {
//             console.log("You win! paper beats rock");
//             humanScore++
//         }

//         else if (humanChoice === "paper" && computerChoice === "scissors") {
//             console.log("You lose! scissors beat paper");
//             computerScore++
//         }

//         else if (humanChoice === computerChoice) {
//             console.log("It's a tie");
//         }

//         // scissors conditions
//         else if (humanChoice === "scissors" && computerChoice === "rock") {
//             console.log("You lose! rock beats scissors");
//             computerScore++;
//         }

//         else if (humanChoice === "scissors" && computerChoice === "paper") {
//             console.log("You win! scissors beat paper");
//             humanScore++;
//         }

//         else if (humanChoice === computerChoice) {
//             console.log("It's a tie!");
//         }
//     }
// //     const round = 5;
// //     for (i = 1; i <= round; i++) {
// //         const humanChoice = getHumanChoice();
// //         const computerChoice = getComputerChoice();
// //         playRound(humanChoice, computerChoice);
// //     } 

// //     if (humanScore > computerScore) {
// //         console.log(alert("Your score is " + humanScore + " and computer score is " + computerScore + " you win!!!"));
// //     }
// //     else if (humanScore === computerScore) {
// //         console.log(alert("Your score is " + humanScore + " and computer score is " + computerScore + " it's a tie"));
// //     }
// //     else {
// //         console.log(alert("Your score is " + humanScore + " and computer score is " + computerScore + " you lose"));
// //     }
// }


// console.log(playGame());
// humanScore = 0;
// computerScore = 0;
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
