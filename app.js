console.log('Tic-Tac-Toe game');

var playSquare = document.querySelectorAll('.play-square');
var playBoard = document.querySelectorAll('.play-board');
var playerTurn = document.querySelector('.player-turn');

var turnCounter = 1;

function handlePlayerMove(event) {
    
    if (event.target.textContent) {
        alert('That square has already been filled');
    } else {
        if (turnCounter%2 == 0){
        event.target.textContent = 'O'
        playerTurn.textContent = 'Player Ones Turn'
        return turnCounter++
        } else {
            event.target.textContent = 'X'
            playerTurn.textContent = 'Player Twos Turn'
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
    for (i=0;i<playSquareArray.length;i++) {
        if (playSquareArray[0]===playSquareArray[1] && playSquareArray[0]===playSquareArray[2]) {
            console.log(`${playSquareArray[0]}Wins!`);
        } else if (playSquareArray[3]===playSquareArray[4] && playSquareArray[3]===playSquareArray[5]) {
            console.log(`${playSquareArray[3]}Wins!`);
        } else if (playSquareArray[6]===playSquareArray[7] && playSquareArray[6]===playSquareArray[8]) {
            console.log(`${playSquareArray[6]}Wins!`);
        } else if (playSquareArray[0]===playSquareArray[3] && playSquareArray[0]===playSquareArray[6]) {
            console.log(`${playSquareArray[0]}Wins!`);
        } else if (playSquareArray[1]===playSquareArray[4] && playSquareArray[1]===playSquareArray[7]) {
            console.log(`${playSquareArray[1]}Wins!`);
        } else if (playSquareArray[2]===playSquareArray[5] && playSquareArray[2]===playSquareArray[8]) {
            console.log(`${playSquareArray[2]}Wins!`);
        } else if (playSquareArray[0]===playSquareArray[4] && playSquareArray[0]===playSquareArray[8]) {
            console.log(`${playSquareArray[0]}Wins!`);
        } else if (playSquareArray[2]===playSquareArray[4] && playSquareArray[2]===playSquareArray[6]) {
            console.log(`${playSquareArray[2]}Wins!`);
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