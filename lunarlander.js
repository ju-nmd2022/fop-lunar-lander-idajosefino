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
rect(0, 0, 7, 7);

let x = 20;
let y = 50;
let speed = 2;

if (keyIsDown(40)) {
    speed = 2;
}   else {
    speed = 0;
}
pop();

falcon(x, y, speed);
}

//falcon
function falcon(x, y, speed) {
        //engine fire when pressing key to land it
        push();
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
        ellipse(185.5, 273, 5, 10);
        ellipse(213.5, 280, 5, 20);
        ellipse(227.5, 264, 4, 7);
        pop();
    push();
    noStroke();
    fill(215, 213, 215);
    beginShape();
    vertex(209, 174);
    vertex(209, 126);
    vertex(215, 126);
    vertex(236, 174);
    endShape(); 
    beginShape();
    vertex(191, 174);
    vertex(191, 126);
    vertex(185, 126);
    vertex(164, 174);
    endShape(); 
    pop();
    push();
    translate(x, y);
    stroke(0, 0, 0);
    strokeWeight(2);
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
    push();
    stroke(0, 0, 0);
    strokeWeight(2);
    fill(215, 213, 215);
    beginShape();
    vertex(215, 173);
    vertex(230, 165);
    vertex(230, 156);
    vertex(239, 156);
    vertex(239, 171);
    vertex(215, 180);
    vertex(215, 173);
    endShape();
    pop();
    }

    