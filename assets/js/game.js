/* 
* File contains the game loop and logic for the guessing game
*/

// disable button if guesses equals 3 or game won

function disableSubmit() {
  let StopSubmit = document.getElementById("submitButton");
  StopSubmit.disabled = true;
}

function createSolutionLink() {
  document.getElementById("solution").innerHTML = `
    <a href="solution.html" style="color: red;">
      Click here for the solution breakdown and story conclusion.
    </a>
  `;
}

let count = 0;
const display = document.getElementById("display");
const storageDisplay = document.getElementById("storageDisplay");

function Guesses() {
  count++;
  display.innerHTML = "Guesses:&nbsp;" + count;
  localStorage.setItem("count", count);
}

let leaderboard = document.getElementById("leaderboard");
let attempts = 0;

// create a html table
function addGuessToLeaderboard(guess) {

    attempts++;
    
    let row = leaderboard.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    let playerGuess = document.getElementById("guess-input").value;
    
    let correct = "";
    if (playerGuess == 4) {
      correct = "Correct";
    } else {
      correct = "Incorrect";
    }

    cell1.innerHTML = "Guess Number: " + attempts + "&nbsp;";
    cell2.innerHTML = "Your chosen suspect was: " + guess + "&nbsp;";
    cell3.innerHTML = "This was " + correct + "&nbsp;";
    cell4.innerHTML = playerUsername;
}

function checkGuess() {

  var correctNumber = 4;      // character 4
  let guess = document.getElementById("guess-input").value;
  let result = document.getElementById("result");
  let explanation = document.getElementById("explanation");

        if (guess == " " || guess.trim() === '') {
          // input is empty or null, handle the case here
          alert('guess is empty or null');
          console.log("1");
        } else {
          // input is not empty, handle it here
          alert('guess is not empty: ' + guess);
          console.log("2");
        }

  if (guess == correctNumber) {
    disableSubmit();
    result.innerHTML = "Congratulations! You guessed the correct character and have solved the case!!!";
    explanation.innerHTML = "<strong>Suspect: </strong><em>Mark Henderson</em>\n" + "<em>To solve it took you: </em>" + (count + 1) + " <em>guess(es)</em>";
    createSolutionLink();
    addGuessToLeaderboard(guess);
  } else {
    result.innerHTML = "Sorry, that's not the correct number. Please try again.";
    Guesses();
    addGuessToLeaderboard(guess);
  }

  let hint = document.getElementById("hint");
  let gameOverDiv = document.getElementById("gameOver");

  if (count === 3) {
    console.log("game over");
    gameOverDiv.innerHTML = "You have used up 3 guesses and have lost the game as you have not correctly identified the suspect";
    disableSubmit();
  } else if (count === 2) {
    hint.innerHTML = "Make sure to look carefully at all clues, evidence and read all pieces of information if you're stuck";
  } else {
    hint.innerHTML = "";
  }

return;
}

// need to check if name is stored in local storage session
function getName() {
  var n, q = 'Enter name';
  if (!window.sessionStorage) {  // if sessionStorage not supported
      return window.prompt(q); // perform other action
  }
  n = window.sessionStorage.getItem('name');
  if (!n) {
      n = window.prompt(q);
      window.sessionStorage.setItem('name', n);
  }
  return n;
}