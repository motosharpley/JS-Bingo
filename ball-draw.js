window.onload = initAll;
var usedBallNums = new Array(76);

function initAll() {
  if (document.getElementById) {
    document.getElementById("ballDraw").onclick = anotherBallDraw;
    ballDraw();
  }
  else{
    alert("Your browser does not support this script.");
  }
}

function ballDraw() {
  for(var i=0 ; i<25 ; i++){
      setBall(i);
    }
}

function setBall(thisBall){
  var currentBall = "ball" + thisBall;
  var colPlace = new Array(0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4);
  var colBasis = colPlace[thisBall] * 15;
  var newNum = colBasis + getNewNum() + 1;

  do{
    newNum = colBasis + getNewNum() + 1;
  }while(usedBallNums[newNum]);
  
  usedBallNums[newNum] = true;
  document.getElementById(currentBall).innerHTML = newNum;
}

function getNewNum() {
  return Math.floor(Math.random() * 15);
}

function anotherBallDraw() {
  for (var i = 1; i < usedBallNums.length; i++) {
    usedBallNums[i] = false;
  };

  ballDraw();
  return false;
}