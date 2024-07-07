function GameBoard() {
    const gameboard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    const getGameboard = () => this.gameboard;
    const setGameboard = (row, column, marker) => {
        if (
            (row > 2) ||
            (row < 0) ||
            (column > 2) ||
            (column < 0)
        ) {
            return false;
        }

        if (this.gameboard[row][column] === '') {
            this.gameboard[row][column] = marker;
            return true;
        }
    };
    const resetGameboard = () => {
        this.gameboard[0] = ['', '', ''];
        this.gameboard[1] = ['', '', ''];
        this.gameboard[2] = ['', '', ''];
    };
    return {
        getGameboard,
        setGameboard,
        resetGameboard
    };
};

function createPlayer(name, marker) {
    const name = name;
    const marker = marker;
    let score = 0;

    const getName = () => this.name;
    const setName = (newName) => this.name = newName;
    const getMarker = () => this.marker;
    const setMarker = (newMarker) => this.marker = newMarker;
    const getScore = () => this.score;
    const winGame = () => this.score++;

    return {
        getName,
        setName,
        getMarker,
        setMarker,
        getScore,
        winGame
    };
};

function Game() {

};