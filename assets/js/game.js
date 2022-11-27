/*
*   game.js contains the primary game loop used for calculating score.
*   There are 3 things to guess in this game;
*   firstly, the person who did the crime,
*   secondly, the weapon used
*   and thirdly the location.
*/
// create array with answers for the 3 elements of the game; person, weapon and location
let correctAnswer = [suspect1, knife, school];
let playersAnswer = [];

// Create a toggle to hide the suspect cards until they have started the game countdown timer
function hideGameSuspects() {
    var x = document.getElementById("hidegame");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

// compare array of correct answer to player input answer
function compareAnswers(correctAnswer, playersAnswer) {
    if ( playersAnswer === correctAnswer )
        return true;
    if ( playersAnswer == null )    // incase of incorrect data
        return false;
    if ( playersAnswer.length !== correctAnswer.length )
        return false;
    
    // check elements
    for (var i = 0; i < correctAnswer.length; ++i) {
            if (correctAnswer[i] !== playersAnswer[i]) 
            return false;
        }
        return true;
}

function gameLoop() {
    compareAnswers();
}

