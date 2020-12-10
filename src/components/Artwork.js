import React, { Component } from 'react';

import Navbar from './Navbar';

import imgBG1 from '../assets/BG/(BG) girl.png';
import imgBG2 from '../assets/BG/ashley.png';
import imgBG3 from '../assets/BG/bgWide.png';
import imgBG4 from '../assets/BG/spacebg.png';

import imgART1 from '../assets/AA/(a1) peaches.png';
import imgART2 from '../assets/AA/(a3) archway.png';
import imgART3 from '../assets/AA/(a8) bridge.png';
import imgART4 from '../assets/AA/(l5) barley field.png';
import imgART5 from '../assets/AA/(l6) koi.png';
import imgART6 from '../assets/AA/(p1) beach.png';
import imgART7 from '../assets/AA/(p3) glass.png';
import imgART8 from '../assets/AA/(p4) candle.png';
import imgART9 from '../assets/AA/(p8) night scene.png';

const BGimg = [
    { photo: imgBG1, text:"girl_bg image" },
    { photo: imgBG2, text:"ash_bg image" },
    { photo: imgBG3, text:"wide_bg image" },
    { photo: imgBG4, text:"space_bg image" },
]
const ARTimg = [
    { photo: imgART1, text:"peaches image" },
    { photo: imgART2, text:"archway image" },
    { photo: imgART3, text:"bridge image" },
    { photo: imgART4, text:"barley_field image" },
    { photo: imgART5, text:"koi image" },
    { photo: imgART6, text:"beach image" },
    { photo: imgART7, text:"glass image" },
    { photo: imgART8, text:"candle image" },
    { photo: imgART9, text:"night_scene image" },
]

class Artwork extends Component {
    renderImg(image) { 
        let images = image.map((e, i) => {
            return <img className={e.text} key={i} src={e.photo}></img>
        })
        return images
    }
    render() {
        return (
            <div className='artwork component_container'>
                <Navbar />

                <div className="my_spill BGs">
                     this is my section of background images I made using Gimp.
                </div>

                <div className='background_images'>
                    {/* <img className='girl_bg' src={imgBG1} width='200' height='200'></img> */}
                    {this.renderImg(BGimg)}  
                </div>

                {/* <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"></img> */}

                <div className="my_spill art">
                     this is my section of artwork that I drew.
                </div>

                <div className="my_artwork">
                {this.renderImg(ARTimg)} 
                     <a className='facebook_album' 
                        href='https://www.facebook.com/media/set/?set=a.3350809088320695&type=3'>more of my artwork</a>
                </div>                     
            </div>
        );
    }
}

export default Artwork;