import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';

import Navbar from '../Navbar';
import sketch from './sketches/10PRINT';


class C64_10p extends Component {
    render() {
        return (
            <div className='c64 component_container'>
                <Navbar />

                <div className="my_spill c64">
                     this is my spill about it.
                </div>

                <div className="10_print sketch_container">
                    <P5Wrapper sketch={sketch} />
                    <a href='https://shawkai91.github.io/p5js-fafs/10PRINT/' target='_blank'>
                        here is a link to it because heroku was not liking how i was doing it
                    </a>
                    <div className="sketch_container-discription">
                        <p>
                        this is the famous C64 one line program.  this vertion takes more then one line though.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default C64_10p;