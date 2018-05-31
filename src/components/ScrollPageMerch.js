import React from 'react';
import './css/scrollpagevideos.css';
import './css/startpage.css';
import './css/ScrollPageMerch.css';

class ScrollPageMerch extends React.Component {

    render() {
        return (
    <div className="merchBody" >
        <div className="Header" > /// Merch /// </div>

            <div className="merchWrapper">
                <img className="merchEach" src={require('./images/merch1.jpg')} alt={''} />
                <img className="merchEach" src={require('./images/merch1.jpg')} alt={''}  />
                <img className="merchEach" src={require('./images/merch1.jpg')} alt={''}  />
          </div>
    </div>
    );
  }
}

export default ScrollPageMerch;