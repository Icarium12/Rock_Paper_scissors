function getComputerChoice() {
    const computerChoice = Math.random();
    let choice;
    if (computerChoice <= 0.3) {
        choice = "rock"
    }
    else if (computerChoice <= 0.6) {
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
    humanChoice.toLowerCase();

    // rock conditions
    if (humanChoice === "rock"  && computerChoice === "paper") {
        console.log("You lose! Paper beats rock");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! rock beats scissors");
        humanScore++;
    }

    else if (humanChoice === computerChoice) {
        console.log("It's a tie");
    }

    // paper conditions
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! paper beats rock");
        humanScore++
    }

    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! scissors beat paper");
        computerScore++
    }

    else if (humanChoice === computerChoice) {
        console.log("It's a tie");
    }

    // scissors conditions
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! rock beats scissors")
        computerScore++;
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! scissors beat paper")
        humanScore++;
    }

    else if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    }
} 

// playRound(getHumanChoice(), getComputerChoice())

function playGame() {

    humanScore = 0;
    computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice.toLowerCase();

        // rock conditions
        if (humanChoice === "rock"  && computerChoice === "paper") {
            console.log("You lose! Paper beats rock");
            computerScore++;
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! rock beats scissors");
            humanScore++;
        }

        else if (humanChoice === computerChoice) {
            console.log("It's a tie");
        }

        // paper conditions
        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! paper beats rock");
            humanScore++
        }

        else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! scissors beat paper");
            computerScore++
        }

        else if (humanChoice === computerChoice) {
            console.log("It's a tie");
        }

        // scissors conditions
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! rock beats scissors");
            computerScore++;
        }

        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! scissors beat paper");
            humanScore++;
        }

        else if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        }
    }
    const round = 5;
    for (i = 1; i <= round; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    } 

    if (humanScore > computerScore) {
        console.log("Your score is " + humanScore + " and computer score is " + computerScore + " you win!!!");
    }
    else if (humanScore === computerScore) {
        console.log("Your score is " + humanScore + " and computer score is " + computerScore + " it's a tie");
    }
    else {
        console.log("Your score is " + humanScore + " and computer score is " + computerScore + " you lose");
    }
}


console.log(playGame());

