/* 
* File contains effects and non-game loop logic
*/

$(document).ready(function()  {

    $('#title').hide().slideDown(1250);
    $('#characters').hide().slideDown(1250);
    $('#clues').hide().slideDown(1250);

    // hide textboxes
    for (var i = 1; i <= 6; i++){
        $("#infoToggle-" + i).hide();
    }
});

// pass in id of textbox and reveal it if clicked
function toggleTextboxes(id) {
    $("#infoToggle-" + id).slideToggle("slow");
}

// code credited to stack overflow
// redirect users to index.html if redirect to non existent resource or page
async function resourceExists(url) {
  try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
  } catch (error) {
      return false;
  }
}

// Function to handle redirection
async function redirectToMainPage() {
  const currentPage = window.location.pathname;
  const mainPage = '/index.html';

  if (currentPage !== mainPage && !(await resourceExists(currentPage))) {
      window.location.replace(mainPage);
  }
}

redirectToMainPage();


