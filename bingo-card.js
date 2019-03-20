window.onload = initAll;
let usedCardNums = new Array(76);


function initAll() {
  if (document.getElementById) {
    document.getElementById("newCard").onclick = anotherCard;
    newCard();
  }else{
    alert("Your browser does not support this script.");
  }
}

function newCard() {
  for(var i=0 ; i<25 ; i++){
      setSquare(i);
    }
}

function setSquare(thisSquare){
  let currentSquare = "square" + thisSquare;
  
  let colPlace = new Array(0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4);
  let colBasis = colPlace[thisSquare] * 15;
  let newNum = colBasis + getNewNum() + 1;

  do{
    newNum = colBasis + getNewNum() + 1;
  }while(usedCardNums[newNum]);
  
  usedCardNums[newNum] = true;
  document.getElementById(currentSquare).innerHTML = newNum;
  document.getElementById(currentSquare).style.backgroundColor = '';
  daubCard();
  setTimeout(() => {
    interimDaubCard();
  }, 100);
}

function getNewNum() {
  return Math.floor(Math.random() * 15);
}

function anotherCard() {
  for (var i = 1; i < usedCardNums.length; i++) {
    usedCardNums[i] = false;
  };

  newCard();
  return false;
}

/*
*
* Daub Bingo Card
*
*/

// for each usedCardNums that contains allBallsDrawn set css currentSquare red 

function daubCard() {
  for(var i=0 ; i<25 ; i++){
      daubSquare(i);
    }
}

function daubSquare(_thisSquare) {
  let _currentSquare = document.getElementById("square" + _thisSquare);
  
  allBallsDrawn.forEach(ball => {
    if(_currentSquare.innerHTML == ball) {
      _currentSquare.style.backgroundColor = 'yellow';
    }
  });
}


// ******** INTERIM PRIZE DAUB ***************

function interimDaubCard() {
  for(var i=0 ; i<24 ; i++){
      interimDaub(i);
    }
}

function interimDaub(_thisSquare) {
  let _currentSquare = document.getElementById("square" + _thisSquare);
  
  for(let i=0; i < 24; i++){
    let ball = allBallsDrawn[i];
    if(_currentSquare.innerHTML == ball) {
      _currentSquare.style.backgroundColor = 'red';
    }
  }
}