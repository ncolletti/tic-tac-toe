
class Board {
    constructor(size = 3) {
        this.size = size;
        this.board = '';
    }

    create() {
        if (this.size === 3) {
            this.board = `
                                1   |   2   |   3
                            -------------------------
                                4   |   5   |   6
                            -------------------------
                                7   |   8   |   9

                            `;
        } else if (this.size === 4) {
            this.board = `
                                1   |   2   |   3   |   4
                            ----------------------------------
                                5   |   6   |   7   |   8
                            ----------------------------------
                                9   |   10  |   11  |   12

                            `;
        }
    }

    display() {
        console.log(this.board);
    }

    draw(position, player) {
        this.board = this.board.replace(position, player);
    }
}

export default Board;
