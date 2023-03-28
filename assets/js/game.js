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

function createLinks() {

    document.getElementById("solution").innerHTML = `
        <a href="solution.html" style="color: red;">
          Click here for the solution breakdown and story conclusion.
        </a>
    `;

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
    } else if (count === 2) {
        hint.innerHTML = "Make sure to look carefully at all clues, evidence and read all pieces of information if you're stuck.";
    } else {
        hint.innerHTML = "";
    }

}

function addGuessToLeaderboard(guess) {

    let leaderboard = document.getElementById("leaderboard");
    let attempts = 0;

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

cleanCharacters(document.getElementById('buttonSubmit'));

function cleanCharacters(element) {
    element.onkeydown = function(event) {
        // only let number inputs
        if (event.key >= '1' && event.key <= '9') {
            console.log("working");
            return true;
        } else {
            console.log("not working");
            event.preventDefault();
            return false;
        }
    };
  }


function checkGuess() {

    let correctNumber = 4;      // character 4
    let guess = document.getElementById("guess-input").value;
    let result = document.getElementById("result");
    let explanation = document.getElementById("explanation");

    if (guess == " " || guess.trim() === '') {
        // input is empty, alert user
        alert('Empty answer please enter a number 1-9 corresponding to the characters.');
    }



    if (guess == correctNumber) {
        Guesses();
        disableSubmit();
        result.innerHTML = "Congratulations! You guessed the correct character and have solved the case!!!";
        explanation.innerHTML = "<strong>Suspect: </strong><em>Mark Henderson.</em>\n" + "<em>To solve it took you: </em>" + (count) + " <em>guess(es)</em>";
        createLinks();
        addGuessToLeaderboard(guess);
    } else {
        result.innerHTML = "Sorry, that's not the correct number. Please try again.";
        Guesses();
        addGuessToLeaderboard(guess);
    }

}


  
