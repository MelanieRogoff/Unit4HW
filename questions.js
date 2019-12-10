//Questions Array

const questions = [{
  titles: "1. Commonly used data types DO NOT include: ",
  choices: ["strings", "booleans", "alerts", "numbers"],
  answer: "alerts"
},
{
  titles: "2. The condition in an if / else statement is enclosed within ____.",
  choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
  answer: "parentheses"
},
{
  titles: "3. How does one comment out code in JavaScript?",
  choices: ["/* /*", "<!---->", "//", "!//"],
  answer: "//"
},
{
  titles: "4. What is the most specific equality comparison symbol?",
  choices: ["=", "===", "==", "!!="],
  answer: "==="
},
{
  titles: "5. What is the difference between a for loop and a while loop?",
  choices: ["Skip question.", "I give up.", "For loops work as long as their condition is true - while loops only work if you break the for loop",
    "For loops run through a loop for a specific amount of times, whereas a while loop goes through a loop of code as long as the specific condition is true."
  ],
  answer: "For loops run through a loop for a specific amount of times, whereas a while loop goes through a loop of code as long as the specific condition is true."
},
];

//Variable declarations
let highscore;
let score = 0; //Calc by time remaining. Answer quickly + correctly = higher score. 
let timeInterval = questions.length * 15; //Length of Q's array dets play length. 15secs/Q. Length of play=75secs.
let i = 0; //Question counter
let timeLeft = 75;
let userAns = '';
let hs = 0; // "View Highscores";
let timeAtTop = 0; //"Time";
const timeEl = document.getElementById("time");
timeEl.textContent = "Time";
const timeEl2 = document.getElementById("time2"); //Header
const wordsEl = document.getElementById("words"); 
const mainEl = document.getElementById("main");
const hScoreEl = document.getElementById("hscore"); //High Score 
hScoreEl.textContent = "View High Score"; 
const btn = document.getElementById("startbtn"); // Start Btn
const ansBtn = document.getElementById("ans"); //First answer btn
const initialwords = document.getElementById("initials"); //Initials
const messageTxtEl = document.getElementById("messageTxt"); 
const submitBtnEl = document.getElementById("submit") // Submit button for final page
const start = document.getElementById("startbtn");
const goBackEl = document.getElementById("goback");

//Hiding and Showing Buttons
function hideSub() { //Hide "Submit" button
$("#submit").css('display', 'none');
//document.getElementById("submit").style.display = "none";
}
function hideGoBack() { //Hide "Submit" button
$("#goback").css('display', 'none');
}
function showGoBack() { //Hide "Submit" button
$("#goback").css('display', 'block');
}
function hideAns() { //Hide choice buttons
  $("#ans").css('display', 'none');
  $("#two").css('display', 'none');
  $("#three").css('display', 'none');
  $("#four").css('display', 'none');
}
function showAns() { //Show choice buttons
  $("#ans").css('display', 'block');
  $("#two").css('display', 'block');
  $("#three").css('display', 'block');
  $("#four").css('display', 'block');
}
function hideWords() {
  $("#initials").css('display', 'none');
}
function showWords() {
  $("#initials").css('display', 'block');
}
function showSub() {
  $("#submit").css('display', 'block');
}

//Clickers for Submit
submitBtnEl.addEventListener("click", showSub);

//Clickers for Start
start.addEventListener("click", someQs);

//Checks for Buttons
ansBtn.addEventListener("click", function() {
  i++;
  displayQ();
  checks();
})

two.addEventListener("click", function() {
  i++;
  displayQ();
  checks();
})

three.addEventListener("click", function() {
  i++;
  displayQ();
  checks();
})

four.addEventListener("click", function() {
  i++;
  displayQ();
  checks();
})

//Functions to hide buttons
hideAns();
hideWords()
hideSub();
hideGoBack();

//Timer
function timer() {  
  timeInterval = setInterval(function () {
    timeEl.textContent = "Time: " + timeLeft;
    timeLeft--;
    if (timeLeft < 0) { //Set to LESS THAN # you want included.
      clearInterval(timeInterval);
      hideAns();
      final();
      hello.textContent = "";
    }
  }, 1000); 
} 

//Start f(x) for 1st Q
function firstQ () {  
  btn.remove();
  wordsEl.textContent = "";
  timeEl2.textContent = "";
  hScoreEl.textContent = "View High Score";
  displayQ();
} 

//Display questions
function displayQ() {
  let currentQs = questions[i];
  wordsEl.textContent = currentQs.titles; 
  ansBtn.textContent = currentQs.choices[0]; //A 
  two.textContent = currentQs.choices[1]; //B 
  three.textContent = currentQs.choices[2]; //C 
  four.textContent = currentQs.choices[3]; //D  
}

//Check answers
function checks () {
  if (userAns === questions[i].answer) {
    document.getElementById("hello").textContent = "Correct!";
    score++;
    console.log(score);
  } else { 
    timeLeft -= 15; 
    console.log(timeLeft);
    document.getElementById("hello").textContent = "Incorrect!";
  } 
}

//Start someQs(), which runs the entire quiz;
function someQs() {
  showAns();
  timer();
  firstQ();
  }

//Last page 
function final() {
  wordsEl.textContent="You're done! Here is your score: " + score;
  hideAns();
  showWords();
  showSub();
  function lastSub () {
    submitBtnEl.click(window.location.assign("newpage.html"));
  }
}