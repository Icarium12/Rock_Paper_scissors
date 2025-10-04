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


// console.log(getComputerChoice());