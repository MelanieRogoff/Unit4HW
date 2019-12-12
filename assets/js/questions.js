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
let arrayscores = [];
let score = 0; //Calc by time remaining. Answer quickly + correctly = higher score. 
let timeInterval = questions.length * 15; //Length of Q's array dets play length. 15secs/Q. Length of play=75secs.
let i = 0; //Question counter
let timeLeft = 75;
let userAns = '';
let timeAtTop = 0; //"Time";
const timeEl = document.getElementById("time");
const timeEl2 = document.getElementById("time2"); //Header
const wordsEl = document.getElementById("words"); 
const mainEl = document.getElementById("main");
const hScoreEl = document.getElementById("hscore"); //High Score 
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
const stuff = JSON.parse(localStorage.getItem('highscore')); //Prof said I need to declare this as a variable to get localStorage values to display -- CALL THE KEY ONLY
const stuff2 = localStorage.getItem('initials'); //Prof said I need to declare this as a variable to get localStorage values to display -- CALL THE KEY ONLY
//Function for viewing High Scores at beginning
function myFunction() {
  location.replace("newpage.html");
}

//Hiding and Showing Buttons
function hideSub() { //Hide "Submit" button
$("#submit").css('display', 'none');
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

    //If Statement for if all 5 questions have been answered
    if ((i === questions.length)) {
      if (timeLeft > 30) {
        score += 20;
        clearInterval(timeInterval); //Need this so the adding 20 to the score ONLY HAPPENS ONCE
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
  if (banana === questions[i].answer) {
    ohHello.textContent = "Correct!";
    score++;
  } else { 
    timeLeft -= 15; 
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
  hideAns();
  showWords();
  $("#submit").css('display', 'block');
  timeEl.textContent = "Time";
}
//Don't want to put click event below inside of a function, because it's a callback function
  //Events, including .clicks, take a function, BUT don't need to be inside of a function, as you can see below.
$("#submit").click(function() { //Function to check if Submit button = clicked
    //WANT TO SAVE INFO ONCE THEY CLICK SUBMIT, SO PUT THESE LOCALSTORAGE SAVES HERE
    if (initialwords.value.length > 0) { //Checking to see if initials are greater than 0, like if there's any initials
      let arraything = []; //Make empty array to push score/initials into
      const another = [score, initialwords.value]; // Making an array with our data -- don't need stuff2 because we have initialwords.value in this array. We have to save this into an array to call it more easily
      //This didn't work -- another.sort(function(a, b){return b - a});
      if (stuff) { //This checks if we have stuff saved in localStorage -- have to do AFTER the click so it's not empty
          stuff.push(another);  //Push our data array into the empty array, pushes new scores and initials into the array
          arraything = stuff; //Set arraything equal to stuff because it'll be drier code -- we can replace stuff with arraything
      } else {
        arraything.push(another); //Pushing our data array into the empty array -- this runs if stuff is null/false
      }
      //Putting localStorage score + windowlocation here. Saving high score into arraything. Don't need to use initials key
      localStorage.setItem('highscore', JSON.stringify(arraything)); //Then save their high score to arraything, which is now stuff, has to be a string because we can't save arrays/objects into localStorage
      window.location.assign("newpage.html"); //If initials are greater than 0 - so they input initials- take them to the View High Scores Page
    }
  })
