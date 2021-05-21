var playSquare = document.querySelectorAll('.play-square');
var playerTurn = document.querySelector('.player-turn');
var resetBtn = document.querySelector('.reset-btn')

var turnCounter = 1;
var currentPlayer = "Player One"
var win = false;

var winCheck = ["", "", "", "", "", "", "", "", ""]

var winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function handlePlayerMove(event) {
    var clickedSquare = event.target.dataset.num

    if (event.target.textContent) {
        alert('That square has already been filled');
    } else {
        if (turnCounter%2 == 0){
        event.target.textContent = 'O'
        playerTurn.textContent = 'Player Ones Turn'
        winCheck[clickedSquare] = "O"
        checkForWin()
        currentPlayer = "Player One"
        return turnCounter++
        } else {
            event.target.textContent = 'X'
            playerTurn.textContent = 'Player Twos Turn'
            winCheck[clickedSquare] = "X"
            checkForWin()
            currentPlayer = "Player Two"
            return turnCounter++
        }
    }
}

function checkForWin() {
    for (i=0;i<winConditions.length;i++) {
        var boardState = winConditions[i];
        
        if (winCheck[boardState[0]]=== "" || winCheck[boardState[1]]=== "" || winCheck[boardState[2]]=== "") {        
            continue;
        }

        if (winCheck[boardState[0]]===winCheck[boardState[1]] && winCheck[boardState[0]]===winCheck[boardState[2]]) {
            alert(`${currentPlayer} WINS`);
        }
    }
}

function handleReset() {
    for (i=0;i<playSquare.length;i++) {
        playSquare[i].textContent = "";
    }

    for (i=0;i<winCheck.length;i++) {
        winCheck[i] = "";
    }

    turnCounter = 1;
    currentPlayer = "Player One"
    playerTurn.textContent = 'Player Ones Turn'
}

for (i=0;i<playSquare.length;i++) {
    playSquare[i].addEventListener('click', handlePlayerMove);
}

resetBtn.addEventListener('click', handleReset)