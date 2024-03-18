function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    const choice = choices[randomChoice];
    console.log(choice);
    return choice;
}

function playRound(playerSelection, computerSelection) {
    // your code here!
}
  
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
