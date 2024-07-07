function GameBoard() {
    const gameboard = [
        ['.', '.', '.'],
        ['.', '.', '.'],
        ['.', '.', '.']
    ];

    function getGameboard() {};
    function setGameboard() {};
    function resetGameboard() {

    };
    return {getGameboard, setGameboard, resetGameboard};
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