import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import confetti from 'https://cdn.skypack.dev/pin/canvas-confetti@v1.6.0-t438JJTXIbBReqvLtDua/mode=imports/optimized/canvas-confetti.js';


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

$("#infoToggle-4").hide();
$("#buttonToggle-4").click(function(){
    $("#infoToggle-4").slideToggle("slow");
});

$("#infoToggle-5").hide();
$("#buttonToggle-5").click(function(){
    $("#infoToggle-5").slideToggle("slow");
});

$("#infoToggle-6").hide();
$("#buttonToggle-6").click(function(){
    $("#infoToggle-6").slideToggle("slow");
});

// confetti game won effect
function Party() {
    confetti();
    console.log("error");
}

document.getElementById('confetti').addEventListener('click', Party());
