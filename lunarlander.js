let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 200; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const alpha = Math.random();
    starX.push(x);
    starY.push(y);
    starAlpha.push(alpha);
}

function draw() {
    noStroke();
    background(0, 0, 0);
    for (let index in starX) {
        fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
        ellipse(starX[index], starY[index], 2);
        starAlpha[index] = starAlpha[index] + 0.02;
    }

noStroke();
fill(210,170,109);
rect(0, 520, 1080);
//mos eisley buildings
stroke(255, 255, 255);
strokeWeight(3);
//building 1
fill(255, 0, 0);
ellipse(450, 470, 60, 60);
rect(400, 470, 50, 70);
rect(450, 470, 50, 50);
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
//building 4 (pink)
fill(255, 0, 255);
rect(575, 400, 50, 120);
//building 3
ellipse(547, 465, 60, 60);
rect(503, 470, 90, 60);
rect(510, 465, 75, 6);
//tower behind building 5
fill(255, 0, 255);
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
rect(0, 0, 7, 7); //rotate this

let x = 20;
let y = 50;
let rotation = 0;
let speed = 1;

x = x + speed;

if (keyIsDown(40)) {
    speed = 5;
}   else {
    speed = 0;
}
pop();

falcon(x, y, rotation);
}

//falcon
function falcon(x, y, rotation) {
    push();
    translate(x, y);
    rotate(rotation);
    noStroke();
    fill(215, 213, 215);
    ellipse(180, 140, 80, 80);
    stroke(0, 0, 0);
    strokeWeight(2);
    fill(215,213,215);
    beginShape();
    vertex(180, 140);
    vertex(220, 130);
    vertex(220, 150);
    vertex(180, 140);
    endShape();
    beginShape();
    vertex(180, 140);
    vertex(140, 130);
    vertex(140, 150);
    vertex(180, 140);
    endShape();
    rect(172, 87, 16, 50);
    ellipse(180, 140, 20, 20);
    fill(0,0,0);
    ellipse(193, 157, 5, 5);
    ellipse(180, 160, 5, 5);
    ellipse(168, 157, 5, 5);
    ellipse(196, 167, 5, 5);
    ellipse(180, 170, 5, 5);
    ellipse(164, 167, 5, 5);
    pop();
    }