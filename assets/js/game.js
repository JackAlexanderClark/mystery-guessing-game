let count = 0;
const display = document.getElementById("display");
const storageDisplay = document.getElementById("storageDisplay");

function Guesses() {
  count++;
  display.innerHTML = "Guesses:&nbsp;" + count;
  localStorage.setItem("count", count);
  return count;
}

let correctNumber = 4;      // character 4

function checkGuess(correctNumber) {
  let guess = document.getElementById("guess-input").value;
  let result = document.getElementById("result");
  let explanation = document.getElementById("explanation");
  if (guess == correctNumber) {
    result.innerHTML = "Congratulations! You guessed the correct character and have solved the case!!!";
    // maybe make an interactive button that will appear when you are correct to then click for an explanation.
    explanation.innerHTML = "<strong>Explanation: </strong><em>The reason for Mark Henderson was the unpaid loan.</em>\n" + "<em>To solve it took you: </em>" + (count + 1) + " <em>guess(es)</em>";
    Guesses();
    return true;
  } else {
    result.innerHTML = "Sorry, that's not the correct number. Please try again.";
    Guesses();
    return false;
  }
}

module.exports = checkGuess;