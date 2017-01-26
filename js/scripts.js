// Business Logic
function Player() {
  this.totalScore = 0;
}

function Game() {
  this.players = [];
  this.currentPlayer;
  this.isBusted;
  this.lastRoll;
  this.roundTotal;
  this.rollCount;
}

Game.prototype.showCurrentPlayerTotal = function() {
  return this.players[this.currentPlayer].totalScore;
}

Game.prototype.rollHandler = function(rollValue) {
  this.rollCount++;
  this.lastRoll = rollValue;
  if (this.lastRoll === 1) {
    this.isBusted = true;
    this.roundTotal = 0;
  } else {
    this.roundTotal += this.lastRoll;
  }
}

Game.prototype.holdHandler = function() {
  this.players[this.currentPlayer].totalScore += this.roundTotal;
}

Game.prototype.turnEnded = function() {
  return this.isBusted;
}

Game.prototype.playResult = function() {
  var result;
  if (this.isBusted) {
    result = "Player is Busted!";
  } else {
    result =
      "Player round total is: " + this.roundTotal +
      " roll count is: " + this.rollCount;
  }
  return result;
}

Game.prototype.showLastRoll = function() {
  var result;
  if (this.rollCount === 0) {
    result = "";
  } else {
    result = this.lastRoll.toString();
  }
  return result;
}

Game.prototype.startNewTurn = function() {
  this.isBusted = false;
  this.lastRoll = "";
  this.roundTotal = 0;
  this.rollCount = 0;
}

Game.prototype.didCurrentPlayerWin = function() {
  return this.roundTotal + this.players[this.currentPlayer].totalScore >= 10;
}

var pigDice = new Game();
pigDice.players.push(new Player());
pigDice.currentPlayer = 0;


var rollOneDie  = function() {
  return Math.floor((Math.random() * 6) + 1);
}


// Front End Logic
function setDisplay() {
  $("#rollDice").text(pigDice.showLastRoll());
  $("#rollResult").text(pigDice.playResult());
  $("#playerTotalScore").text(pigDice.showCurrentPlayerTotal());
}

$(document).ready(function() {
  pigDice.startNewTurn();
  setDisplay();

  $("#rollButton").click(function() {
    var rollValue = rollOneDie();
    pigDice.rollHandler(rollValue);
    setDisplay();
    if (pigDice.turnEnded()) {
      pigDice.startNewTurn();
    } else if (pigDice.didCurrentPlayerWin()) {
      $("#congratulations").text("WINNER!");
    }
  });

  $("#holdButton").click(function() {
    pigDice.holdHandler();
    pigDice.startNewTurn();
    setDisplay();
  });

});
