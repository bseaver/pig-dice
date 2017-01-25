// Business Logic
function Player() {
  this.totalScore;
}

function Game() {
  this.players = [];
  this.currentPlayer;
  this.isBusted;
  this.lastRoll;
}

Game.prototype.playHandler = function(rollValue) {
  this.lastRoll = rollValue;
  if (rollValue === 1) {
    this.isBusted = true;
  }
}

Game.prototype.playResult = function() {
  var result;
  if (this.isBusted) {
    result = "Player is Busted!";
  }
  return result;
}

var pigDice = new Game();
pigDice.players.push(new Player());
pigDice.currentPlayer = 0;


var rollOneDie  = function() {
  return Math.floor((Math.random() * 6) + 1);
}

// Front End Logic
$(document).ready(function() {

  $("#rollButton").click(function() {
    var rollValue = rollOneDie();
    $("#rollDice").text(rollValue);
    pigDice.playHandler(rollValue);
    $("#rollResult").text(pigDice.playResult());

  });

});
