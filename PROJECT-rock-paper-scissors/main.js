function getComputerChoice() {
    // To get our computer's choice, randomly pick a number 0-2, and pull that
    // index value from the list
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    const choice = choices[randomChoice];
    
    return choice;
}

function playRound(playerSelection, computerSelection) {
    // First let's get some consistent strings
    const playerSelectionLower = playerSelection.toLowerCase();
    const playerSelectionProper = playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase();
    const computerSelectionLower = computerSelection.toLowerCase();
    
    // Lose Message
    const loseMessage = `You Lose! ${playerSelectionProper} loses to ${computerSelection}`;
    // Win Message
    const winMessage = `You Win! ${playerSelectionProper} beats ${computerSelection}`;
    // Tie Message
    const tieMessage = `You Tied! ${playerSelectionProper} vs. ${computerSelection}`;

    // Compare the player choice to the computer choice, and return the result
    if ((playerSelectionLower === 'rock') && (computerSelectionLower == 'paper')) {
        console.log(loseMessage); 
        return 'lose';
    } else if ((playerSelectionLower === 'paper') && (computerSelectionLower == 'scissors')) {
        console.log(loseMessage); 
        return 'lose';
    } else if ((playerSelectionLower === 'scissors') && (computerSelectionLower == 'rock')) {
        console.log(loseMessage);    
        return 'lose';
    } else if ((playerSelectionLower === 'rock') && (computerSelectionLower == 'scissors')) {
        console.log(winMessage);
        return 'win';
    } else if ((playerSelectionLower === 'paper') && (computerSelectionLower == 'rock')) {
        console.log(winMessage);
        return 'win';
    } else if ((playerSelectionLower === 'scissors') && (computerSelectionLower == 'paper')) {
        console.log(winMessage);
        return 'win';
    } else {
        console.log(tieMessage);
        return 'tie';
    }
}

function playGame() {
    // We need to keep track of how many wins the player and computer get
    let playerWins = 0;
    let computerWins = 0;

    // A full game has 5 rounds, each round will need a new player and computer
    // choice
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt('Rock, Paper, or Scissors?');
        let computerChoice = getComputerChoice();

        let result = playRound(playerChoice, computerChoice);
        if (result == 'win') {
            playerWins++;
        } else if (result == 'lose') {
            computerWins++;
        } 
    }

    // After teh game loop, compare player vs computer wins and decide a winner
    if (playerWins > computerWins) {
        console.log(`Congratulations! You won ${playerWins} times!`);
    } else if (computerWins > playerWins) {
        console.log(`Bummer! You only won ${playerWins} times!`);
    } else {
        console.log(`Not bad! You tied!`);
    }
}

// Let's play the game!
playGame();
