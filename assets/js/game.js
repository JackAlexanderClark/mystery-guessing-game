

// how many guesses it took to get it correct
let Counter
if (game == "won") {

}

// if game is lost, guesses++ 
gameLost();

// if game is won, ignore

// if guesses = 5,
if (guesses = 5) {
  GameOver();
}



let playerNumber = $('#playerAnswer').val();
    function checkAnswer() {
        const userGuess = Number(guessField.value);
        if (guessCount === 1) {
          guesses.textContent = 'Previous guesses: ';
        }
        guesses.textContent += `${userGuess} `;
      
        if (userGuess === playerNumber) {
          lastResult.textContent = 'Congratulations! You got it right!';
          let win = "congratulations";
          localstorage.setItem();                                     // set win to local storage
          lastResult.style.backgroundColor = 'green';
          lowOrHi.textContent = '';
          setGameOver();
        } else if (guessCount === 10) {
          lastResult.textContent = '!!!GAME OVER!!!';
          lowOrHi.textContent = '';
          setGameOver();
        } else {
          lastResult.textContent = 'Wrong!';
          lastResult.style.backgroundColor = 'red';
          if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
          } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
          }
        }
      
        guessCount++;
        guessField.value = '';
        guessField.focus();
      }
      // EVERYTHING CAN BE SENT TO LOCAL STORAGE AS STRING OR OBJECT
      // SET GUESSES AND LIVES TO LOCAL STORAGE



    // if (playersAnswer === "") {
    //     alert("Please enter a guess.");
    //     return false;
    // } 

    // stop form being submitted CHAT GPT
//     return false;

// }

// // prevent multiple guesses using jquery .one() method
$('#answerButton').one('click', function() {
    $(this).css({'cursor':'not-allowed', 'color': 'white', 'background-color': 'red'}).attr('disabled','disabled');
});





function gameWon() {
    console.log("Winner");
}

function gameLost() {
    console.log("Loser");
}


