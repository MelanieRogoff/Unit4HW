//Variable declarations
let highscore;
let score; //Calculated by time remaining. Answer quickly + correctly = higher score. 
let timeInterval; //Length of Q's array dets play length. 15secs/Q. Length of play=75secs.
let i = 0;
let localStorage;
let hs = "View Highscores";
hs = 0; //@ Beg, option to View Highscores (top left) must be set to 0 
let timeAtTop = "Time";
timeAtTop = 0; //@Beg, option to view Time (top right) must be set to 0.

const timeEl = document.getElementById("time");
const timeEl2 = document.getElementById("time2"); //Header
const wordsEl = document.getElementById("words");
const mainEl = document.getElementById("main");
const hScoreEl = document.getElementById("hscore");
const btn = document.getElementById("startbtn");
const ansBtn = document.getElementById("ans");
timeEl.textContent = "Time";
hScoreEl.textContent = "View High Score";
//Next Question btn
const next = document.getElementById("nextQ");

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
    choices5: ["Skip question.", "I give up.", "For loops work as long as their condition is true - while loops only work if you break the for loop",
      "For loops run through a loop for a specific amount of times, whereas a while loop goes through a loop of code as long as the specific condition is true."],
    answer5: "For loops run through a loop for a specific amount of times, whereas a while loop goes through a loop of code as long as the specific condition is true."
  },
];

//Click Start Button Code
const start = document.getElementById("startbtn");
start.addEventListener("click", someQs);


//Hiding button, answers, showing answers, and showing buttons, respectively:
function hideBtn() {
  document.getElementById("nextQ").style.display="none";
}

function hidefinale() {
  document.getElementById("finale").style.display="none";
}
function hideAns() {
  document.getElementById("ans").style.display="none";
  document.getElementById("two").style.display="none";
  document.getElementById("three").style.display="none";
  document.getElementById("four").style.display="none";
}
function showAns() {
  document.getElementById("ans").style.display="block";
  document.getElementById("two").style.display="block";
  document.getElementById("three").style.display="block";
  document.getElementById("four").style.display="block";
}
function showBtn() {
  document.getElementById("nextQ").style.display="block";
}

function showfinale() {
  document.getElementById("finale").style.display="block";
  finale.textContent="Click to write your initials!";
  finale.addEventListener("click", initials);
}
hideBtn();
hideAns();
hidefinale();

//Start someQs();
function someQs() {
  showBtn();
  showAns();
  timer();
  firstQ();
    //Timer STOPS when ALL Q'S ANSWERED or TIMER REACHES 0
    //User gets 15 secs before next Q appears
    //When time runs out and/or all Q's=answered, show final score + ask user to enter initials
    //Saves user initials + score to a high scores view by using localStorage
  }
//End of someQs();


//Code F(x) for if answer=incorrect (subtract 15secs from timer)
//Code F(x) for when timer ends OR all answers incorrect

//Start timer();
function timer() {
  let timeLeft = 75;
  timeInterval = setInterval(function () {
    timeEl.textContent = "Time: " + timeLeft;
    timeLeft--;
    if (timeLeft < 0) { //Set to LESS THAN # you want included.
      clearInterval(timeInterval);
    }
  }, 1000); //Count down every 1 second
} 

//Start f(x) for 1st Q
function firstQ () {
  btn.remove();
  wordsEl.textContent = "";
  timeEl2.textContent = "";
  hScoreEl.textContent = "View High Score";
  let display = questions[i].title1;
  wordsEl.textContent = display;
  ansBtn.textContent= questions[i].choices1[0]; 
  two.textContent= questions[i].choices1[1]; 
  three.textContent= questions[i].choices1[2]; 
  four.textContent= questions[i].choices1[3]; 
  next.addEventListener("click", secQ);

  //if correct answer clicked, +1. Else, decrease by 15 secs once user hits Next Question.
}

function secQ() {
  wordsEl.textContent=questions[1].title2;
  ansBtn.textContent= questions[1].choices2[0]; 
  two.textContent= questions[1].choices2[1]; 
  three.textContent= questions[1].choices2[2]; 
  four.textContent= questions[1].choices2[3]
  next.addEventListener("click", thirdQ);
}

function thirdQ() {
  wordsEl.textContent=questions[2].title3;
  ansBtn.textContent= questions[2].choices3[0]; 
  two.textContent= questions[2].choices3[1]; 
  three.textContent= questions[2].choices3[2]; 
  four.textContent= questions[2].choices3[3]
  next.addEventListener("click", fourQ);
}

function fourQ() {
  wordsEl.textContent=questions[3].title4;
  ansBtn.textContent= questions[3].choices4[0]; 
  two.textContent= questions[3].choices4[1]; 
  three.textContent= questions[3].choices4[2]; 
  four.textContent= questions[3].choices4[3]
  next.addEventListener("click", fiveQ);
}

function fiveQ() {
  wordsEl.textContent=questions[4].title5;
  ansBtn.textContent= questions[4].choices5[0]; 
  two.textContent= questions[4].choices5[1]; 
  three.textContent= questions[4].choices5[2]; 
  four.textContent= questions[4].choices5[3]
  next.addEventListener("click", final);
}

function final() {
  wordsEl.textContent="You're done! Here is your score: " + score ;
  showfinale();
  hideBtn();
  hideAns();
}

function initials() {
  const hi = prompt("Write your initials below!");
   let localStorage = hi;
}