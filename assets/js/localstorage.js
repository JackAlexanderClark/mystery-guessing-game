// save a username to local storage

const usernameInput = document.getElementById('username');
const saveButton = document.getElementById('save-btn');
const displayDiv = document.getElementById('display-username');

// Check if username is already in local storage
if (localStorage.getItem('username')) {
  displayDiv.textContent = `Username: ${localStorage.getItem('username')}`;
}

saveButton.addEventListener('click', () => {
  // Get value from input and store in local storage
  const username = usernameInput.value;
  localStorage.setItem('username', username);

  // Display username in div
  displayDiv.textContent = `Username: ${username}`;
});


// check if the browser supports local storage before using it
if(typeof(Storage) !== "undefined") {
    playerUsername = prompt("Please enter your username: ");
    localStorage.setItem("playerUsername", playerUsername);
  }
  
  // fix to allow username to work with other local storage code
  if (!playerUsername) {
    playerUsername = prompt("Please enter your username:");
    localStorage.setItem("playerUsername", playerUsername);
  }