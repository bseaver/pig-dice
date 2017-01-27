# _Pig Dice_

#### _A strategy dice game with the objective of being the first to 100, 01/25/2017_

#### By _**Philip Putnam & Benjamin T. Seaver**_

## Description

_Pig Dice is a game for two or more players, each player takes turn rolling die, if it rolls one then the player doesn't get any points and it is the next player's turn. If the die rolled by a player is any number other than one, that player has the option of either rolling again to add to their "round total" or holding to add to their "total point". First player to get 100 points wins!_

## Setup/Installation Requirements

* _Clone repository_
* _Open index.html_

## See on GitHub.io
[https://philip-putnam.github.io/pig-dice/](https://philip-putnam.github.io/pig-dice/)

[https://bseaver.github.io/pig-dice/](https://bseaver.github.io/pig-dice/)

## Known Bugs

_No known bugs_

## Support and contact details

_No support_

## Technologies Used

_HTML, CSS, JavaScript_
_jQuery_
_Bootstrap_

### License

*MIT*

Copyright (c) 2017 **_Benjamin T. Seaver & Philip Putnam_**

## Specifications

### Phase 2: Improve UI for 2 player game

* Top header goes into well
* Play board is one row with 2 columns
* First Column is divided in two rows
* First row is Need To Know (NTK)
* Second row is game play buttons
* First row in NTK Section is alert window
* Second row in NTK is table with 2 columns round total and round count
* Second column on game board is player statistics
* Player stats consist of a table of player rankings


### Phase 1: Build up back end with minimal UI

|  Behavior | Input | Output |
| --------------|-------|--------|
| User rolls dice | click roll | 1-6 |
| Roll value is 1 | 1 | "BUSTED!" |
| Roll value is 2 | 2 | round total = 2, roll count = 1 |
| Roll value is 2 | 2 | round total = 4, roll count = 2 |
| User holds | click hold | player total = 4, round total = 0, roll count = 0 |
| Same user rolls "96" | 96 | round total = 96, roll count = 1, Player Total Score= 100, "WINNER!"|
| User specifies player | 1 | "player 1 turn" |
