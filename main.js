var ball = document.getElementById("ball");
var bat = document.getElementById("bat");
var hr = document.getElementById("hr");
var eye = document.getElementById("eye");

var batW = bat.offsetWidth;
var batH = bat.offsetHeight;
var batX = bat.offsetLeft;
var batY = bat.offsetTop;
var ballW = ball.offsetWidth;
var ballH = ball.offsetHeight;
var ballX = ball.offsetLeft;
var ballY = ball.offsetTop;
var eyeY = eye.offsetTop;

var points = 0;
hr.innerHTML = points;
//var wood = {
// width: 100,
// height: 100,
// posX: 50,
// posY: 400,
// color: "burlywood",
// radius: 50
//};
//bat.style.width = wood.width + "px";
//bat.style.height = wood.height + "px";
//bat.style.top = wood.posY + "px";
//bat.style.left = wood.posX + "%";

//function Balls(w,h,x,y,color,radius){
//  this.w = w;
//  this.h = h;
//  this.x = x;
//  this.y = y;
//  this.color = color;
// this.radius = radius;
//}
//
//var ball1 = new Balls(5,5,50,100,"red",100);
// ball.style.width = ball1.w + "px";
// ball.style.height = ball1.h + "px";
// ball.style.top = ball1.y + "px";
// ball.style.left = ball1.x + "%";
// ball.style.background = ball1.color;
// ball.style.borderRadius = ball1.radius + "%";

window.onload = function(){
 if(localStorage.getItem('puntos')){
   hr.innerHTML = localStorage.getItem('puntos');
   points = parseInt(localStorage.getItem("puntos"));
 } else {localStorage.setItem('puntos', 0);}
//     var pos = ballY;
//     var w = ballW;
//     var h = ballH;
//     var id = setInterval(frame, 5);
//     function frame() {
//         if(pos === batY) {
//             clearInterval(id);
//          console.log(ballY);
//           } else {
//                pos++;
//                h+=.1;
//                w+=.1;
//                ball.style.top = (ball.offsetTop += pos) + 'px';
//                ball.style.width = w + 'px';
//                ball.style.height = h + 'px';
//            }
//     }
 
    var mv = setInterval(move, 5);
  
  function move(){
   if(ballY === (eyeY)){
    clearInterval(mv);
       if((ballX+ballW) > batX && ballX < (batX+batW) && (ballY+ballH) > batY && ballY < (batY+batH)){
        console.log("detected");
        hit();
       }
   } 
    else if(batW > 100 && ballY < (eyeY - 50)){
      clearInterval(mv)
     }
   
   else {
  ball.style.top = (ballY += .5) + 'px';
    console.log(ballY);
  ball.style.width = (ballW += .1) + 'px';
  ball.style.height = (ballH += .1) + 'px';
   }
 }
 
  function hit(){
   var mv = setInterval(move, 5);
    function move(){
   if(ballY === -1){
        clearInterval(mv);
        points++;
          hr.innerHTML = points;
          localStorage.setItem('puntos', points);
   } else {
    var rand = Math.floor(Math.random()* 3);
    
    if(rand == 1){
  ball.style.top = (ballY -= 1) + 'px';
    console.log(ballY);
  ball.style.width = (ballW -= .1) + 'px';
  ball.style.height = (ballH -= .1) + 'px';
    }
   }
 }
  }
 
}
//function hit(){
//     var pos = ballY;
//     var w = ballW;
//     var h = ballH;
//     var id = setInterval(frame, 5);
//     function frame() {
//         if(pos === -1) {
//             clearInterval(id);
//             points++;
//               hr.innerHTML = points;
//            localStorage.setItem('puntos', points);
//      console.log(window.localStorage.getItem("puntos"));
//               document.location.reload(true);
//               } else {
//                pos--;
//                h-=.5;
//                w-=.5;
//                ball.style.top = pos + 'px';
//                ball.style.width = w + 'px';
//                ball.style.height = h + 'px';
//            }
//     }
//}

document.addEventListener("keydown",controls);
function controls(evt) {
    switch(evt.keyCode) {
        case 32:
//              bat.style.animation = "swing 1s"
              bat.style.width = (batW += 120) + "px";
              bat.style.height = (batH -= 120) + "px"
//      bat.style.transform = "rotate(90deg)";
            break;
    }
}