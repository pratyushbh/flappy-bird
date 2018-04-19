
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext('2d');

// load images

var bird =new Image();
var fg =new Image();
var bg =new Image();
var pipeN =new Image();
var pipeS =new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeN.src = "images/pipeNorth.png";
pipeS.src = "images/pipeSouth.png";
var fly = new Audio();
var score = new Audio();

fly.src = "sounds/fly.mp3";
score.src = "sounds/score.mp3";

function draw(){
  ctx.drawImage(bg,0,0);
  ctx.drawImage(pipeN,pX,pY);
  ctx.drawImage(pipeS,pX,pY+Const);
  ctx.drawImage(fg,0,cvs.height-fg.height);
  ctx.drawImage(bird,bX,bY);
  requestAnimationFrame(draw);
}
draw()
