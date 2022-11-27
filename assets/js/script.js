/*
*   script.js contains scripting for effects and interactions outside of the game loop
*/














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

if (sec == 0) {
  alert("HEY YOU HAVE RUN OUT OF TIME LMAO");
}