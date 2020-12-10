import React, {Component} from 'react';

import Navbar from './Navbar';

export default class About extends Component {
  render() {
    return (
      <div className="about component_container">
        <Navbar />

        <div className="my_spill"> 
          this is a copilation of things ive learned and have made.
        </div>

        <div className="my_spill"> 
          there is some P5.js sketches, and some artwork ive done.
        </div>

        <div className="my_spill"> 
          I got the p5 sketches to adjust to sreens with a width of 500 
        </div>
      </div>
    );
  }
}
