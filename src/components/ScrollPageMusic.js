import React from 'react';
import './css/startpage.css';

const ScrollPageMusic = () => 
  (
    <div className="scrollpagemusic">

        {/* ADD A NAVBAR */}
             
        <div className="anomaly-logo">
          <div className="Header" >
            ALBUMS // SINGLES
          </div>
          <div className="albums">
            <img className="orbit" src={require('./images/orbit.jpg')} alt={''} />
            <img className="orbit" src={require('./images/watcher.PNG')} alt={''}  />
            <img className="orbit" src={require('./images/anomaly.jpg')} alt={''}  />
            <img className="orbit" src={require('./images/swift.jpg')} alt={''}  />
          </div>

            {/* ADD MUSIC */}
        </div>
    </div>
);

  export default ScrollPageMusic;
