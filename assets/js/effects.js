/* 
* File contains effects and non-game loop logic
*/

// hide textbox 
$(document).ready(function()  {
    console.log("ready");
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
