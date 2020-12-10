export default function sketch (p) {

    let tips = [];
    let C = ['red', 'green', 'blue', 'purple'];
 
    p.setup = function () {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p.createCanvas(500, 500);//.parent(canvasParentRef);
        p.background(220);
        tips = [
            p.createVector(0, p.height),
            p.createVector(p.width, p.height),
            p.createVector(p.width / 2, 0)
        ]
    };
 
    p.draw = function () {
        // NOTE: Do not use setState in the draw function or in functions that are executed
        // in the draw function...
        // please use normal variables or class properties for these purposes
        let T = p.createVector(tips[0].x, tips[0].y)
        for (let i = 0; i < 100; i++) {
            let rnd = Math.floor(Math.random() * tips.length);
            let v = p.createVector(tips[rnd].x, tips[rnd].y);
            T.x = p.lerp(T.x, v.x, .5);
            T.y = p.lerp(T.y, v.y, .5);
console.log(T)
            p.stroke(C[rnd]);
            p.strokeWeight(0);
            p.point(T);
        }
    };
};