// get DOM elements

var startButton = document.querySelector("#start");
var startScreenEl = document.querySelector("#start-screen");
var timerEl = document.querySelector("#timer");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");

// Start Quiz

function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    getQuestions();
}
startButton.addEventListener("click", startQuiz);

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
        // answerButton.addEventListener("click", userAnswer); // userAnswer is next function
        choicesEl.appendChild(answerButton);
    });
}
// if a user clicked on an answer
// check the index of the answer
// compare that value to the correct answer
// if (the thing the user answered is correct)
//    display correct!
// else
//    display incorrect
//    subtract time
