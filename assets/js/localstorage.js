// Store users name and age input 
// use method getItem to retrieve data from 
//document.getElementById('buttonSubmit').disabled = true;

function checkUserInput() {
    var username = document.getElementById("inputkey").value;
    var password = document.getElementById("inputvalue").value;
    var cansubmit = ((username.length >= 4) && (password.length >=4));

    document.getElementById("buttonSubmit").disabled = !cansubmit;

    if (cansubmit) {
       $("#buttonSubmit").removeClass("removeButtonColour").addClass("addButtonColour");    // change button colour for visual confirmation
    }
};


// capture user input to localstorage
//buttonSubmit.onclick = function() {

const inputKey = document.getElementById("inputkey");
const inputValue = document.getElementById("inputvalue");
const inputButton = document.getElementById("buttonSubmit");
const outputDiv = document.getElementById("isOutput");

inputButton.onclick = function() {

    const key = inputKey.value;
    const value = inputValue.value;

    // set to local storage
    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }

};

// loop through contents of localstorage
for (let i = 0; i < localStorage.length; i++ ) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    // template literal to populate html
    outputDiv.innerHTML += `${key}: ${value}<br>`;

}

// enter password to submit your answer
function checkPassword() {

}

// take name from localstorage to display in winning message if game won
function getUsername() {

    var getName = localStorage.getItem(key, value);
    gameWonDisplayUsername(getName);

}

// if user wants to play again, clear cache
function resetLocalStorage() {

    localStorage.clear(key);

}




