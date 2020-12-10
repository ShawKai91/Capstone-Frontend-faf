import React, { Component } from 'react';

import Navbar from './Navbar';
// import Sierpinski from './sketches/Sierpinski';


class Rocky_yew extends Component {
    render() {
        return (
            <div className='rocky_yew component_container'>
                <Navbar />

                <div className="my_spill sier"> 
                    this was my first real project in QBasic and P5.js
                </div>
                
                <div className="sierpinski sketch_container">
                    {/* <Sierpinski /> */}
                    <a href='https://shawkai91.github.io/p5js-fafs/Rocky_yew/' target='_blank'>
                        here is a link to it because heroku was not liking how i was doing it
                    </a>
                    <div className="sketch_container-discription">
                        <p>
                            The Sierpiński triangle (sometimes spelled Sierpinski), 
                            also called the Sierpiński gasket or Sierpiński sieve, 
                            is a fractal attractive fixed set with the overall shape of an equilateral triangle, 
                            subdivided recursively into smaller equilateral triangles. 
                            Originally constructed as a curve, this is one of the basic examples of self-similar sets—that is, 
                            it is a mathematically generated pattern that is reproducible at any magnification or reduction. 
                            It is named after the Polish mathematician Wacław Sierpiński, 
                            but appeared as a decorative pattern many centuries before the work of Sierpiński.
                        </p>
                        <a href='https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle'>wikipedia</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rocky_yew;