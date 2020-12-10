import React from "react";
import Sketch from "react-p5";
 
export default () => {
    let x = 0;
    let y = 0;
    let spacing = 10;
 
    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(500, 500).parent(canvasParentRef);
        p5.background(0);
        
    };
 
    const draw = (p5) => {
        // NOTE: Do not use setState in the draw function or in functions that are executed
        // in the draw function...
        // please use normal variables or class properties for these purposes
        p5.stroke(255);
        if (Math.random() < 0.5) { 
            p5.line(x, y, x + spacing, y + spacing);
        } else { 
            p5.line(x, y + spacing, x + spacing, y); 
        }

        x = x + spacing;
        if (x > p5.width) {
            x = 0;
            y = y + spacing;
        }
    };
 
    return <Sketch className="C64Sketch" setup={setup} draw={draw} />;
};