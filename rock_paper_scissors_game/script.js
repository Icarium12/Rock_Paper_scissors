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

    if (humanChoice === "rock"  && computerChoice === "paper") {
        console.log("You lose! Paper beats rock");
        computerScore++
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! rock beats scissors")
    }

    else if ()
}


