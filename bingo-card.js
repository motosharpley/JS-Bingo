window.onload = initAll;
let usedCardNums = new Array(76);



function initAll() {
  if (document.getElementById) {
    document.getElementById("newCard").onclick = anotherCard;
    newCard();
  }
  // if (document.getElementById) {
  //   document.getElementById("ballDraw").onclick = anotherBallDraw;
  //   ballDraw();
  // }
  else{
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
