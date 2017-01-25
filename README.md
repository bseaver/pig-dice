# _Pig Dice_

#### _A strategy dice game with the objective of being the first to 100, 01/25/2017_

#### By _**Philip Putnam & Benjamin T. Seaver**_

## Description

_Pig Dice is a game for two or more players, each player takes turn rolling die, if it rolls one then the player doesn't get any points and it is the next player's turn. If the die rolled by a player is any number other than one, that player has the option of either rolling again to add to their "round total" or holding to add to their "total point". First player to get 100 points wins!_

## Setup/Installation Requirements

* _Clone repository_
* _Open index.html_

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

|  Behavior | Input | Output |
| --------------|-------|--------|
| User rolls dice | click roll | 1-6 |
| Roll value is 1 | 1 | "BUSTED!" |
| Roll value is 2 | 2 | round total = 2, roll count = 1 |
| Roll value is 2 | 2 | round total = 4, roll count = 2 |
| User holds | click hold | player total = 4, roll count = "", round total = "" |
| Same user rolls "96" | 96 | round total = 96, roll count = 1, Player total = 100, "WINNER!"|
| User specifies player | 1 | "player 1 turn" |
