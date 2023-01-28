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



function getSubmission() {
    console.log("hello");
    getTime.textContent = "Yo wagwan";
}

















var seconds = 200;
function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = "Buzz Buzz";
    } else {
        seconds--;
    }
}
var countdownTimer = setInterval('secondPassed()', 1000);


// get time you submitted answer to display
// source --> https://web.dev/critical-rendering-path-adding-interactivity-with-javascript/ 
var span = document.getElementsByTagName('span')[0];
span.textContent = 'ooo';                                           // change DOM text content
span.style.display = 'inline';                                                  // change CSSOM property
                                                            // create a new element, style it, and append it to the DOM
var getTime = document.createElement('div');
getTime.textContent = 'Congratulations! You submitted your answer at: ' + new Date() + '.   Your guess was: ' + getSubmission();
getTime.style.color = 'red';
document.body.appendChild(getTime);


