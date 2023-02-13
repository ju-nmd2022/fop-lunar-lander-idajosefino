//starry background (garrit shaap video link: https://pixelkind.github.io/foundationsofprogramming//programming/15-07-example)

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
}

//ground
push();
background(0,0,0); //for now
noStroke();
fill(210,170,109);
rect(0, 520, 1080);
pop();

push();
//mos eisley buildings
stroke(255, 255, 255);
strokeWeight(3);
//building 1
fill(255, 0, 0);
ellipse(450, 470, 60, 60);
rect(400, 470, 50, 70);
rect(450, 470, 50, 50);
rect(445, 425, 10, 10); //rotate this
//building 2 (pole)
rect(500, 400, 3, 120);
rect(499, 394, 5, 5); //rotate this
//building 4 (pink)
push();
fill(255, 0, 255);
rect(575, 400, 50, 120);
pop();
//building 3
ellipse(547, 465, 60, 60);
rect(503, 470, 90, 60);
rect(510, 465, 75, 6);
//tower behind building 5
push();
fill(255, 0, 255);
rect(741, 455, 20, 40);
pop();
//building 5
rect(693, 425, 3, 30);
ellipse(695, 497, 100, 90);
rect(614, 492, 170, 50);
//building 6
rect(782, 360, 3, 180);
rect(780, 359, 7, 7); //rotate this
pop();

//falcon
fill(215, 213, 215);
ellipse(180, 140, 80, 80);
push();
stroke(0, 0, 0);
strokeWeight(2);
fill(215,213,215);
rect(172, 87, 16, 50);
ellipse(180, 140, 20, 20);
pop();
fill(0,0,0);
ellipse(193, 157, 5, 5);
ellipse(180, 160, 5, 5);
ellipse(168, 157, 5, 5);
ellipse(196, 167, 5, 5);
ellipse(180, 170, 5, 5);
ellipse(164, 167, 5, 5);