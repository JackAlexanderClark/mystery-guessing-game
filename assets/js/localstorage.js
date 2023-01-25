// Store users name and age input 

function checkUserInput() {
    var username = document.getElementById("inputkey").value;                  
    var password = document.getElementById("inputvalue").value;

    username = username.toLowerCase();
    username = username.replace(/ /g, '');
    username = username.trim();
    password = password.toLowerCase();
    password = password.replace(/ /g, '');    
    password = password.trim();

    console.log(password, username);

    var cansubmit = ((username.length >= 4) && (password.length >=4));

    document.getElementById("buttonSubmit").disabled = !cansubmit;

    if (cansubmit) {
       $("#buttonSubmit").removeClass("removeButtonColour").addClass("addButtonColour");    // change button colour for visual confirmation
    }
}


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


// let retrievedDump = localStorage.getItem("x");
// document.getElementById("dumpResult").innerHTML = retrievedDump;



// enter password to submit your answer
function checkPassword() {
    console.log("test");
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




