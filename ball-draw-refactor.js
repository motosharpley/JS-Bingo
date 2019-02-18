function getNewBall() {
  return Math.floor((Math.random() * 75) + 1);
  
}

let allBallsDrawn = new Array;


function drawBall(){
  let currentBall = getNewBall();
  // console.log(currentBall);
  do {
    currentBall = getNewBall();
  } while (allBallsDrawn.includes(currentBall));

  return allBallsDrawn.push(currentBall);  
}



let setNewBall = document.getElementById('set-ball');
setNewBall.addEventListener('click', drawBall);
setNewBall.addEventListener('click', displayBallDraw);


function displayBallDraw() {
  console.log(allBallsDrawn.sort());
}