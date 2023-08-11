export default class Controller {
  constructor(Model, View) {
    this.model = Model;
    this.view = View;

    this.view.listenerSetData((cellValue)=>{
      this.play(cellValue)
    })



    this.view.listenResetClickHandler(()=>{
      this.resetClickHandler()
    })

    this.view.listenStartNewGame(()=>{
      this.startNewGame()
    })


    this.view.cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        this.play(cell.dataset.value);
      });
    });

    this.view.newGameBtn.addEventListener("click", () => this.startNewGame());
    this.view.resetBtn.addEventListener("click", () =>
      this.resetClickHandler()
    );

    this.view.cells.forEach((cell, i) => {
      cell.addEventListener("click", () => this.addMove(i));
    });

  }

  play(i) {
    this.model.play(i);
    this.view.addToBoard(this.model.gameBoard);

    if (this.model.winner) {
      this.view.showModal(this.model.winner);
      this.view.manageScore(this.model.playerXScore, this.model.playerOScore);
    } else if (this.model.isBoardFull()) {
      this.view.showModal("Draw");
    }
  }


  addMove(i) {
    if (
      this.model.gameBoard[i] === "" &&
      !this.model.winner
    ) {
      this.model.play(i);
      const cell = this.cells[i];

      if (this.model.winner) {
        this.showModal(this.model.winner);
        this.manageScore(
          this.model.playerXScore,
          this.model.playerOScore
        );
      } else if (this.model.isBoardFull()) {
        this.showModal("Draw");

      } 

      } else {
        const clone = document.createElement("div");
        clone.classList.add(this.model.curPlayer);
        cell.appendChild(clone);
      }

    }
  

  startNewGame() {
    this.model.resetGame();

    this.view.updateCell()

    this.view.cells.forEach((cell) => {
      cell.textContent = "";
      cell.classList.remove("cross", "circle");
    });

    this.view.hideModal();
  }

  resetClickHandler(){
    this.startNewGame();
    this.view.manageScore(0, 0);
    this.model.updateScore()

  }
}
