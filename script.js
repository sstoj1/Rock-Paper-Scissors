
function winner(rock, paper, scissors) {
    let winner = "";
    if (rock == true && scissors == true) {
        winner = "Rock";
    } else if (rock == true && paper == true) {
        winner = "Paper";
    } else if (paper == true && scissors == true) {
        winner = "Scissors"
    } else {
        winner = "Tie";
    }

    return winner;
}

console.log(winner(true, false, true)); // should be rock
console.log(winner(true, true, false)); // should be paper
console.log(winner(false, true, true)); // should be scissors

