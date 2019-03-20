function getNewBall() {
  return Math.floor((Math.random() * 75) + 1);
  
}

let allBallsDrawn = new Array;

function drawBall(){
  let currentBall = getNewBall();
  do {
    currentBall = getNewBall();
  } while (allBallsDrawn.includes(currentBall));

  return allBallsDrawn.push(currentBall);  
}

// Draw intial 24 balls to start new game
let newGameBallDraw = document.getElementById('new-game-ball-draw');
newGameBallDraw.addEventListener('click',newGameDraw);

function newGameDraw() {
 for(let i=0; i<24; i++){
   drawBall();
   displayBallDraw();
 }
 console.log(allBallsDrawn);
}
// end Game init ball draw


let setNewBall = document.getElementById('set-ball');
setNewBall.addEventListener('click', drawBall);
setNewBall.addEventListener('click', displayBallDraw);


function displayBallDraw() {
  let ballsDrawn = document.getElementById('balls-drawn');
  let li = document.createElement('li')

  allBallsDrawn.forEach(ball => {
    ballsDrawn.appendChild(li);
    li.innerText = ball;
  });
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
  allBallsDrawn.forEach(ball => {
    ballDisplay.removeChild(ballDisplay.childNodes[0]);
  });
  ballDisplay.removeChild(ballDisplay.childNodes[0]);
}
// END RESET GAME