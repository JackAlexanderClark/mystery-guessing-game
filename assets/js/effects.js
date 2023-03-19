/* 
* File contains effects and non-game loop logic
*/

// hide textbox 
$(document).ready(function()  {
    $("#infoToggle-1").hide();
    $("#infoToggle-2").hide();
    $("#infoToggle-3").hide();
    $("#infoToggle-4").hide();
    $("#infoToggle-5").hide();
    $("#infoToggle-6").hide();
})

// pass in id of textbox and reveal it if clicked
function toggleTextboxes(id) {

    $("#buttonToggle-${id}").click(function(){
        $("#infoToggle-${id}").slideToggle("slow");
    });
}

function toggleStory() {
  const wrapper = document.getElementById("story-wrapper");
  wrapper.style.display = (wrapper.style.display === "none") ? "block" : "none";
}
