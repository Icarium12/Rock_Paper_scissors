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

playRound(getHumanChoice(), getComputerChoice())


