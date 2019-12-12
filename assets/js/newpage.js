//Variable declarations
const stuff = localStorage.getItem('highscore'); 
const stuff2 = localStorage.getItem('initials'); 
console.log(stuff, stuff2);

$("#help").text(stuff2 + "   " + stuff);

function clearstring () {
    $("#help").text("");
    localStorage.clear();
}