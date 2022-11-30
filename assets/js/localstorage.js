// Store users name and age input 
// use method getItem to retrieve data from 
//document.getElementById('buttonSubmit').disabled = true;

function checkUserInput() {

    var name = document.getElementById("input").value;
    var cansubmit = (name.length >= 4);
    document.getElementById("buttonSubmit").disabled = !cansubmit;

    if (cansubmit) {
        $("#buttonSubmit").removeClass("removeButtonColour").addClass("addButtonColour");    // change button colour for visual confirmation
    }

}
