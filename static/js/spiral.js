let a = 0;
let b = 10;
let points = [];

setup = () => {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("main")
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
};

draw = () => {
    randomSeed(1);
    let T = 400;
    let randX = map(mouseX, 0, windowWidth, 0.5, 0);
    let randY = map(mouseY, 0, windowHeight, 0.5, 0);
    background(250);
    translate((windowWidth * 3) / 4, (windowHeight * 3) / 4);
    for (let t = 0; t < T; t++) {
        let i = t * 0.3;
        append(points, createVector(
            (a + b * i) * cos(i + random(0, randX)),
            (a + b * i) * sin(i + random(0, randY))
        )
        );
    }
    noFill();
    strokeWeight(.5);
    stroke(200);
    beginShape();
    for (let j = 0; j < T; j++) {
        vertex(points[j].x, points[j].y);
    }
    endShape();
    points = [];
};