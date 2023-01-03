class Branch {
    constructor(begin, end) {
        this.begin = begin;
        this.end = end;
        this.branchedOff = false;
    }

    show = function () {
        strokeWeight(.5);
        stroke(200);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y)
    };

    branchOff = function () {
        let dir = createVector(this.end.x - this.begin.x, this.end.y - this.begin.y);
        dir.rotate(random(-PI / 4, PI / 4));
        let newEnd = createVector(this.end.x + dir.x, this.end.y + dir.y)
        return new Branch(this.end, newEnd);
    };
}

let tree = [];
let pos = 0;

setup = () => {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    let a = createVector(windowWidth, windowHeight / 2);
    let b = createVector(windowWidth - 100, windowHeight / 2);
    tree[0] = new Branch(a, b);
    for (let i = 0; i < 200; i++) {
        let r = random(2);
        for (let j = 0; j < r; j++) {
            if (!tree[i].branchedOff) {
                tree.push((tree[i].branchOff()));
            }
        }
    }
};

draw = () => {
    background(250);
    let p = map(mouseX, 0, windowWidth, tree.length, 0);
    for (let i = 0; i < p; i++) {
        tree[i].show();
    }
};