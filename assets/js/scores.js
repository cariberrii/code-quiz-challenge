console.log("this is scores.js");
// console.log(quizQuestions);

var highScoresList = document.querySelector("#highscores");

var highScores = JSON.parse(localStorage.getItem("userScore"));
console.log(highScores);