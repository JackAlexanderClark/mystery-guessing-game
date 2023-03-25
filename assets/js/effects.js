/* 
* File contains effects and non-game loop logic
*/

// hide textboxes
$(document).ready(function()  {
    for (var i = 1; i <= 6; i++){
        $("#infoToggle-" + i).hide();
    }
});

// pass in id of textbox and reveal it if clicked
function toggleTextboxes(id) {
    $("#infoToggle-" + id).slideToggle("slow");
}
