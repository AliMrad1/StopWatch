var minute = 00;
var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var appendMinute = document.getElementById("minute");
var btnStart = document.getElementById("start");
var btnPause = document.getElementById("pause");
var btnReset = document.getElementById("reset");

var interval;

function startTimer(){
  tens++;

  if(tens<9){
    appendTens.innerHTML = "0" +tens;
  }
  if(tens>9){
    appendTens.innerHTML = tens;
  }
  if(tens > 99){
    seconds++;
    appendSeconds.innerHTML = "0" +seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if(seconds > 9){
    appendSeconds.innerHTML = seconds;
  }
  if(seconds > 60){
    minute++;
    appendMinute.innerHTML = "0" + minute;
    seconds = 0;
    appendTens.innerHTML = "0" + 0;
    appendSeconds.innerHTML = "0" + 0;
  }

  if(minute> 9){
    appendMinute.innerHTML = minute;
  }
}


btnStart.onclick = function(){
  interval = setInterval(startTimer);
}

btnPause.onclick = function(){
  clearInterval(interval);
}

btnReset.onclick = function(){
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  minute = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
  appendMinute.innerHTML = minute;  
}