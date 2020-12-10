import React, { Component } from 'react';
var P5Wrapper = require('react-p5-wrapper');

class Name extends Component {
    render() {
        return (
            <div className='classname'>
                <P5Wrapper sketch={sketch} />
            </div>
        );
    }
}

export default Name;