import React from "react";
import Sketch from "react-p5";
 
export default () => {
    let tips = [];
    let C = ['red', 'green', 'blue', 'purple'];
 
    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(500, 500).parent(canvasParentRef);
        p5.background(220);
        tips = [
            p5.createVector(0, p5.height),
            p5.createVector(p5.width, p5.height),
            p5.createVector(p5.width / 2, 0)
        ]
        for (let i = 0; i < tips.length; i++) {
            p5.stroke(C[3]);
            p5.strokeWeight(10);
            // p5.point(tips[i]);
        }
    };
 
    const draw = (p5) => {
        // NOTE: Do not use setState in the draw function or in functions that are executed
        // in the draw function...
        // please use normal variables or class properties for these purposes
        let P = p5.createVector(tips[0].x, tips[0].y)
        for (let i = 0; i < 100; i++) {
            let rnd = Math.floor(Math.random() * tips.length);
            let v = p5.createVector(tips[rnd].x, tips[rnd].y);
            P.x = p5.lerp(P.x, v.x, .5);
            P.y = p5.lerp(P.y, v.y, .5);

            p5.stroke(C[rnd]);
            p5.strokeWeight(0);
            p5.point(P);
        }
    };
 
    return <Sketch className="Sire_Sketch" setup={setup} draw={draw} />;
};