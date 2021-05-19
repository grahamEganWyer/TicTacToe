console.log('Tic-Tac-Toe game');

var playSquare = document.querySelectorAll('.play-square');
var playBoard = document.querySelectorAll('.play-board');
var playerTurn = document.querySelector('.player-turn');

var turnCounter = 1;


var winCheck = ["", "", "", "", "", "", "", "", ""]

function handlePlayerMove(event) {
    var clickedSquare = event.target.dataset.num

    if (event.target.textContent) {
        alert('That square has already been filled');
    } else {
        if (turnCounter%2 == 0){
        event.target.textContent = 'O'
        playerTurn.textContent = 'Player Ones Turn'
        winCheck[clickedSquare] = "O"
        return turnCounter++
        } else {
            event.target.textContent = 'X'
            playerTurn.textContent = 'Player Twos Turn'
            winCheck[clickedSquare] = "X"
            return turnCounter++
        }
    }
}
 

// Test to pull values from square into an array
var playSquareArray = [];

function test() {
    for (i=0;i<9;i++) {
    var y = String(playSquare[i].textContent);

    playSquareArray.push(y)
    }
}

// Test to iterate through array and find win conditions
function testWinDraw() {
    for (i=0;i<winCheck.length;i++) {
        if (winCheck)
        } else {
            console.log('Draw');
        }
    }
}


document.querySelector('.test').addEventListener('click', test);

document.querySelector('.win-draw').addEventListener('click', testWinDraw);

for (i=0;i<playSquare.length;i++) {
    playSquare[i].addEventListener('click', handlePlayerMove);
}

// added listner to every element on the page!? come back to it
// playSquare.forEach(function(playSquare) {
//     addEventListener('click', handlePlayerMove);
// })