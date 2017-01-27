// Business Logic
function Player() {
  this.totalScore;
}

function Game(scoreToWin, numberOfPlayers) {
  this.scoreToWin = scoreToWin;
  this.players = [];
  this.currentPlayer = 0;
  this.isBusted;
  this.playerHeld;
  this.playerWon;
  this.lastRoll;
  this.roundTotal;
  this.rollCount;
  for (var i = 0; i < numberOfPlayers; i++) {
    this.players.push(new Player());
  }
}

Game.prototype.rollHandler = function(rollValue) {
  this.rollCount++;
  this.lastRoll = rollValue;
  if (this.lastRoll === 1) {
    this.isBusted = true;
  } else {
    this.roundTotal += this.lastRoll;
    this.playerWon = this.roundTotal + this.players[this.currentPlayer].totalScore >= this.scoreToWin;
  }
}

Game.prototype.holdHandler = function() {
  this.players[this.currentPlayer].totalScore += this.roundTotal;
  this.playerHeld = true;
}

Game.prototype.playResult = function() {
  return {
    isBusted: this.isBusted,
    playerHeld: this.playerHeld,
    playerWon: this.playerWon,
    lastRoll: this.lastRoll,
    roundTotal: this.roundTotal,
    rollCount: this.rollCount
  };
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
  this.playerHeld = false;
  this.lastRoll = "";
  this.roundTotal = 0;
  this.rollCount = 0;
}

Game.prototype.startNewGame = function() {
  this.players.forEach(function(player) {
    player.totalScore = 0;
  });
  this.playerWon = false;
  this.startNewTurn();
}

Game.prototype.didCurrentPlayerWin = function() {
  return this.playerWon;
}

Game.prototype.showCurrentPlayerTotal = function() {
  return this.players[this.currentPlayer].totalScore;
}

var rollOneDie  = function() {
  return Math.floor((Math.random() * 6) + 1);
}


// Front End Logic
var pigDice = new Game(10, 1);


function setDisplay(gameState) {
  $(".alertMessage").hide();
  [
    [gameState.isBusted, "#bustedMessage"],
    [gameState.playerWon, "#winnerMessage"],
    [gameState.playerHeld, "#heldMessage"]
  ].forEach(function(gameStatePair) {
    if (gameStatePair[0]) {
      $(gameStatePair[1]).show();
    }
  });

  // if (gameState.isBusted) {
  //   $("#bustedMessage").show();
  // } else if (gameState.playerWon) {
  //   $("#winnerMessage").show();
  // } else if (gameState.playerHeld) {
  //   $("#heldMessage").show();
  // }

  $("#lastRoll").text(gameState.lastRoll);
  $("#playerTotalScore").text(pigDice.showCurrentPlayerTotal());
  $("#roundTotal").text(gameState.roundTotal);
  $("#rollCount").text(gameState.rollCount);
}


function toggleButtons() {
  if ($("#rollButton").attr("disabled")) {
    $("#rollButton").removeAttr("disabled");
    $("#holdButton").removeAttr("disabled");
  } else {
    $("#rollButton").attr("disabled", "disabled");
    $("#holdButton").attr("disabled", "disabled");
  }
  $("#changePlayerButton").toggle();
}


$(document).ready(function() {
  pigDice.startNewGame();
  var gameState = pigDice.playResult();
  setDisplay(gameState);

  $("#changePlayerButton").click(function() {
    var gameState = pigDice.playResult();
    if (gameState.playerWon) {
      pigDice.startNewGame();
    }
    if (gameState.playerHeld || gameState.isBusted) {
      pigDice.startNewTurn();
    }
    gameState = pigDice.playResult();
    setDisplay(gameState);
    toggleButtons();
  });


  $("#rollButton").click(function() {
    var rollValue = rollOneDie();
    pigDice.rollHandler(rollValue);
    var gameState = pigDice.playResult();
    setDisplay(gameState);
    if (gameState.playerWon || gameState.playerHeld || gameState.isBusted) {
      toggleButtons();
    }
  });


  $("#holdButton").click(function() {
    pigDice.holdHandler();
    var gameState = pigDice.playResult();
    setDisplay(gameState);
    pigDice.startNewTurn();
    toggleButtons();
  });

});
