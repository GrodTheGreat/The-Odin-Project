const GameBoard = (() => {
    const gameboard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    const getGameboard = () => gameboard;
    const setGameboard = (row, column, marker) => {
        if (
            (row > 2) ||
            (row < 0) ||
            (column > 2) ||
            (column < 0)
        ) {
            return false;
        }

        if (gameboard[row][column] === '') {
            gameboard[row][column] = marker;
            return true;
        }
    };
    const resetGameboard = () => {
        gameboard[0] = ['', '', ''];
        gameboard[1] = ['', '', ''];
        gameboard[2] = ['', '', ''];
    };
    return {
        getGameboard,
        setGameboard,
        resetGameboard
    };
})();

function createPlayer(name, marker) {
    let name = name;
    let marker = marker;
    let score = 0;

    const getName = () => name;
    const setName = (newName) => name = newName;
    const getMarker = () => marker;
    const setMarker = (newMarker) => marker = newMarker;
    const getScore = () => score;
    const winGame = () => score++;

    return {
        getName,
        setName,
        getMarker,
        setMarker,
        getScore,
        winGame
    };
};

const Game = (() => {
    let player1Turn = true;
    let gameOver = false;

    const player1 = createPlayer('Player 1', 'X');
    const player2 = createPlayer('Player 2', 'O');

    const gameboard = document.querySelector('.gameboard');
    gameboard.addEventListener('click', (e) => {
        const target = e.target;
        console.log(target);
    });

    const checkWinner = () => {};
    const checkRow = (row, marker) => {
        if (typeof(row) !== Number) {
            return false;
        }
        if (row > 2) {
            return false;
        }
        if (row < 0) {
            return false;
        }

        if (typeof(marker) !== String) {
            return false;
        }
        if ((marker !== 'X') || (marker !== 'O')) {
            return false;
        }

        for (i = 0; i < 2; i++) {
            if (GameBoard.getGameboard()[row][i] !== marker) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    const checkColumn = (column) => {};
})();