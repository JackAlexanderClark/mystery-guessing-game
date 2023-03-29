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

/* Code Source: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp */
function toggleNavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
