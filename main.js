var ball = document.getElementById("ball");
var bat = document.getElementById("bat");
var hr = document.getElementById("hr");
var eye = document.getElementById("eye");
var strike1 = document.getElementById("st1");
var strike2 = document.getElementById("st2");
var strike3 = document.getElementById("st3");
var batW = bat.offsetWidth;
var batH = bat.offsetHeight;
var batX = bat.offsetLeft;
var batY = bat.offsetTop;
var ballW = ball.offsetWidth;
var ballH = ball.offsetHeight;
var ballX = ball.offsetLeft;
var ballY = ball.offsetTop;
var eyeY = eye.offsetTop;
 var strikeCount = 0;

var points = 0;
hr.innerHTML = points;

 window.onload =
 function idk(){
 if(localStorage.getItem('puntos')){
   hr.innerHTML = localStorage.getItem('puntos');
   points = parseInt(localStorage.getItem("puntos"));
 } else {localStorage.setItem('puntos', 0);}
  
  
        ball.style.top = (ballY = 450) + 'px';
       ball.style.left = (ballX = 700) + 'px';
       ball.style.width = (ballW = 0) + 'px';
       ball.style.height = (ballH = 0) + 'px';
        bat.style.width = (batW = 75) + "px";
        bat.style.height = (batH = 250) + "px"
        bat.style.transform = "none";
  
  
    var mv = setInterval(pitch, 5);
  
  function pitch(){
   if(ballY === (eyeY)){
       if(strikeCount == 0) {
        strikeCount += 1;
     strike1.style.opacity = "1";
        console.log("strikee" +strikeCount);
        document.getElementById('strike').play();
     } else if(strikeCount == 1){
      strikeCount += 1;
       strike2.style.opacity = "1";
      console.log("strikee" +strikeCount);
      document.getElementById('strike').play();
     } else if(strikeCount == 2){
       strike3.style.opacity = "1";
        document.getElementById('out').play();
      alert("You're Out!!!!!");
       clearInterval(mv);
     setTimeout(reset,1000);
     }
    setTimeout(idk, 1000);
   } 
    else if(batW > 100 && ballY < (eyeY - 100)){
     if(strikeCount == 0) {
     strike1.style.opacity = "1";
      console.log("strikee" +strikeCount);
      strikeCount++;
      document.getElementById('strike').play();
     } else if(strikeCount == 1){
       strikeCount++;
       strike2.style.opacity = "1";
      console.log("strikee" +strikeCount);
      document.getElementById('strike').play();
     } else if(strikeCount == 2){
       strike3.style.opacity = "1";
      document.getElementById('out').play();
      alert("You're Out!!!!!");
       clearInterval(mv);
     setTimeout(reset,1000);
     }
     clearInterval(mv);
     setTimeout(idk,1000);
     }
   
   else {
  ball.style.top = (ballY += .5) + 'px';
    console.log(ballY);
  ball.style.width = (ballW += .1) + 'px';
  ball.style.height = (ballH += .1) + 'px';
   }
       if((ballX+ballW) > batX && ballX < (batX+batW) && (ballY+ballH) > batY && ballY < (batY+batH)){
        console.log("detected");
        document.getElementById('hit').play();
        clearInterval(mv);
        hit();
       }
 }
 
    var rand = Math.floor(Math.random()* 3);
  function hit(){
   var mv = setInterval(move, 5);
    function move(){
   if(ballY === 100){
        clearInterval(mv);
        points++;
          hr.innerHTML = points;
          localStorage.setItem('puntos', points);
    if(points == 763){
     alert("YOU ARE THE NEW HOME RUN KING");
     document.querySelector("body").style.background = "black";
     
    }
    idk();
    // what actions will help me rest state to go back to batting
   } else {
      if(rand == 0){
         ball.style.top = (ballY -= 1) + 'px';
        ball.style.left = (ballX -= 1) + 'px';
         ball.style.width = (ballW -= .1) + 'px';
       ball.style.height = (ballH -= .1) + 'px';
    } else if(rand == 1){
       ball.style.top = (ballY -= 1) + 'px';
       console.log(ballY);
       ball.style.width = (ballW -= .1) + 'px';
       ball.style.height = (ballH -= .1) + 'px';
    } else if (rand == 2){
     ball.style.top = (ballY -= 1) + 'px';
     ball.style.left = (ballX += 1) + 'px';
     ball.style.width = (ballW -= .1) + 'px';
       ball.style.height = (ballH -= .1) + 'px';
    }
   }
 }
  }
  
  function reset(){
   strikeCount = 0;
   localStorage.setItem('puntos', 0);
   strike1.style.opacity = "0";
   strike2.style.opacity = "0";
   strike3.style.opacity = "0";
   idk();
  }
 
}

 document.getElementById("ballgame").play();
 
document.addEventListener("keydown",controls);
function controls(evt) {
    switch(evt.keyCode) {
        case 32:
//              bat.style.animation = "swing 1s"
              bat.style.width = (batW += 120) + "px";
              bat.style.height = (batH -= 120) + "px"
               bat.style.transform = "rotate(90deg)";
            break;
    }
}