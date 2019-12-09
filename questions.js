//Variable declarations
let highscore;
let score = 0; //Calc by time remaining. Answer quickly + correctly = higher score. 
let timeInterval; //Length of Q's array dets play length. 15secs/Q. Length of play=75secs.
let i = 0; //Question counter
let userAns = "";
let timeLeft = 75;
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

//Questions Array

const questions = [{
  title: "1. Commonly used data types DO NOT include: ",
  choices: ["strings", "booleans", "alerts", "numbers"],
  answer: "alerts"
},
{
  title: "2. The condition in an if / else statement is enclosed within ____.",
  choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
  answer: "parentheses"
},
{
  title: "3. How does one comment out code in JavaScript?",
  choices: ["/* /*", "<!---->", "//", "!//"],
  answer: "//"
},
{
  title: "4. What is the most specific equality comparison symbol?",
  choices: ["=", "===", "==", "!!="],
  answer: "==="
},
{
  title: "5. What is the difference between a for loop and a while loop?",
  choices: ["Skip question.", "I give up.", "For loops work as long as their condition is true - while loops only work if you break the for loop",
    "For loops run through a loop for a specific amount of times, whereas a while loop goes through a loop of code as long as the specific condition is true."
  ],
  answer: "For loops run through a loop for a specific amount of times, whereas a while loop goes through a loop of code as long as the specific condition is true."
},
];

//Hiding and Showing Buttons
function hideSub() { //Hide "Submit" button
document.getElementById("submit").style.display = "none";
}
function hideGoBack() { //Hide "Submit" button
document.getElementById("goback").style.display = "none";
}
function showGoBack() { //Hide "Submit" button
document.getElementById("goback").style.display = "block";
}
function hideAns() { //Hide choice buttons
document.getElementById("ans").style.display = "none";
document.getElementById("two").style.display = "none";
document.getElementById("three").style.display = "none";
document.getElementById("four").style.display = "none";
}
function showAns() { //Show choice buttons
document.getElementById("ans").style.display = "block";
document.getElementById("two").style.display = "block";
document.getElementById("three").style.display = "block";
document.getElementById("four").style.display = "block";
}
function hideWords() {
document.getElementById("initials").style.display = "none";
}
function showWords() {
document.getElementById("initials").style.display = "block";
}
function showSub() {
document.getElementById("submit").style.display = "block";
newPage.setAttribute("href", "newpage.html");
}


//Clickers for Submit
submitBtnEl.addEventListener("click", showSub);

//Clickers for Start
start.addEventListener("click", someQs);

//Checks for Buttons
ansBtn.addEventListener("click", function() {
  userAns = this.textContent; // Set user's answer to w/e answer=currently on the button. Need this for checks f(x).
  i++;
  displayQ();
  checks();
})

two.addEventListener("click", function() {
  userAns = this.textContent; 
  i++;
  displayQ();
  checks();
})

three.addEventListener("click", function() {
  userAns = this.textContent; 
  i++;
  displayQ();
  checks();
})

four.addEventListener("click", function() {
  userAns = this.textContent;
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
  let timeLeft = 75;
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
  wordsEl.textContent = currentQs.title;  //Title of what index we're on in questions array
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
    document.getElementById("hello").textContent = "Incorrect!";
    timeLeft -= 15; 
  } 
}



//Start someQs(), which is the function running the entire quiz;
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
}


