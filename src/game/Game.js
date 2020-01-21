
import Board from './Board';
import Player from './Player';

export default class Game {
    constructor(size = 3) {
        this.size = size;
        this.winningCombos = [[1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9],
            [2, 5, 8], [3, 5, 7], [1, 2, 3], [4, 5, 6], [7, 8, 9]];
        this.currentPlayer = 1;
        this.round = 1;
        this.players = [];
        this.playerIndex = 0;
    }

    async run() {
        const board = new Board();

        board.create();
        board.display();

        this.players.push(new Player());

        await this.players[0].select();

        this.players.push(new Player(2));

        this.players[1].mark = this.players[0].mark === 'X' ? 'O' : 'X';

        // loops until game over is determined
        return this.loopRounds(board);
    }

    async turn() {
        // get player move
        const player = this.players[this.playerIndex];

        return {
            move: await player.move(),
            mark: player.mark,
        };
    }

    displayEndGame(draw) {
        console.log(`Game Over! Player: ${this.players[this.playerIndex].mark} WINS!`);
        if (draw) {
            console.log('Game Over! It was a DRAW! How boring!');
        }
    }

    async loopRounds(board) {
        // enter player move
        const turn = await this.turn();

        // register and display the move
        board.draw(turn.move, turn.mark);
        board.display();

        // check if game is won
        const { gameOver, draw } = this.checkGameStatus();

        // end game procedure
        if (gameOver) {
            this.displayEndGame(draw);
            board.display();
            return;
        }

        // iterate round number
        this.round++;

        // switch players for each round
        if (this.round % 2 === 0) {
            this.playerIndex = 1;
        } else {
            this.playerIndex = 0;
        }

        // continue game
        await this.loopRounds(board);
    }

    checkGameStatus() {
        const results = { gameOver: false, draw: false };
        const playerChoices = this.players[this.playerIndex].choices;

        if (playerChoices.length < 3) {
            return results;
        }

        const threeMatches = (choices) => choices.reduce((acc, val) => {
            if (val === true) {
                acc++;
            }
            return acc;
        }, 0);

        // check victory
        // if board says current player has winning combo
        for (const winner of this.winningCombos) {
            const currentSelection = [];
            for (const choice of playerChoices) {
                currentSelection.push(winner.some((winnerMove) => winnerMove === choice));
            }
            const victory = threeMatches(currentSelection) === 3;

            if (victory) {
                // winning combo found
                results.gameOver = true;
                return results;
            }
        }

        return results;
    }
}
