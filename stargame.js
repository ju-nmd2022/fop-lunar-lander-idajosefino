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
    
    startButton(100, 100, 200, 60);
}

function startButton(x, y, w, h) {
    fill(255, 232, 31);
    rect(x, y, w, h);

    fill(0, 0, 0);
    text("Start game", x + w / 3, y + h / 1.7);
}