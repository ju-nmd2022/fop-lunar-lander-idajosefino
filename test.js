function startScreen() {
    background(0, 0, 0);
    startButton(100, 100, 200, 60);
  
  function startButton(x, y, w, h) {
      fill(255, 232, 31);
      rect(x, y, w, h);
  
      stroke(0, 0, 0);
      text("Start game", x + w / 3, y + h / 1.7);
  }
  }

  function mouseClicked() {
    console.log("Button was clicked");
  }

  function gameScreen() {

  }

  function resultScreen() {
    background(0, 0, 0);
    restartButton(100, 100, 200, 60);
}

function restartButton(x, y, w, h) {
    fill(255, 232, 31);
    rect(x, y, w, h);
    stroke(0, 0, 0);
    text("Restart game", x + w / 3, y + h / 1.7);
}

function mouseClicked() {
    console.log("Button was clicked");
}

function draw() {
    if (state === "start") {
      startScreen();
    } else if (state === "game") {
      gameScreen();
      gameTimer = gameTimer + 1;
      if (gameTimer >= 100) {
        gameTimer = 0;
        state = "result";
      }
    } else if (state === "result") {
      resultScreen();
    }
}