Tic-Tac-Toe

https://grahameganwyer.github.io/TicTacToe/

Using a simple grind template with a dataset num attached to each play square to use as an address identifier

Two players can alternatly click on play square to place their play pieces

On each click the players piece and location is recorded using an array which effectively tracks the state of the board

The checkForWin function is then called to iterate through a second array containg all possible win conditions and compare them to the current board state. If any win condtion is matched a winner is announced.

Reset button returns the board to its starting state.