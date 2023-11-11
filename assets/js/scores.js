var highScoresList = document.querySelector("#highscores");

function renderHighScores() {    
    // Render a new li for each high score
    var storedHighScores = JSON.parse(window.localStorage.getItem("highScoresArr")) || [];
    storedHighScores.sort(function(a,b) {
      return b.score - a.score;
    });
    if (storedHighScores !== null) {
        var highScores = storedHighScores;
    }

    console.log(storedHighScores);
    console.log(highScores);

    for (var i = 0; i < highScores.length; i++) {
      var savedScore = highScores[i];
  
      var li = document.createElement("li");
      li.textContent = savedScore.initials + ": " + savedScore.score;
      li.setAttribute("data-index", i);
  
      highScoresList.appendChild(li);
    }
  }

  renderHighScores();
