var highScoresList = document.querySelector("#highscores");

function renderHighScores() {    
    // Render a new li for each high score
    var storedHighScores = JSON.parse(localStorage.getItem("highScoresArr"));
    if (storedHighScores !== null) {
        highScores = storedHighScores;
    }

    console.log(storedHighScores);
    console.log(highScores);

    for (var i = 0; i < highScores.length; i++) {
      var highScores = highScores[i];
  
      var li = document.createElement("li");
      li.textContent = highScores.initials + ": " + highScores.score;
      li.setAttribute("data-index", i);
  
      highScoresList.appendChild(li);
    }
  }

  renderHighScores();