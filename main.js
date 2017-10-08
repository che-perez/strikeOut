var ball = document.getElementById("ball");
var bat = document.getElementById("bat");
var wood = {
 width: 100,
 height: 100,
 posX: 50,
 posY: 400,
 color: "burlywood",
 radius: 50
};
bat.style.width = wood.width + "px";
bat.style.height = wood.height + "px";
bat.style.top = wood.posY + "px";
bat.style.left = wood.posX + "%";

function Balls(w,h,x,y,color,radius){
  this.w = w;
  this.h = h;
  this.x = x;
  this.y = y;
  this.color = color;
 this.radius = radius;
}

var ball1 = new Balls(5,5,50,100,"red",100);
 ball.style.width = ball1.w + "px";
 ball.style.height = ball1.h + "px";
 ball.style.top = ball1.y + "px";
 ball.style.left = ball1.x + "%";
 ball.style.background = ball1.color;
ball.style.borderRadius = ball1.radius + "%";

window.onload = function(){
     var pos = ball1.y;
     var w = ball1.w;
     var h = ball1.h;
     var id = setInterval(frame, 5);
     function frame() {
         if(pos === (wood.posY)) {
             clearInterval(id);
            if(bat.style.width > ball.style.width && 
                   ball.style.top < bat.style.top){
               clearInterval(id);
            }else if(ball.style.top === bat.style.top && ball.style.width < bat.style.width){
             ball.style.background = "blue";
            hit();
          }
           } else {
                pos++;
                h++;
                w++;
                ball.style.top = pos + 'px';
                ball.style.width = w + 'px';
                ball.style.height = h + 'px';
            }
     }
}
function hit(){
     var pos = 400;
     var w = 100;
     var h = 100;
     var id = setInterval(frame, 5);
     function frame() {
         if(pos === -1) {
          bat.style.width = wood.width + "px";
          bat.style.height = wood.height + "px";
             clearInterval(id);
               } else {
                pos--;
                h-=.5;
                w-=.5;
                ball.style.top = pos + 'px';
                ball.style.width = w + 'px';
                ball.style.height = h + 'px';
            }
     }
}

document.addEventListener("keydown",controls);
function controls(evt) {
    switch(evt.keyCode) {
        case 32:
              bat.style.width = 310 + "px";
              bat.style.height = 100 + "px"
            break;
    }
}