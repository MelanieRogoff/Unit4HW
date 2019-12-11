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
  titles: "5. What is the difference between for loop and while loops?",
  choices: ["Skip question.", "I give up.", "For loops work if their condition is true. While loops work conversely.",
    "For loops run for a specific amount of time. While loops work as long as the specific condition is true."
  ],
  answer: "For loops run for a specific amount of time. While loops work as long as the specific condition is true."
},
];

//Variable declarations
let highscore;
let score = 0; //Calc by time remaining. Answer quickly + correctly = higher score. 
let timeInterval = questions.length * 15; //Length of Q's array dets play length. 15secs/Q. Length of play=75secs.
console.log(timeInterval);
let i = 0; //Question counter
let timeLeft = 75;
let userAns = '';
let timeAtTop = 0; //"Time";
const timeEl = document.getElementById("time");
timeEl.textContent = "Time";
const timeEl2 = document.getElementById("time2"); //Header
const wordsEl = document.getElementById("words"); 
const mainEl = document.getElementById("main");
const hScoreEl = document.getElementById("hscore"); //High Score 
hScoreEl.textContent = "View High Score"; 
let hs = 0; // "View Highscores";
const btn = document.getElementById("startbtn"); // Start Btn
const ansBtn = document.getElementById("ans"); //First answer btn
const twoBtn = document.getElementById("two"); //Second answer btn
const threeBtn = document.getElementById("three"); //Third answer btn
const fourBtn = document.getElementById("four"); //Fourth answer btn
const initialwords = document.getElementById("initials"); //Initials
const messageTxtEl = document.getElementById("messageTxt"); 
const submitBtnEl = document.getElementById("submit") // Submit button for final page
const start = document.getElementById("startbtn");
const goBackEl = document.getElementById("goback");
const ohHello = document.getElementById("hello");


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

//Clickers for Start
start.addEventListener('click', someQs);

//Checks for Buttons
ansBtn.addEventListener('click', function() {
  checks(ansBtn.textContent); //Put check first, because we need to check what to compare, THEN i++ to change, THEN display to show next question.
  i++;
  displayQ();
})

twoBtn.addEventListener('click', function() {
  console.log(twoBtn.textContent);
  checks(twoBtn.textContent);
  i++;
  displayQ();
})

threeBtn.addEventListener('click', function() {
  checks(threeBtn.textContent); //This SPECIFICALLY uses the checks function to check THIS button
  i++;
  displayQ();
})

fourBtn.addEventListener('click', function() {
  checks(fourBtn.textContent);
  i++;
  displayQ();
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
      ohHello.textContent = "";
      return final();
    }
    //Time variable at the start of each question[i]
    //Time variable right before question[i] changes

    if ((i+1 === questions.length + 1)) {
      if (timeLeft > 30) {
        score += 20
      }
      return final(); //This if statement determines if all questions have been answered
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
  twoBtn.textContent = currentQs.choices[1]; //B 
  threeBtn.textContent = currentQs.choices[2]; //C 
  fourBtn.textContent = currentQs.choices[3]; //D  
}

//Check answers
function checks (banana) { //banana is arbitrarily placed - we put that parameter there because it helps us have dry code. It's a placeholder that allows us to avoid repeating code.
  console.log(userAns);
  console.log(questions[i].answer);
  if (banana === questions[i].answer) {
    ohHello.textContent = "Correct!";
    score++;
    console.log(score);
  } else { 
    timeLeft -= 15; 
    console.log(timeLeft);
    ohHello.textContent = "Incorrect!";
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
  localStorage.setItem('highscore',score); //Putting highscore, it's arbitrary.
  localStorage.setItem('initally',initialwords.value); //Putting initially, it's arbitrary.
  hideAns();
  showWords();
  $("#submit").css('display', 'block');
  timeEl.textContent = "Time";
  subClick();
}
function subClick () {
  $("#submit").click(function() { //Function to check if Submit button = clicked
    $(this).data('clicked', true); //If "this", aka button, being clicked, is true
    return window.location.assign("newpage.html"); //Take user to new page
  })
}

// function goo () {  //For the newpage.html page to link to beginning -- CAN'T FIGURE THIS OUT 
// }

$("#goback").click(function() {
  $(this).data('clicked', true);
  return window.location.assign("index.html");
  })