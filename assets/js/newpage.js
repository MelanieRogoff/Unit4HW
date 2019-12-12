//Variable declarations
const stuff = JSON.parse(localStorage.getItem('highscore'));  //Parsing so that it's not a string anymore

for (let i = 0; i < stuff.length; i++) { //Using stuff array now 
    const something = stuff[i][1] + " " + stuff[i][0];
    const p = document.createElement("p");
    p.textContent = something;
    $("#help").append(p);
}

function clearstring () {
  $("#help").text("");
   localStorage.clear();
 }


