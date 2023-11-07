// get DOM elements

var startButton = document.querySelector("#start");
var startScreenEl = document.querySelector("#start-screen");
var timerEl = document.querySelector("#time");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var feedbackEl = document.querySelector("#feedback");
var endScreenEl = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var viewHighScores = "highscores.html";

// Timer variables

var timerCount = quizQuestions.length * 15;
var timer;
console.log(timerCount);

// Start Quiz

function startQuiz() {
  startScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  getQuestions();
  startTimer();
}
startButton.addEventListener("click", startQuiz);

// Set Timer
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;
    if (timerCount <= 0) {
      endQuiz();
    }
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
    answerButton.textContent = i + 1 + ". " + answer;
    answerButton.addEventListener("click", userAnswer);
    choicesEl.appendChild(answerButton);
  });
}
// User Answer Check to run in getQuestions function
function userAnswer() {
  // answerButton.preventDefault();
  if (this.value !== quizQuestions[questionIndex].correctAnswer) {
    // if (quizQuestions[questionIndex])
    console.log("It's working");
    // deduct time
    timerCount -= 10;
    // end quiz if time is 0 or less
    if (timerCount < 0) {
      // update timer on page
      timerCount = 0;
    }
    timerEl.textContent = timerCount;
    // tell user Wrong! in red text
    feedbackEl.textContent = "INCORRECT";
    feedbackEl.style.color = "red";
  } else {
    // tell user Correct! in green text
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.color = "green";
  }
  // Display feedback
  feedbackEl.setAttribute("class", "feedback");
  // Sets display for 3 seconds
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 3000);
  // Go to next question
  questionIndex++;
  if (questionIndex === quizQuestions.length) {
    endQuiz();
  } else {
    getQuestions();
  }
}

// End Quiz
function endQuiz() {
  clearInterval(timer);
  // Show end screen
  endScreenEl.removeAttribute("class");
  // Hide questions
  questionsEl.setAttribute("class", "hide");
  // Show final score
  finalScore.textContent = timerCount;
}

var highScoresArr = [];

function storeHighScores() {
  // Stringify and set "highScoresArr" key in localStorage to highScoresArr array
  localStorage.setItem("highScoresArr", JSON.stringify(highScoresArr));
}

// When form is submitted...
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = viewHighScores;

  var userScore = {
    initials: initialsInput.value.trim(),
    score: timerCount,
  }

    if (userScore.initials === "") {
      displayMessage("error", "Initials cannot be blank");
    }

  // Add new todoText to todos array
  highScoresArr.push(userScore);

  // Store updated todos in localStorage, re-render the list
  storeHighScores();
  renderHighScores();
});

