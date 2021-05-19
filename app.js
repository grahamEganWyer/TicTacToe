console.log('Tic-Tac-Toe game');

var playSquare = document.querySelectorAll('.play-square');
var playBoard = document.querySelectorAll('.play-board');
var turnCounter = 1;
function handlePlayerMove(event) {
    console.log('clicked');
    if (turnCounter%2 == 0){
    event.target.textContent = 'O'
    } else {
        event.target.textContent = 'X'
    }
    return turnCounter++;
}
// debugger

for (i=0;i<playSquare.length;i++) {
    playSquare[i].addEventListener('click', handlePlayerMove);
}

// added listner to every element on the page!? come back to it
// playSquare.forEach(function(playSquare) {
//     addEventListener('click', handlePlayerMove);
// })