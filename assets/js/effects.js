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


function getSubmission() {
    console.log("hello");
    getTime.textContent = "Yo wagwan";
}


// get time you submitted answer to display
// source --> https://web.dev/critical-rendering-path-adding-interactivity-with-javascript/ 
var span = document.getElementsByTagName('span')[0];
span.textContent = 'interactive';                                           // change DOM text content
span.style.display = 'inline';                                                  // change CSSOM property
                                                            // create a new element, style it, and append it to the DOM
var getTime = document.createElement('div');
getTime.textContent = 'Congratulations! You submitted your answer at: ' + new Date() + '.   Your guess was: ' + getSubmission();
getTime.style.color = 'red';
document.body.appendChild(getTime);


