let timer;
let startDate;

function startTest(){
  document.querySelector("#result").innerHTML = "&nbsp;"
  document.querySelector("#target").style.backgroundColor = "blue"
  clearTimeout(timer);

  let randTime = Math.random()*10000 + 2000
  timer = setTimeout(changeColor, randTime);
}

function changeColor(){
  let target = document.querySelector("#target");
  target.style.backgroundColor = "red";
  startDate = new Date();
}

function reactionTime(){
  let target = document.querySelector("#target");
  if(target.style.backgroundColor === "red"){
    stopTime();
  }else{
    fail();
  }
}

function stopTime(){
  let finalTime = new Date()- startDate;
  finalTime/=1000;
  document.querySelector("#result").innerHTML = finalTime + " seconds";
}

function fail(){
  clearTimeout(timer);
  document.querySelector("#result").innerHTML = "FAIL"
}