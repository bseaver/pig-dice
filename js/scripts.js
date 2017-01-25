// Business Logic
var rollOneDie  = function() {
  return Math.floor((Math.random() * 6) + 1);
}



// Front End Logic
$(document).ready(function() {

  $("#rollButton").click(function() {
    $("#rollDice").text(rollOneDie());
  });

});
