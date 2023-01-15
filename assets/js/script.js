// tippy js module tooltip 
tippy('#buttonSubmit', {
    content: "Have you chosen a correct username and password?",
});

// practice tippy js - https://atomiks.github.io/tippyjs/
tippy('#myButton', {
  content: "I'm a Tippy tooltip!",
});



// countdown
// source: https://codepen.io/ishanbakshi/pen/pgzNMv
document.getElementById('timer').innerHTML =
  01 + ":" + 11;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 100);
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

// change class colour depending on time left - traffic light system
// need to fix
if ( sec < 30 ) {
  $("#timer").addClass("red-countdown");
} else if ( sec == 30 ) {
  $("#timer").removeClass("red-countdown").addClass("yellow-countdown");
} else {
  $("#timer").removeClass("yellow-countdown").addClass("green-countdown");
}