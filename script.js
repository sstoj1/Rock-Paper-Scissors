
// amount of times the computer won
let computerCounter = 0;
// amount of times the player won
let playerCounter = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    return computerChoice;
}
console.log(getComputerChoice());


// 1 = Rock, 2 = Paper, 3 = Scissors
function getRoundWinner(playerChoice) {
    let computerChoice = getComputerChoice();
    let winner;
    switch (computerChoice) {
        case 1: 
            if (playerChoice == 1) {
                winner = "Tie";
                return winner;
            } else if(playerChoice == 2) {
                winner = "Player";
                return winner;
            } else if (playerChoice == 3) {
                winner = "Computer";
                return winner;
            }
            break;
        case 2: 
            if (playerChoice == 1) {
                winner = "Computer";
                return winner;
            } else if(playerChoice == 2) {
                winner = "Tie";
                return winner;
            } else if (playerChoice == 3) {
                winner = "Player";
                return winner;
            }
            break;
        case 3: 
            if (playerChoice == 1) {
                winner = "Player";
                return winner;
            } else if(playerChoice == 2) {
                winner = "Computer";
                return winner;
            } else if (playerChoice == 3) {
                winner = "Tie";
                return winner;
            }
            break;
    }
    return "tie";
}

function winCounter(roundWinner) {
    if (roundWinner == "Player") {
        playerCounter++;
    } else if (roundWinner == "Computer") {
        computerCounter++;
    }

}
