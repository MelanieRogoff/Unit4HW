//Variable declarations
const stuff = localStorage.getItem('highscore'); 
const stuff2 = localStorage.getItem('initials'); 


const hiScore = JSON.parse(stuff) || [];
const init = stuff2 || [] ;


$("#help").text(stuff2 + "   " + stuff);

  saveHighScore = e => {
    hiScore.push(stuff);
    hiScore.sort((a, b) => b.stuff - a.stuff);
    hiScore.splice(5);
    localStorage.setItem('highscore', JSON.stringify(hiScore));
  }

  moreInit = e => {
    init.push(stuff2);
    init.sort((a, b) => b.stuff2 - a.stuff2);
    init.splice(5);
    localStorage.setItem('initials', JSON.stringify(init));
  }

function clearstring () {
    $("#help").text("");
    localStorage.clear();
}

//Call the local storage items and sort them here - want high score @ top, then descending

