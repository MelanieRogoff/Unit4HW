//Variable declarations

let highscore;
let score; //Calculated by time remaining. Answer quickly + correctly results in higher score. 
let timeInterval; //Length of Q's array dets play length. 15 secs per Q. Length of play= 75secs.
let i = 0;
let hs = "View Highscores";//@ Beg, navigation option to View Highscores (top left) must be set to 0 
hs = 0;
let timeAtTop = "Time"; //@Beg, navigation option to view Time (top right) must be set to 0.
timeAtTop = 0;


//Grab from HTML
const timeEl = document.getElementById("time");
const timeEl2 = document.getElementById("time2"); //Header
const wordsEl = document.getElementById("words");
const mainEl = document.getElementById("main");
const hScoreEl = document.getElementById("hscore");
const btn = document.getElementById("startbtn");
timeEl.textContent = "Time";
hScoreEl.textContent = "View High Score";


//Questions array
const questions = [
  { title1: "1. Commonly used data types DO NOT include: ",
    choices1: ["strings", "booleans", "alerts", "numbers"],
    answer1: "alerts"
  },
  { title2: "2. The condition in an if / else statement is enclosed within ____.",
    choices2: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer2: "parentheses"
  },
  { title3: "3. How does one comment out code in JavaScript?",
    choices3: ["/* /*", "<!---->", "//", "!//"],
    answer3: "//"
  },
  { title4: "4. What is the most specific equality comparison symbol?",
    choices4: ["=", "===", "==", "!!="],
    answer4: "==="
  },
  { title5: "5. What is the difference between a for loop and a while loop?",
    choices5: ["For loops are used when you're looking FOR something. While loops are nonexistent.",
      "For loops run through a loop for a specific amount of time. While loops work as long as the condition is true.",
      "For loops only work if a specific condition is true, whereas a while loop only goes through a loop for a specific amount of times.",
      "There is no difference."],
    answer5: "For loops allow one to run through a loop for a specific amount of times, whereas a while loop goes through a loop of code as long as the specific condition is true."
  },
];

//Coding click for Start Button
const start = document.getElementById("startbtn");
start.addEventListener("click", someQs);


//Start function someQs();
function someQs() {
  
    timer();
    
    //Have to be able to CLICK ON THE ANSWERS 
    //Timer STOPS when ALL Q'S ANSWERED or TIMER REACHES 0
    //User gets 15 secs before next Q appears
    //Call F(x) that says what to do if answer is incorrect 
    //Call F(x) that says what to do when timer ends OR all answers incorrect
    //When time runs out and/or all Q's=answered, show final score + ask user to enter initials
    //Saves user initials + score to a high scores view by using localStorage
  }
//End of function someQs();




//Code F(x) for if answer=incorrect (subtract 15secs from timer)




//Code F(x) for when timer ends OR all answers incorrect




//Start of timer();
function timer() {
   //Remove "Let's Play" button when clicked
  startbtn.remove();
  let timeLeft = 75;
  wordsEl.textContent = "";
  timeEl2.textContent = "";
  hScoreEl.textContent = "View High Score";
  wordsEl.textContent = display;

  //Timer component 
  timeInterval = setInterval(function () {
    timeEl.textContent = "Time: " + timeLeft;
    timeLeft--;
    //Set it to LESS THAN # you want included. Want 0 counted, so set it to LESS THAN 0.
    if (timeLeft < 0) {
      clearInterval(timeInterval);
    }
    //Count down every 1 second
  }, 1000);
}
//End of function timer();



//Displaying Q's -- this=referenced in timer() f(x) & called w/in someQs().
const display = Object.values(questions[i]);