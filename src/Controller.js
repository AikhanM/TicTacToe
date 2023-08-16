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

      } 
    }
  

  startNewGame() {
    this.model.resetGame();

    this.view.updateCell()
    this.view.hideModal();
  }

  resetClickHandler(){
    this.startNewGame();
    this.view.manageScore(0, 0);
    this.model.updateScore()

  }
}
