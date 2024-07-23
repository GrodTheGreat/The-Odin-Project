const tic = (() => {
    const Events = (() => {
        const events = {};

        const on = function (event, func) {
            events[event] = events[event] || [];
            events[event].push(func);
        };
        
        const off = function (event, func) {
            if (events[event]) {
                for (let i = 0; i < events[event].length; i++) {
                    if (events[event][i] == func) {
                        events[event].splice(i, 1);
                        break;
                    }
                }
            }
        };

        const emit = function (event, data) {
            if (events[event]) {
                events[event].forEach((func) => {
                    func(data);
                });
            }
        };

        return {
            on,
            off,
            emit
        }
    })();

    const GameBoard = (() => {
        const gameboard = [
            ['X', 'X', 'X'],
            ['', '', ''],
            ['', '', '']
        ];

        const getGameboard = () => gameboard;
        const setGameboard = function (row, column, marker) {
            if (
                (row > 2) ||
                (row < 0) ||
                (column > 2) ||
                (column < 0)
            ) {
                return false;
            }

            if (
                (marker !== 'X') &&
                (marker !== 'O')
            ) {
                return false;
            }

            if (gameboard[row][column] !== '') {
                return false;
            }

            gameboard[row][column] = marker;

            return true;
        };
        const resetGameboard = function() {
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

    function createPlayer(name = 'John Doe', marker) {
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
            // const target = e.target;
            // placeMarker(target, player1)

        });

        // const placeMarker = (target, player) => {
        //     if ((target.children[0].classList.value === 'marker') &&
        //         (target.children[0].textContent === '')) {
        //             const cell = target.id.split('-');
        //             // Gameboard.setGameboard(cell[1], cell[2], player.getMarker());
        //     }
        // };

        const checkWinner = () => {
            
        };

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

        const checkColumn = (column, marker) => {
            if (typeof(column) !== Number) {
                return false;
            }
            if (column > 2) {
                return false;
            }
            if (column < 0) {
                return false;
            }

            if (typeof(marker) !== String) {
                return false;
            }
            if ((marker !== 'X') || (marker !== 'O')) {
                return false;
            }

            for (i = 0; i < 2; i++) {
                if (GameBoard.getGameboard()[i][column] !== marker) {
                    return false;
                }
                else {
                    return true;
                }
            }
        };

        const checkLeftColumn = (marker) => {
            if (typeof(marker) !== String) {
                return false;
            }
            if ((marker !== 'X') || (marker !== 'O')) {
                return false;
            }

            for (i = 0; i < 2; i++) {
                if (GameBoard.getGameboard()[i][i] !== marker) {
                    return false;
                }
                else {
                    return true;
                }
            }
        };

        const checkRightColumn = (marker) => {
            if (typeof(marker) !== String) {
                return false;
            }
            if ((marker !== 'X') || (marker !== 'O')) {
                return false;
            }

            for (i = 2; i > 0; i--) {
                if (GameBoard.getGameboard()[i][i] !== marker) {
                    return false;
                }
                else {
                    return true;
                }
            }
        };
    })();

    const DisplayController = (() => {
        const game = document.querySelector('.game');

        const gameboard = game.querySelector('.gameboard');

        const score = game.querySelector('.scoreboard');

        const form = game.querySelector('form');
        const player1 = form.querySelector('#player-1');
        const player2 = form.querySelector('#player-2');
        const reset = form.querySelector('#reset');

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const players = {
                'player1': player1.value || 'Player 1',
                'player2': player2.value || 'Player 2'
            }

            score.querySelector('#player-1-score').children[0].textContent = players.player1;
            score.querySelector('#player-2-score').children[0].textContent = players.player2;

            Events.emit('nameChange', players);
        });
        reset.addEventListener('click', (e) => {
            resetGame();
        });

        const resetGame = () => {
            const markers = gameboard.querySelectorAll('.marker');
            markers.forEach((marker) => {
                marker.textContent = '';
            });

            Events.emit('reset', '');
        };

        const renderCell = (row, column, marker) => {
            const cell = gameboard.querySelector(`#cell-${row}-${column}`)
            if (cell.children[0].textContent === '') {
                cell.children[0].textContent = marker;
            }
        };

        const renderScore = (player, id) => {
            score.querySelector(`#player-${id}-score`).children[1].textContent = player.getScore();
        };

        Events.on('boardChange', renderCell);
        Events.on('gameOver', renderScore);
        Events.on('gameOver', resetGame);

        return {renderCell};
    })()

    return {
        DisplayController
    };


})();