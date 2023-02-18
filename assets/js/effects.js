/* 
* File contains effects and non-game loop logic
*/

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

// load ajax text file question reponse
// --- code credit: https://www.w3schools.com/js/js_ajax_intro.asp
function loadWitnessesAjax() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("ajaxResponse").innerHTML = this.responseText;
        }
    xhttp.open("GET", "assets/text_files/ajax_jackie_witness.txt", true);
    xhttp.send();
    }

    function loadWitnessesAjax2() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("ajaxResponse2").innerHTML = this.responseText;
        }
    xhttp.open("GET", "assets/text_files/ajax_jackie_witness2.txt", true);
    xhttp.send();
    }

    function loadWitnessesAjax3() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("ajaxResponse3").innerHTML = this.responseText;
        }
    xhttp.open("GET", "assets/text_files/ajax_jackie_witness3.txt", true);
    xhttp.send();
    }

    function loadWitnessesAjax4() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("ajaxResponse4").innerHTML = this.responseText;
        }
    xhttp.open("GET", "assets/text_files/ajax_jackie_witness4.txt", true);
    xhttp.send();
    }
    
    function loadWitnessesAjax5() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("ajaxResponse5").innerHTML = this.responseText;
        }
    xhttp.open("GET", "assets/text_files/ajax_jackie_witness5.txt", true);
    xhttp.send();
    }
