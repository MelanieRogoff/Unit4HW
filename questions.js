let highscore = [];
let localStorage; //This is where user's final score + initials must be stored

let score; //This is calculated by time remaining. Answer quickly + correctly results in higher score. Answer incorrectly results in time penalty (15secs subtracted from time remaining).

//Length of questions array determines play length. 15 secs per Q. Length of play = 75 secs.

let timeInterval;

let i = 0;

//Grab from HTML
const timeEl = document.getElementById("time");
const wordsEl = document.getElementById("words");
const mainEl = document.getElementById("main");

const questions = [
  { //FIRST QUESTION
    title: "1. Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  { //SECOND QUESTION
    title: "2. The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  { //THIRD QUESTION
    title: "3. How does one comment out code in JavaScript?",
    choices: ["/* */", "<!---->", "//", "!//"],
    answer: "//"
  },
  { //FOURTH QUESTION
    title: "4. What is the most specific equality comparison symbol?",
    choices: ["=", "===", "==", "!=="],
    answer: "==="
  },
  { //FIFTH QUESTION
    title: "5. What is the difference between a for loop and a while loop?",
    choices: ["For loops are used when you're looking FOR something. While loops are nonexistent.",
      "For loops run through a loop for a specific amount of time. While loops work as long as the condition is true.",
      "For loops only work if a specific condition is true, whereas a while loop only goes through a loop for a specific amount of times.",
      "There is no difference."],
    answer: "For loops allow one to run through a loop for a specific amount of times, whereas a while loop goes through a loop of code as long as the specific condition is true."
  },
];


//Coding the click for the Start Button
const start = document.getElementById("startbtn");
start.addEventListener("click", someQs);

//At landing page, navigation option to View Highscores (seen at top left) and Time (top right) must both be set to 0.

//Initializing the questions upon "Let's Play!" being clicked as well as the timer
function someQs() {
  for (var i = 0; i < questions.length; i++) {
    timer();

    //When "Let's Play!" button is clicked, series of questions are displayed and timer starts (initialize timer w/a value and have it immediately begin countdown)
    //If a question is answered incorrectly, code the process of subtracting 15 mins from the timer
    //Code Timer STOPS when ALL Q'S ANSWERED or TIMER REACHES 0
    //User gets 15 seconds before the next question appears
    //Function that says what to do if answer is incorrect goes here
    //Function that says what to do when timer ends or all answers incorrect goes here
    //Put an audio file that has my voice saying "BZZZT"! that is triggered upon clicking the wrong answer 
    //When time runs out and/or all Q's=answered, present user w/their final score and ask them to enter their initials
    //Put something here that saves user's initials and score to a high scores view by using variable localStorage
  }

}
function timer() {
  //Declaring the variable w/in function to 75 secs (15 per questions)
  let timeLeft = 75;
  //Set up timeInterval function which shows many secs remain
  wordsEl.textContent = "";
  wordsEl.textContent = questions;
  timeInterval = setInterval(function () {
    timeEl.textContent = "Time: " + timeLeft;
    //Subtract timeLeft by 1sec
    timeLeft--;
    if (timeLeft === 0) {
      clearInterval(timeInterval);
    }
    //Set the function to count down every 1 second
  }, 1000);
}

//Set up questions as objects with an array
