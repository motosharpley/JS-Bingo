function getNewBall() {
  return Math.floor(Math.random() * 75 + 1);
}

let allBallsDrawn = new Array();

function drawBall() {
  if (allBallsDrawn.length < 75) {
    let currentBall;
    do {
      currentBall = getNewBall();
    } while (allBallsDrawn.includes(currentBall));

    allBallsDrawn.push(currentBall);

    // Update the display immediately after drawing a ball
    displayBallDraw();
  } else {
    alert('All Balls Have Been Drawn, Please Start New Game');
  }
}

// Draw intial 24 balls to start new game
let newGameBallDraw = document.getElementById('new-game-ball-draw');
newGameBallDraw.addEventListener('click', newGameDraw);

function newGameDraw() {
  if (allBallsDrawn.length < 48) {
    for (let i = 0; i < 24; i++) {
      drawBall();
    }
  } else {
    alert('Must draw next ball');
  }
}
// end Game init ball draw

let setNewBall = document.getElementById('set-ball');
setNewBall.addEventListener('click', drawBall);

function displayBallDraw() {
  let ballsDrawn = document.getElementById('balls-drawn');
  let li = document.createElement('li');

  // Append only the most recently drawn ball
  let lastBall = allBallsDrawn[allBallsDrawn.length - 1];
  li.innerText = lastBall;
  ballsDrawn.appendChild(li);

  daubCard();
  setTimeout(() => {
    interimDaubCard();
  }, 100);
}

// RESET BALL DRAW AND GET FRESH CARD
let resetBallDraw = document.getElementById('reset-ball');
resetBallDraw.addEventListener('click', resetBallDisplay);
resetBallDraw.addEventListener('click', resetBalls);
resetBallDraw.addEventListener('click', newCard);

function resetBalls() {
  allBallsDrawn = [];
}

function resetBallDisplay() {
  let ballDisplay = document.getElementById('balls-drawn');
  while (ballDisplay.firstChild) {
    ballDisplay.removeChild(ballDisplay.firstChild);
  }
}
// END RESET GAME

//  AutoPlay

function AutoPlay() {
  if (allBallsDrawn.length < 75) {
    drawBall();
  } else {
    stopAP();
  }
}

let AP;

function startAP() {
  AP = setInterval(AutoPlay, 1000);
}

function stopAP() {
  clearInterval(AP);
}

let AutoPlayButton = document.getElementById('auto-play');
AutoPlayButton.addEventListener('click', startAP);

let stopAutoPlay = document.getElementById('stop-auto-play');
stopAutoPlay.addEventListener('click', stopAP);
