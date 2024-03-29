/* 
* File contains the game loop and logic for the guessing game
*/

// disable button if guesses equals 3 or game won
$(document).ready(function()  {
    $('#failed-tag').hide();
});

var count = 0;

function disableSubmit() {
    let StopSubmit = document.getElementById("submitButton");
    StopSubmit.disabled = true;
}

function createWinModal() {
    
    var winModal = new bootstrap.Modal(document.getElementById('winModal'));
    winModal.show();

}

function createButton() {

    document.getElementById("restart").innerHTML = "<br><button class='btn btn-outline-secondary' onclick='Restart();'>Want to try again?</button>";

}

function Restart() {

    location.reload();

}

function Guesses() {

    const display = document.getElementById("display");
    let hint = document.getElementById("hint");
    let gameOverDiv = document.getElementById("gameOver");

    count++;
    display.innerHTML = "Guesses Used:&nbsp;" + count;

    if (count === 3) {
        gameOverDiv.innerHTML = "You have used up 3 guesses and have lost the game as you have not correctly identified the suspect.";
        disableSubmit();
        $('#failed-tag').show();
        createButton();
    } else if (count === 2) {
        hint.innerHTML = "Make sure to look carefully at all clues, evidence and read all pieces of information if you're stuck.";
    } else {
        hint.innerHTML = "";
    }

}

var attempts = 0;

function addGuessToLeaderboard(guess) {

    let leaderboard = document.getElementById("leaderboard");

    attempts++;
    
    // create a html table
    let row = leaderboard.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    let playerGuess = document.getElementById("guess-input").value;
    
    let correct = (playerGuess == 4) ? "Correct" : "Incorrect";

    cell1.innerHTML = "Guess Number: " + attempts + "&nbsp;";
    cell2.innerHTML = "Your chosen suspect was: " + guess + "&nbsp;";
    cell3.innerHTML = "This was " + correct + "&nbsp;";
}

function checkGuess() {

    let correctNumber = 4;      // character 4
    let guess = document.getElementById("guess-input").value;
    let result = document.getElementById("result");
    let explanation = document.getElementById("explanation");

    if (guess == " " || guess.trim() === '') {
        // input is empty, alert user
        alert('Empty answer please enter a number 1-9 corresponding to the characters.');
        return false;
    }

    if (guess == correctNumber) {
        Guesses();
        disableSubmit();
        result.innerHTML = "Congratulations! You guessed the correct character and have solved the case!!!";
        explanation.innerHTML = "<strong>Suspect: </strong><em>Mark Henderson.</em>\n" + "<em>To solve it took you: </em>" + (count) + " <em>guess(es)</em>";
        createWinModal();
        createButton();
        addGuessToLeaderboard(guess);
    } else {
        result.innerHTML = "Sorry, that's not the correct number. Please try again.";
        Guesses();
        addGuessToLeaderboard(guess);
    }

}


  
