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
    if ((playerSelectionLower === 'rock') &&
            (computerSelectionLower == 'paper')) {
        return 'lose';
    } else if ((playerSelectionLower === 'paper') &&
            (computerSelectionLower === 'scissors')) {
        return 'lose';
    } else if ((playerSelectionLower === 'scissors') &&
            (computerSelectionLower === 'rock')) {
        return 'lose';
    } else if ((playerSelectionLower === 'rock') &&
            (computerSelectionLower === 'scissors')) {
        return 'win';
    } else if ((playerSelectionLower === 'paper') &&
            (computerSelectionLower === 'rock')) {
        return 'win';
    } else if ((playerSelectionLower === 'scissors') &&
            (computerSelectionLower === 'paper')) {
        return 'win';
    } else {
        return 'tie';
    }
}

function setMessage(playerSelection, computerSelection, result) {
    // We need to grab the results message then update it based on results
    const roundMessage = document.querySelector('.round-result > h3');

    switch (result) {
        case 'win':
            roundMessage.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
            break;
        case 'lose':
            roundMessage.textContent = `You Lose! ${playerSelection} loses to ${computerSelection}`;
            break;
        case 'tie':
            roundMessage.textContent = `You Tied! ${playerSelection} vs. ${computerSelection}`;
            break;
        default:
            break;
    }
}

function endGame(playerScore, computerScore) {
    const game = document.querySelector('.game');
    game.style.display = 'none';

    const endGame = document.querySelector('.game-over');
    endGame.style.display = 'flex';
    
    const message = document.querySelector('#game-over-message');

    if (playerScore > computerScore) {
        message.textContent = `Congratulations! You won ${playerScore} times!`;
    } else if (computerScore > playerScore) {
        message.textContent = `Bummer! You only won ${playerScore} times!`;
    } else {
        message.textContent = `Not bad! You tied!`;
    }
}

function resetGame() {
    const game = document.querySelector('.game');
    game.style.display = 'flex';

    const endGame = document.querySelector('.game-over');
    endGame.style.display = 'none';

    playerWins = 0;
    computerWins = 0;
    roundsPlayed = 0;

    // We need to grab the scores and results on page
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');

    // Update the score
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;

    // Reset the round message
    const roundMessage = document.querySelector('.round-result > h3');
    roundMessage.textContent = "Let's Play!";
}

function playGame() {
    // We need to grab the scores and results on page
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');

    // We need to know the results of any round
    let result;

    // We need to grab the buttons
    const buttons = document.querySelector('.buttons');
    buttons.addEventListener('click', (event) => {
        const target = event.target;
        if (target.className === 'buttons') return;

        let computerChoice = getComputerChoice()

        result = playRound(target.id, computerChoice)
        switch (result) {
            case 'win':
                playerWins++;
                roundsPlayed++;
                setMessage(target.id, computerChoice, result);
                break;
            case 'lose':
                computerWins++;
                roundsPlayed++;
                setMessage(target.id, computerChoice, result);
                break;
            case 'tie':
                roundsPlayed++;
                setMessage(target.id, computerChoice, result);
                break;
            default:
                break;
        }
        // Update the score
        playerScore.textContent = playerWins;
        computerScore.textContent = computerWins;

        // The game ends after 5 rounds and a winner may be decided
        if (roundsPlayed === 5) endGame(playerWins, computerWins);
    });
}

// We need to keep track of how many wins the player and computer get
let playerWins = 0;
let computerWins = 0;
let roundsPlayed = 0;

// Let's play the game!
playGame();