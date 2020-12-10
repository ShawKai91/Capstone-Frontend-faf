export default function sketch (p) {

    let x = 0;
    let y = 0;
    let spacing = 20;

    p.setup = function () {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p.createCanvas(500, 500);//.parent(canvasParentRef)
        p.background(0);
    };
 
    p.draw = function () {
        // NOTE: Do not use setState in the draw function or in functions that are executed
        // in the draw function...
        // please use normal variables or class properties for these purposes
        p.stroke(255);
        if (Math.random() < 0.5) { 
            p.line(x, y, x + spacing, y + spacing);
        } else { 
            p.line(x, y + spacing, x + spacing, y); 
        }

        x = x + spacing;
        if (x > p.width) {
            x = 0;
            y = y + spacing;
        }
    };
};