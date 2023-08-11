export default class View {
  constructor() {
    this.cells = document.querySelectorAll(".cell");
    this.newGameBtn = document.querySelector(".new");
    this.resetBtn = document.querySelector(".reset");
    this.modal = document.querySelector(".modal");
    this.overlay = document.querySelector(".overlay");
    this.message = document.querySelector(".message");
  }

  listenStartNewGame(callback){
    this.newGameBtn.addEventListener("click",callback)
  }

  listenResetClickHandler(callback){
    this.resetBtn.addEventListener("click",callback)
  }

  listenerSetData(callback){
    this.cells.forEach((cell)=>{
      cell.addEventListener("click",()=>{
        callback(cell.dataset.value)
      })
    })



  }

  addToBoard(board) {
    this.cells.forEach((cell, i) => {
      cell.textContent = board[i];
    });
  }

  switchPlayers(curPlayer, cell) {
    cell.classList.remove("circle");
    cell.classList.remove("cross");
    curPlayer === "cross"
      ? cell.classList.add("cross")
      : cell.classList.add("circle");
  }

  showModal(winner) {
    this.modal.classList.remove("hidden");
    this.overlay.classList.remove("hidden");
    if (winner == "cross" || winner == "circle") {
      this.message.innerHTML = `${winner.toUpperCase()} WINS!`;
    } else if (winner === "Draw") {
      this.message.textContent = "It's a Draw!";
    }
  }


  
  updateCell(){
    this.cells.forEach((cell) => {
        cell.textContent = "";
        cell.classList.remove("cross", "circle");
      });
}


  hideModal() {
    this.modal.classList.add("hidden");
    this.overlay.classList.add("hidden");
  }

  manageScore(xScore, oScore) {
    document.getElementById("playerXScore").textContent = xScore;
    document.getElementById("playerOScore").textContent = oScore;
  }
}