function getComputerChoice() {
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
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt('Rock, Paper, or Scissors?');
        let result = playRound(playerChoice, getComputerChoice());
        if (result == 'win') {
            playerWins++;
        } else if (result == 'lose') {
            computerWins++;
        } 
    }

    if (playerWins > computerWins) {
        console.log(`Congratulations! You won ${playerWins} times!`);
    } else if (computerWins > playerWins) {
        console.log(`Bummer! You only won ${playerWins} times!`)
    } else {
        console.log(`Not bad! You tied!`)
    }
}
  
const playerSelection = "rock";
const computerSelection = getComputerChoice();
playGame();
// console.log(playRound(playerSelection, computerSelection));
