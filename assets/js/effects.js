// toggle individual buttons for unique info
$(document).ready(function(){
    $("#infoToggle-1").hide();
    $("#buttonToggle-1").click(function(){
      $("#infoToggle-1").slideToggle("slow");
    });
  });

$("#infoToggle-2").hide();
$("#buttonToggle-2").click(function(){
    $("#infoToggle-2").slideToggle("slow");
});

$("#infoToggle-3").hide();
$("#buttonToggle-3").click(function(){
    $("#infoToggle-3").slideToggle("slow");
});


// ???? enlarge clue inspect?

// // Get the img object using its Id
// img = document.getElementById("img1");
// // Function to increase image size
// function enlargeClue() {
// // Set image size to 1.5 times original
// img.style.transform = "scale(1.5)";
// // Animation effect
// img.style.transition = "transform 0.25s ease";

// img.style.opacity = "1";

// img.style.position ="relative";

// }
// // Function to reset image size
// function resetImg() {
// // Set image size to original
// img.style.transform = "scale(1)";
// img.style.transition = "transform 0.25s ease";
// }