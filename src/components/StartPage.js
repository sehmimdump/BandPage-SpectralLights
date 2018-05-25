import React from 'react';
import './css/startpage.css';
import NavbarStart from "./NavbarStart";

const StartPage = () => 
  (
    <div className="body-start">
      <NavbarStart />
      <br/>
      <video className="capricon-video" src={require('./images/capricorn.mp4')} autoPlay="true" muted loop="true">
      </video>
    </div>
);

  export default StartPage;
