import React from 'react';
import './css/startpage.css';
import NavbarStart from "./NavbarStart";

const StartPage = () => 
  (
    <div className="body-start">
      <NavbarStart />
      <video className="capricon-video" src={require('./images/capricorn.mp4')} autoplay="true" muted>
      </video>
    </div>
);

  export default StartPage;
