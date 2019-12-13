//Variable declarations
const stuff = JSON.parse(localStorage.getItem('highscore'));  //Parsing so that it's not a string anymore
stuff.sort((a,b)=>b[0]-a[0]);
for (let i = 0; i < stuff.length; i++) { //Using stuff array now 
    const something = stuff[i][1] + " " + stuff[i][0]; //Adding both initials and scores into a new variable
    const p = document.createElement("p"); //Creating a new element
    p.textContent = something; //Setting that new element to the adding of both initials and scores, AKA something
    $("#help").append(p); // Appending the textContent from p to the #help ID
}

function clearstring () {
  $("#help").text("");
   localStorage.clear();
 }


