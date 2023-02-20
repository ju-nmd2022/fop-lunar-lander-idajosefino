let x = 0;
let y = 0;
let speed = 1;
let velocity = 0.2;
let isGameActive = true;

let starX = [];
let starY = [];
let starAlpha = [];

function setup() {
  createCanvas(700, 700);
}

//starry sky
for (let i = 0; i < 400; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const alpha = Math.random();
    starX.push(x);
    starY.push(y);
    starAlpha.push(alpha);
}

//engine fire to appear when pressing key to land it
function engine() {
  push();
  translate(-20, -50);
  stroke(165, 242, 252);
  strokeWeight(2);
  fill(165, 242, 252);
  beginShape();
  vertex(170.5, 200);
  vertex(170.5, 240);
  vertex(175, 240);
  vertex(175, 235);
  vertex(182, 235);
  vertex(182, 250);
  vertex(189, 250);
  vertex(189, 240);
  vertex(196, 240);
  vertex(196, 245);
  vertex(203, 245);
  vertex(203, 240);
  vertex(210, 240);
  vertex(210, 255);
  vertex(217, 255);
  vertex(217, 240);
  vertex(224, 240);
  vertex(224, 247);
  vertex(229.5, 247);
  vertex(229.5, 200);   
  endShape();
  ellipse(173.3, 237, 6, 15);
  ellipse(185.5, 250, 7, 15);
  ellipse(199.5, 245, 7, 15);
  ellipse(213.5, 253, 7, 15);
  ellipse(226.8, 245, 6, 15);
  pop();
  }

//falcon
function falcon(x, y) {
  push();
  translate (x, y);
  noStroke();
  fill(215, 213, 215);

//wing right
beginShape();
vertex(189, 121);
vertex(189, 79);
vertex(193, 79);
vertex(214, 121);
endShape(); 

//wing left
beginShape();
vertex(171, 121);
vertex(171, 79);
vertex(167, 79);
vertex(145, 121);
endShape(); 

//body of falcon
stroke(0, 0, 0);
strokeWeight(2);
fill(215, 213, 215);
ellipse(180, 140, 80, 80);

//right added side to falcon
beginShape();
vertex(180, 140);
vertex(220, 130);
vertex(220, 150);
vertex(180, 140);
endShape();

//left added side to falcon
beginShape();
vertex(180, 140);
vertex(140, 130);
vertex(140, 150);
vertex(180, 140);
endShape();

//added shapes on top of falcon
rect(172, 87, 16, 50);
ellipse(180, 140, 20, 20);

//black dots
fill(0,0,0);
ellipse(193, 157, 5, 5);
ellipse(180, 160, 5, 5);
ellipse(168, 157, 5, 5);
ellipse(196, 167, 5, 5);
ellipse(180, 170, 5, 5);
ellipse(164, 167, 5, 5);

//added weird thing on top
stroke(0, 0, 0);
strokeWeight(2);
fill(215, 213, 215);
beginShape();
vertex(197, 124);
vertex(211, 118);
vertex(211, 111);
vertex(219, 111);
vertex(219, 151);
vertex(219, 124);
vertex(201, 129);
vertex(197, 124);
endShape();
pop();
}

function scenery() {
//ground
fill(210,170,109);
rect(0, 600, 700);

//death star
push();
fill(102, 102, 102);
ellipse(500, 145, 80, 80);
pop();
push();
fill(102, 105, 102);
stroke(0,0,0);
strokeWeight(3);
ellipse(490, 132, 25, 25);
rect(460, 155, 80, 0.1);
pop();

//mos eisley buildings
push();
translate(0, 80);
stroke(166, 120, 51);
strokeWeight(3);

//building 1
fill(204, 158, 89);
ellipse(450, 470, 60, 60);
rect(400, 470, 50, 70);
rect(450, 470, 50, 50);
rect(415, 510, 20, 30);
push();
translate(450, 425);
rotate(0.8);
rect(0, 0, 10, 10);
pop();

//building 2 (pole)
rect(500, 400, 3, 120);
push();
translate(501.5, 390);
rotate(0.8);
rect(0, 0, 5, 5);
pop();

//building 4 (tower)
fill(204, 158, 89);
rect(575, 400, 50, 120);
rect(590, 410, 20, 20);
push();
ellipse(600, 360, 80, 30);
pop();
push();
beginShape();
vertex(570, 389);
vertex(560, 389);
vertex(560, 360);
vertex(640, 360);
vertex(640, 389);
endShape();
pop();
beginShape();
vertex(575, 402);
vertex(561.5, 390);
vertex(638, 390);
vertex(625, 402);
endShape();

//building 3
ellipse(547, 465, 60, 60);
rect(503, 470, 90, 60);
rect(510, 465, 75, 6);
ellipse(520, 517, 10, 25);
ellipse(545, 517, 10, 25);
ellipse(570, 517, 10, 25);

//tower behind building 5
fill(204, 158, 89);
rect(741, 455, 20, 40);

//building 5
rect(693, 425, 3, 30);
ellipse(695, 497, 100, 90);
rect(614, 492, 170, 50);

//building 6
rect(782, 360, 3, 180);
push();
translate(783.5, 345);
rotate(0.8);
rect(0, 0, 7, 7);
pop();
}

function draw() {
    noStroke();
    background(0, 0, 0);
    for (let index in starX) {
        fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
        ellipse(starX[index], starY[index], 2);
        starAlpha[index] = starAlpha[index] + 0.02;
    }

  scenery();
  engine();
  falcon(x, y);
  
  y = y + velocity;
  velocity = velocity + y;

//falcon movement
if (isGameActive) {
  y = y + velocity;
  velocity = velocity + 1;
}

if (y > 370) {
  isGameActive = false;
}

if (keyIsPressed(35)) {
  velocity = velocity + 1;
}
}