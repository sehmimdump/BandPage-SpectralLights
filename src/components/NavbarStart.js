import React from 'react';
import './css/navbarStart.css';

import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaMusic from 'react-icons/lib/fa/music';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';

const NavbarStart = () => (
    <div className="nav-body">
        <nav className="navbar navbar-inverse">
            <div className="container-fluid nav-body-fluid">
                <ul className="nav navbar-nav">
                    <li><a className="logo-wubble" href="https://www.facebook.com/SpectraLightsOfficial/"><FaFacebookOfficial className="nav-logo" /></a></li>
                    <li><a className="logo-wubble" href="https://www.instagram.com/spectral.lights/"><FaInstagram className="nav-logo" /></a></li>
                    <li><a className="logo-wubble" href="https://spectralights.bandcamp.com/"><FaMusic className="nav-logo" /></a></li>
                    <li><a className="logo-wubble" href="https://twitter.com/sehmim"><FaTwitterSquare className="nav-logo" /></a></li>
                    <li><img className="spectral-logo" src={require('./images/logo.png')} alt={ 'logo' } /></li>
                </ul>
            </div>
        </nav>
    </div>
);

  export default NavbarStart;
