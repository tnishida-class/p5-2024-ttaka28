// 最終課題を制作しよう

let x, y;
let balls = [];
let gameOver = false;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height;

 for(let i = 0; i < 20; i++){
  balls.push({
    s: random(width),
    t: random(height),
    vs: random(-5,5),
    vt: random(-5,5),
    size: random(30,40)
  })
 }
}

function draw(){
  if (gameOver) {
    background(0);
    fill(255,0,0);
    textSize(100);
    text("GAME OVER", width / 2, height / 2);
    return; 
  }

  background(160, 192, 255);

  drawCharacter();

  for (let b of balls){
    ellipse(b.s, b.t, b.size);
    b.s += b.vs;
    b.t += b.vt;
    if(b.s < 0 || b.s > width){ b.vs = -1 *b.vs; }
    if(b.t < 0 || b.t > height){ b.vt = -1 * b.vt; }
    b.x = constrain(b.x, 0, width);
 　 b.y = constrain(b.y, 0, height);

  let distance = dist(x, y - 85, b.s, b.t); 
  if (distance < b.size / 2 + 25) { 
  gameOver = true; 
   }
  }
}


function drawCharacter() {
  ellipse(x, y-150, 50);
  rect(x-25,y-125,50,80);
  line(x-25,y-100,x-45,y-120);
  line(x-45,y-120,x-65,y-80);
  line(x+25,y-105,x+45,y-80);
  line(x+45,y-80,x+65,y-120);
  line(x+10,y-45,x+20,y);
  line(x-10,y-45,x-20,y);
  if(keyIsDown(LEFT_ARROW)){ 
    x -= 5;
    if(keyIsDown("A".charCodeAt(0))){ x-= 10; } 
  }
  if(keyIsDown(RIGHT_ARROW)){ 
    x += 5; 
    if(keyIsDown("A".charCodeAt(0))){ x+= 10; }
  }
  if (keyIsDown(UP_ARROW)) {
    y -= 10;}
  if (y < height) {
    y += 5; 
  }
  y = constrain(y, 0, height); 
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

