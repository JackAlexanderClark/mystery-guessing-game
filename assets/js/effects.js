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

/* Code Source: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp */
// When the user scrolls the page, execute myFunction
window.addEventListener('load', function() {
  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  // Attach the myFunction() function to the window's scroll event
  window.addEventListener('scroll', myFunction);
});

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


