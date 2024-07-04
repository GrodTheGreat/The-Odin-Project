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

function Player(name, marker) {
    const name = name;
    const marker = marker;
    let score = 0;

    function getName() {
        return this.name;
    };
    function setName(newName) {
        this.name = newName;
    };
    function getMarker() {
        return this.marker;
    };
    function setMarker(newMarker) {
        this.marker = newMarker;
    };
    function getScore() {
        return this.score;
    }
    function winGame() {
        this.score++;
    }

    return {getName, setName, getMarker, setMarker, getScore, winGame};
};

function Game() {

};