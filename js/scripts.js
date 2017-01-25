// Business Logic
function Player() {
  this.totalScore;
}

function Game() {
  this.players = [];
  this.currentPlayer;
  this.isBusted;
  this.lastRoll;
  this.roundTotal;
  this.rollCount;
}

Game.prototype.playHandler = function(rollValue) {
  this.rollCount++;
  this.lastRoll = rollValue;
  if (this.lastRoll === 1) {
    this.isBusted = true;
    this.roundTotal = 0;
  } else {
    this.roundTotal += this.lastRoll;
  }
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
}

$(document).ready(function() {
  pigDice.startNewTurn();

  $("#rollButton").click(function() {
    var rollValue = rollOneDie();
    pigDice.playHandler(rollValue);
    setDisplay();
    if (pigDice.turnEnded()) {
      pigDice.startNewTurn()
    }
  });

});
