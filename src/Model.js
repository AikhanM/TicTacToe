export default class Model {
    constructor() {
        this.curPlayer = "X";
        this.winner = null;
        this.playerXScore = 0;
        this.playerOScore = 0;
        this.gameBoard = ["", "", "", "", "", "", "", "", ""];
    }

    play(i) {
        if (this.gameBoard[i] === "") {
            this.gameBoard[i] = this.curPlayer;

            if (this.checkWinner(this.curPlayer)) {
                this.winner = this.curPlayer;
                this.updateScore();
            } else if (this.isBoardFull()) {
                this.winner = "Draw";
            } else {
                this.curPlayer = this.curPlayer === "X" ? "O" : "X";
            }
        }
    }

    checkWinner(player) {
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        return winningConditions.some((condition) =>
            condition.every((i) => this.gameBoard[i] === player)
        );
    }

    isBoardFull() {
        return this.gameBoard.every((item) => item !== "");
    }

    updateScore() {
        if (this.winner === "X") {
            this.playerXScore++;
        } else if (this.winner === "O") {
            this.playerOScore++;
        }

        else{
            this.playerOScore=0
            this.playerXScore=0
        }
    }


    


    resetGame() {
        this.gameBoard = ["", "", "", "", "", "", "", "", ""];
        this.curPlayer = "X";
        this.winner = null;
    }
}