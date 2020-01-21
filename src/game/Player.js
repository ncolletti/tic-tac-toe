import SelectPlayer from '../selections/SelectPlayer';
import SelectPosition from '../selections/SelectPosition';

export default class Player {
    constructor(playerNum = 1) {
        this.playerNum = playerNum;
        this.choices = [];
        this.mark = null;
    }

    async select() {
        this.mark = await SelectPlayer();
    }

    async move() {
        const move = await SelectPosition(3, this.mark);
        this.choices.push(move);
        return move;
    }

    getMoves() {
        return this.moves;
    }
}
