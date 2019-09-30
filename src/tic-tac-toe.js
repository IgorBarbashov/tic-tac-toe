class TicTacToe {
  constructor() {
    this.field = [["", "", ""], ["", "", ""], ["", "", ""]];
    this.player = "x";
  }

  getCurrentPlayerSymbol() {
    return this.player;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.field[rowIndex][columnIndex] === "") {
      this.field[rowIndex][columnIndex] = this.player;
      this.player = this.player === "x" ? "o" : "x";
    }
  }

  isFinished() {
    return this.getWinner() || this.isDraw() ? true : false;
  }

  getWinner() {
    const field = this.field;

    const isColumn = field[0].reduce(
      (acc, el, index) =>
        acc[0] || el === ""
          ? acc
          : el === field[1][index] && el === field[2][index]
          ? [true, el]
          : [false, ""],
      [false, ""]
    );
    if (isColumn[0]) {
      return isColumn[1];
    }

    const isRow = field.reduce(
      (acc, el) =>
        acc[0] || el[0] === ""
          ? acc
          : el[0] === el[1] && el[0] === el[2]
          ? [true, el[0]]
          : [false, ""],
      [false, ""]
    );
    if (isRow[0]) {
      return isRow[1];
    }

    if (
      field[0][0] !== "" &&
      field[0][0] === field[1][1] &&
      field[0][0] === field[2][2]
    ) {
      return field[0][0];
    }

    if (
      field[0][2] !== "" &&
      field[0][2] === field[1][1] &&
      field[2][0] === field[1][1]
    ) {
      return field[1][1];
    }

    return null;
  }

  noMoreTurns() {
    return this.field.map(el => el.join("")).join("").length === 9;
  }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex] === ""
      ? null
      : this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
