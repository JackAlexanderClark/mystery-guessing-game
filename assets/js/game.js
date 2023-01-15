/*
*   game.js contains the primary game loop used for calculating score.
*   There are 3 things to guess in this game;
*   firstly, the person who did the crime,
*   secondly, the weapon used
*   and thirdly the location.
// */
// let correctAnswer = 4;
// let guesses = 1;

// document.getElementById("guessesLeft").innerHTML = guesses;
// let playersAnswer = document.getElementById("playerAnswer").value;

// function checkAnswer() {

//     // handle if user's guess is empty
//     let playerNumber = $('#playerAnswer').val();
//     if ( playerNumber == 4 ) {
//         document.getElementById("guessesLeft").innerHTML = 0;
//         guesses = 0;
//         let playerNumber = $('#playerAnswer').val();
//         document.getElementById("userChoice").innerHTML = `You chose suspect ${playerNumber} OH NO!!! this was <strong>incorrect</strong>!`;
//         gameWon(); 
//         return false;
//     } else if (playersAnswer != 4 ) {
//         document.getElementById("guessesLeft").innerHTML = 0;
//         guesses = 0;
//         let playerNumber = $('#playerAnswer').val();
//         document.getElementById("userChoice").innerHTML = `You chose suspect ${playerNumber}........this was <strong>correct</strong>!`;
//         gameLost();
//         return false;
//     } else {
//         console.log("asdasd");
//         return false;
//     }
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


