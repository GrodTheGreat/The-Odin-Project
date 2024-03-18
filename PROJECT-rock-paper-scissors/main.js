function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    const choice = choices[randomChoice];
    
    return choice;
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    const playerSelectionLower = playerSelection.toLowerCase();
    const playerSelectionProper = playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase();
    const computerSelectionLower = computerSelection.toLowerCase() == 'paper';
    
    // Lose Message
    const loseMessage = `You Lose! ${playerSelectionProper} loses to ${computerSelection}`;
    // Win Message
    const winMessage = `You Win! ${playerSelectionProper} beats ${computerSelection}`;
    // Tie Message
    const tieMessage = `You Tied! ${playerSelectionProper} vs. ${computerSelection}`;

    if ((playerSelectionLower === 'rock') && (computerSelectionLower == 'paper')) {
        return loseMessage; 
    } else if ((playerSelectionLower === 'paper') && (computerSelectionLower == 'scissors')) {
        return loseMessage; 
    } else if ((playerSelectionLower === 'scissors') && (computerSelectionLower == 'rock')) {
        return loseMessage;    
    } else if ((playerSelectionLower === 'rock') && (computerSelectionLower == 'scissors')) {
        return winMessage;
    } else if ((playerSelectionLower === 'paper') && (computerSelectionLower == 'rock')) {
        return winMessage;
    } else if ((playerSelectionLower === 'scissors') && (computerSelectionLower == 'paper')) {
        return winMessage;
    } else {
        return tieMessage;
    }
}
  
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
