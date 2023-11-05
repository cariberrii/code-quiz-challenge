// get DOM elements

var startButton = document.querySelector("#start");
var startScreenEl = document.querySelector("#start-screen");
var timerEl = document.querySelector("#time");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");

// Timer variables

var timerCount;
var timer;
console.log(timerCount);

// Start Quiz

function startQuiz() {
    timerCount = quizQuestions.length * 15;
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    getQuestions();
    startTimer();
}
startButton.addEventListener("click", startQuiz);

// Start Timer
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;
  }, 1000);
  console.log(timerCount);
}

// Quiz variables
var questionIndex = 0;

// Loop through questions and answer choices as list elements
function getQuestions() {
  // iterate over the list of questions
  var activeQuestion = quizQuestions[questionIndex];
  var questionTitle = document.getElementById("question-title");
  questionTitle.textContent = activeQuestion.question;
  choicesEl.innerHTML = "";
  activeQuestion.answers.forEach(function (answer, i) {
    var answerButton = document.createElement("button");
    answerButton.setAttribute("value", answer);
    answerButton.textContent = answer;
    answerButton.addEventListener("click", userAnswer);
    choicesEl.appendChild(answerButton);
  });
}
// User Answer Check to run in getQuestions function
function userAnswer() {
  // answerButton.preventDefault();
  if (this.value !== quizQuestions[questionIndex].correctAnswerIndex) {
    // deduct time
    // end quiz if time is 0 or less
    // update timer on page
    // tell user Wrong! in red text
  } else {
    // tell user Correct! in green text
  }
}
// check the index of the answer
// compare that value to the correct answer
// if (the thing the user answered is correct)
//    display correct!
// else
//    display incorrect
//    subtract time
