import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

// import { browserHistory } from './react-router'
// browserHistory.push('/some/path')

class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                {/* navbar image */}
                <div className='navbar-links'>
                    <div className='navbar-link'><a href='/'>Home</a></div>

                    <div className="navbar-link P5-dropdown-wrapper">
                    <div className="dropdown">
                        <button onClick={() => ShowDropdown('P5js')} className="dropbtn"> 
                            P5.js <FontAwesomeIcon icon={faChevronDown} /></button>
                        <div id="P5js" className="dropdown-content">
                        <a href='/Rocky_yew'>sketch 1</a>
                        <a href='/10print'>sketch 2</a>                          
                        </div>
                    </div>
                    </div>

                    <div className='navbar-link'><a href='/artwork'>Artwork</a></div>  
                </div>
            </div>
        );
    }
}

    /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function ShowDropdown(IDname) {
    const qel = document.getElementById(IDname)
// to do add it so if you click off the btn it closses the dropdown
	    qel.classList.toggle("show");
        // console.log(IDname); 
}
export default Navbar;