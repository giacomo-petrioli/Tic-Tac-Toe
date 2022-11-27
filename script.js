let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var turn = 0;
var gameOver = false;

let crossScore = 0;
let circleScore = 0;

function ResetBoard() {
  board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  gameOver = false;
  for (var i = 0; i < 9; i++) {
    document.querySelectorAll("[id='cell']")[i].style.backgroundImage = "url()";
  }
  document.getElementById("log-label").innerHTML = null;
}

function AddSymbol(row, column) {
  if (board[row][column] != 0) return;

  if (gameOver) return;

  var i = 3 * row + column;

  if (turn % 2 == 0) {
    document.querySelectorAll("[id='cell']")[i].style.backgroundImage = "url(assets/cross.png)";
    board[row][column] = "X";
  } else {
    document.querySelectorAll("[id='cell']")[i].style.backgroundImage = "url(assets/circle.png)";
    board[row][column] = "O";
  }
  turn++;
  checkGame();
  checkDraw();
}

function checkGame() {
  if ((board[0][0] == board[0][1]) && (board[0][0] == board[0][2]) && (board[0][0] != 0)) {
    document.getElementById("log-label").innerHTML = board[0][0] + " Won";
    gameOver = true;
    if (board[0][0] == "X") {
      crossScore++;
      document.querySelectorAll("[id='player-score']")[0].innerHTML = crossScore;
    } else {
      circleScore++;
      document.querySelectorAll("[id='player-score']")[1].innerHTML = circleScore;
    }
  }
  else if ((board[1][0] == board[1][1]) && (board[1][0] == board[1][2]) && (board[1][0] != 0)) {
    document.getElementById("log-label").innerHTML = board[1][0] + " Won";
    gameOver = true;
    if (board[1][0] == "X") {
      crossScore++;
      document.querySelectorAll("[id='player-score']")[0].innerHTML = crossScore;
    } else {
      circleScore++;
      document.querySelectorAll("[id='player-score']")[1].innerHTML = circleScore;
    }
  }
  else if ((board[2][0] == board[2][1]) && (board[2][0] == board[2][2]) && (board[2][0] != 0)) {
    document.getElementById("log-label").innerHTML = board[2][0] + " Won";
    gameOver = true;
    if (board[2][0] == "X") {
      crossScore++;
      document.querySelectorAll("[id='player-score']")[0].innerHTML = crossScore;
    } else {
      circleScore++;
      document.querySelectorAll("[id='player-score']")[1].innerHTML = circleScore;
    }
  }
  else if ((board[0][0] == board[1][0]) && (board[0][0] == board[2][0]) && (board[0][0] != 0)) {
    document.getElementById("log-label").innerHTML = board[0][0] + " Won";
    gameOver = true;
    if (board[0][0] == "X") {
      crossScore++;
      document.querySelectorAll("[id='player-score']")[0].innerHTML = crossScore;
    } else {
      circleScore++;
      document.querySelectorAll("[id='player-score']")[1].innerHTML = circleScore;
    }
  }
  else if ((board[0][1] == board[1][1]) && (board[0][1] == board[2][1]) && (board[0][1] != 0)) {
    document.getElementById("log-label").innerHTML = board[0][1] + " Won";
    gameOver = true;
    if (board[0][1] == "X") {
      crossScore++;
      document.querySelectorAll("[id='player-score']")[0].innerHTML = crossScore;
    } else {
      circleScore++;
      document.querySelectorAll("[id='player-score']")[1].innerHTML = circleScore;
    }
  }
  else if ((board[0][2] == board[1][2]) && (board[0][2] == board[2][2]) && (board[0][2] != 0)) {
    document.getElementById("log-label").innerHTML = board[0][2] + " Won";
    gameOver = true;
    if (board[0][2] == "X") {
      crossScore++;
      document.querySelectorAll("[id='player-score']")[0].innerHTML = crossScore;
    } else {
      circleScore++;
      document.querySelectorAll("[id='player-score']")[1].innerHTML = circleScore;
    }
  }
  else if ((board[0][0] == board[1][1]) && (board[0][0] == board[2][2]) && (board[0][0] != 0)) {
    document.getElementById("log-label").innerHTML = board[0][0] + " Won";
    gameOver = true;
    if (board[0][0] == "X") {
      crossScore++;
      document.querySelectorAll("[id='player-score']")[0].innerHTML = crossScore;
    } else {
      circleScore++;
      document.querySelectorAll("[id='player-score']")[1].innerHTML = circleScore;
    }
  }
  else if ((board[0][2] == board[1][1]) && (board[0][2] == board[2][0]) && (board[0][2] != 0)) {
    document.getElementById("log-label").innerHTML = board[0][2] + " Won";
    gameOver = true;
    if (board[0][2] == "X") {
      crossScore++;
      document.querySelectorAll("[id='player-score']")[0].innerHTML = crossScore;
    } else {
      circleScore++;
      document.querySelectorAll("[id='player-score']")[1].innerHTML = circleScore;
    }
  }
}

function checkDraw() {
  for (var row = 0; row < 3; row++) {
    for (var column = 0; column < 3; column++) {
      if (board[row][column] == 0) return;
    }
  }
  document.getElementById("log-label").innerHTML = "It's a Draw";
  gameOver = true;
}