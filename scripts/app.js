function computerPlay () {
    // randomly return either 'ROCK', 'PAPER', or 'SCISSORS'. This function will be used in the game to make the computer's play.

    switch (Math.floor((Math.random() * 3) + 1)) {
        case 1: return 'ROCK';
        case 2: return 'PAPER';
        case 3: return 'SCISSORS';
        default: return 'Error';
        // default: return error().console.log("Error"); // attempted to return error object as a user-defined exception 
    }
}

//input selections
let playerSelection = 'ROCK';
let computerSelection = computerPlay();

// player win, lose, or tie -> playerWon = 1, 0, -1
let playerWon = ""; //declaring as a string to be safe, will become a boolean on assignment each round 

// play 1 round
function playRound (playerSelection, computerSelection) {
    
    //  always uppercase
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();


    // ROCK beats SCISSORS
    if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS'){
        playerWon = 1;
        return `You won! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK'){
        playerWon = 0;
        return `Drat! You lost! ${computerSelection} beats ${playerSelection}!`;
    } 
        
    // SCISSORS beats PAPER
    else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){
        playerWon = 1;
        return `You won! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS'){
        playerWon = 0;
        return `Drat! You lost! ${computerSelection} beats ${playerSelection}!`;
    } 

    // PAPER beats ROCK
    else if (playerSelection == 'PAPER' && computerSelection == 'ROCK'){
        playerWon = 1;
        return `You won! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER'){
        playerWon = 0;
        return `Drat! You lost! ${computerSelection} beats ${playerSelection}!`;
    } else {
        playerWon = -1;
        return 'Golly Jee-Willikers! It\'s a tie!';
    }
}

// the game is 5 rounds

function game () {

    // need a way to record the winner and keep track of each player's score
    let playerScore = 0;
    let computerScore = 0;


    // loop for 5 rounds
    for (i = 0; i < 5; i++) {
        
        let computerSelection = computerPlay();
        let playerSelection = prompt("Enter rock, paper, or scissors.");

        playRound(playerSelection, computerSelection);

        // increment score for the winner
        switch (playerWon) {
            case 1:
                playerScore+= 1;
            case 0:
                computerScore+=1;
            case -1:
                break;
        }

    //output results
    console.log(`Computer chose ${computerSelection} and you chose ${playerSelection}. Your score is ${playerScore} and the computer's is ${computerScore}.`);
    console.log(playRound(playerSelection, computerSelection));

    }

}

game();
