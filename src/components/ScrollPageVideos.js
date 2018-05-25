import React from 'react';
import './css/scrollpagevideos.css';
import ReactPlayer from 'react-player';
import './css/startpage.css';

class ScrollPageVideos extends React.Component {
  
    videoClass = {
        "display": "inline-block",
        "width": "100px",
    };
  
    render() {
        return (
    <div className="youtubeVideos" >
        <div className="Header" >
            /// VIDEOS ///
        </div>

        <div>
            <ReactPlayer url='https://www.youtube.com/watch?v=VDwFMmOY1Pk' />
        </div>
    </div>
    );
  }
}

export default ScrollPageVideos;