import React, { Component } from 'react';
import './App.css';
import StartPage from "./components/StartPage";
import ScrollPageMusic from './components/ScrollPageMusic';
import ScrollPageVideos from './components/ScrollPageVideos';


class App extends Component {
  render() {
    return (
      <div className="App">
        <StartPage />
        <ScrollPageMusic />
        <ScrollPageVideos />
      </div>
    );
  }
}

export default App;
