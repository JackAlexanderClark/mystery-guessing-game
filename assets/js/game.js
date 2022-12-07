/*
*   game.js contains the primary game loop used for calculating score.
*   There are 3 things to guess in this game;
*   firstly, the person who did the crime,
*   secondly, the weapon used
*   and thirdly the location.
*/
// create array with answers for the 3 elements of the game; person, weapon and location
// let suspect1;
// let knife;
// let school;

let correctAnswer = 4;

let guesses;

guesses = 2;
document.getElementById("guessesLeft").innerHTML = guesses;

function checkAnswer() {

    let playersAnswer = document.getElementById("playerAnswer").value;

    if ( playersAnswer == 4 ) {
        document.getElementById("guessesLeft").innerHTML = 0;
        console.log("game WON!");
        gameWon();
    } else if ( (playersAnswer != correctAnswer) && ( guesses == 0 ) ) {
        gameLost();
        console.log("game LOST!");
    } else if (playersAnswer.length != correctAnswer ) {    
        guesses = guesses - 1;
    } else if (playersAnswer.length == null ) {
        alert("Empty answer try again.");
    } else {
        console.log("Error");
    }

    return guesses;
};

function gameWon() {
    console.log("Winer");
}

function gameLost() {
    console.log("Loser");
}


