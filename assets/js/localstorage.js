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

function setLocalStorage() {

    const key = inputKey.value;
    const value = inputValue.value;

    // set to local storage
    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }

}
// credit to:"https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript#:~:text=Use%20new%20Date()%20to,the%20current%20date%20and%20time.&text=This%20will%20give%20you%20today's,to%20whatever%20format%20you%20wish."
// try get date to append to session local information
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);

let sessionNumber = 0;

// loop through contents of localstorage
for (let i = 0; i < localStorage.length; i++ ) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    sessionNumber++;
    // template literal to populate html
    outputDiv.innerHTML += `${key}: ${value}<br> Date: ${today} Session: ${sessionNumber}`;
}


// let retrievedDump = localStorage.getItem("x");
// document.getElementById("dumpResult").innerHTML = retrievedDump;





module.exports = checkUserInput;