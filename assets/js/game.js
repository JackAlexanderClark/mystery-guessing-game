/*
*   game.js contains the primary game loop used for calculating score.
*   There are 3 things to guess in this game;
*   firstly, the person who did the crime,
*   secondly, the weapon used
*   and thirdly the location.
*/
// create array with answers for the 3 elements of the game; person, weapon and location
let suspect1;
let knife;
let school;

let correctAnswer = [suspect1, knife, school];
let playersAnswer = [];

var gamestart = 0;

// Create a toggle to hide the suspect cards until they have started the game countdown timer
function hideGameSuspects() {

    var revealSuspects = document.getElementById("hidegame");

    if (revealSuspects.style.display === "none") {

        revealSuspects.style.display = "block";

    } else {

        revealSuspects.style.display = "none";

    }

    gamestart = 1;
    
  }




// compare array of correct answer to player input answer
function compareAnswers(correctAnswer, playersAnswer) {
    if ( playersAnswer === correctAnswer )
        return true;
    if ( playersAnswer == null )    // incase of incorrect data
        return false;
    if ( playersAnswer.length !== correctAnswer.length )
        return false;

    for (var i = 0; i < correctAnswer.length; ++i) {        // check elements
            if (correctAnswer[i] !== playersAnswer[i]) 
            return false;
        }
        return true;
}

function gameLoop(gamestart) {
    if ( gamestart == 1 ) {
        console.log("Testing that game starts when button is pressed");
    } else if ( gamestart == 0 ) {
        console.log("Game has not yet begun");
    } else {
        console.log("GAME LKASHFKJASHKJS");
    }

    compareAnswers();
}

