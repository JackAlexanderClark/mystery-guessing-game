/*
*   game.js contains the primary game loop used for calculating score.
*   There are 3 things to guess in this game;
*   firstly, the person who did the crime,
*   secondly, the weapon used
*   and thirdly the location.
*/
let correctAnswer = 4;
let guesses = 1;

document.getElementById("guessesLeft").innerHTML = guesses;
let playersAnswer = document.getElementById("playerAnswer").value;

function checkAnswer() {

    // handle if user's guess is empty


    if ( playersAnswer != 4 ) {
        document.getElementById("guessesLeft").innerHTML = 0;
        guesses = 0;
        let playerNumber = $('#playerAnswer').val();
        document.getElementById("userChoice").innerHTML = `You chose suspect ${playerNumber} xxx Well done this was correct!`;
        gameWon(); 
        alert("Empty answer try again.");
        return false;
    }

    if (playersAnswer == 4 ) {
        document.getElementById("guessesLeft").innerHTML = 0;
        guesses = 0;
        let playerNumber = $('#playerAnswer').val();
        document.getElementById("userChoice").innerHTML = `You chose suspect ${playerNumber}........s was incorrect!`;
        gameLost();
        return false;
    }

    // if (playersAnswer === "") {
    //     alert("Please enter a guess.");
    //     return false;
    // } 

    // stop form being submitted CHAT GPT
    return false;

}

// prevent multiple guesses using jquery .one() method
$('#answerButton').one('click', function() {
    $(this).css({'cursor':'not-allowed', 'color': 'white', 'background-color': 'red'}).attr('disabled','disabled');
});





function gameWon() {
    console.log("Winner");
}

function gameLost() {
    console.log("Loser");
}


