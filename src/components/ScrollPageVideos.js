import React from 'react';
import './css/scrollpagevideos.css';
import './css/startpage.css';

class ScrollPageVideos extends React.Component {
  
    render() {
        return (
    <div className="youtubeVideos" >
        <div className="Header" >
            /// VIDEOS ///
        </div>
        <div className="videos" >
            <object className="videoEach" data="https://www.youtube.com/embed/KN3ZrgeLm2A" />
            <object className="videoEach" data="https://www.youtube.com/embed/gqNiIcwv1q0" />
            <object className="videoEach" data="https://www.youtube.com/embed/8xMFr_4mYIU" />
            <object className="videoEach" data="https://www.youtube.com/embed/IhcSxAYqw8w" />
        </div>
    </div>
    );
  }
}

export default ScrollPageVideos;